import { readFile, writeFile, mkdir } from "node:fs/promises";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { createHash } from "node:crypto";
import { resolve, join } from "node:path";
import { pathToFileURL } from "node:url";

const repository = "Nikola-Limpet/solite-icons";
const packageName = "solite-icons";
const registryUrl = "https://registry.npmjs.org";

function allowed(context) {
  return (
    context.eventName === "push" &&
    context.repository === repository &&
    ["refs/heads/main", "refs/heads/staging"].includes(context.ref)
  );
}

function stableVersion(value) {
  if (
    typeof value !== "string" ||
    !/^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)$/.test(value) ||
    !value.split(".").every((part) => Number.isSafeInteger(Number(part)))
  ) {
    throw new Error(`Expected a stable version, got ${String(value)}`);
  }
  return value.split(".").map(Number);
}

function compareVersions(left, right) {
  const a = stableVersion(left);
  const b = stableVersion(right);
  for (let i = 0; i < 3; i++) {
    if (a[i] !== b[i]) return Math.sign(a[i] - b[i]);
  }
  return 0;
}

export function getReleasePlan(context) {
  if (!allowed(context))
    return { publish: false, reason: "This event, repository or branch cannot publish." };
  const { version, latestVersion, existingVersion, ref, runNumber, runAttempt } = context;
  const comparison = compareVersions(version, latestVersion);
  if (comparison < 0) throw new Error(`Target ${version} is older than latest ${latestVersion}.`);
  const staging = ref === "refs/heads/staging";
  let candidate = version;
  if (staging) {
    if (comparison === 0)
      throw new Error("Staging needs a target newer than the latest stable release.");
    for (const value of [runNumber, runAttempt]) {
      if (
        typeof value !== "string" ||
        !/^[1-9]\d*$/.test(value) ||
        !Number.isSafeInteger(Number(value))
      )
        throw new Error("Invalid GitHub run identifier.");
    }
    candidate = `${version}-staging.${runNumber}.${runAttempt}`;
  }
  if (existingVersion != null && existingVersion !== candidate)
    throw new Error("Unexpected existing registry version.");
  return {
    publish: existingVersion == null,
    version: candidate,
    tag: staging ? "staging" : "latest",
    reason:
      existingVersion == null
        ? "New version ready for publishing."
        : "Version already published; no tags changed.",
  };
}

export function createRegistry(fetcher = fetch) {
  async function read(selector, optional) {
    const response = await fetcher(
      `${registryUrl}/${packageName}/${encodeURIComponent(selector)}`,
      {
        headers: { accept: "application/json", "cache-control": "no-cache" },
        signal: AbortSignal.timeout(30_000),
      },
    );
    if (response.status === 404 && optional) return null;
    if (!response.ok) throw new Error(`Registry request failed: HTTP ${response.status}.`);
    let data;
    try {
      data = await response.json();
    } catch {
      throw new Error("Registry returned invalid JSON metadata.");
    }
    if (
      data?.name !== packageName ||
      typeof data?.version !== "string" ||
      typeof data?.dist?.integrity !== "string" ||
      !data.dist.integrity.startsWith("sha512-") ||
      (selector !== "latest" && data.version !== selector)
    ) {
      throw new Error("Registry returned invalid package metadata.");
    }
    return data;
  }
  return { latest: () => read("latest", false), version: (version) => read(version, true) };
}

const execute = promisify(execFile);
const jsonFile = async (path) => JSON.parse(await readFile(path, "utf8"));
const integrity = (bytes) => `sha512-${createHash("sha512").update(bytes).digest("base64")}`;

export async function runRelease({
  env = process.env,
  root = process.cwd(),
  registry = createRegistry(),
  run = async (command, args) =>
    (
      await execute(command, args, {
        cwd: root,
        maxBuffer: 16 * 1024 * 1024,
      })
    ).stdout,
  head = async (ref) =>
    (await run("git", ["ls-remote", "--exit-code", "origin", ref])).split(/\s/)[0],
  publish = false,
} = {}) {
  const output = resolve(root, "output/npm-release");
  await mkdir(output, { recursive: true });
  let report = { status: "started", commit: env.GITHUB_SHA ?? null };
  const save = async (fields) => {
    report = { ...report, ...fields };
    await writeFile(join(output, "release.json"), JSON.stringify(report, null, 2) + "\n");
    return report;
  };
  const context = {
    eventName: env.GITHUB_EVENT_NAME,
    repository: env.GITHUB_REPOSITORY,
    ref: env.GITHUB_REF,
    runNumber: env.GITHUB_RUN_NUMBER,
    runAttempt: env.GITHUB_RUN_ATTEMPT,
  };
  try {
    if (!allowed(context)) return await save({ status: "skipped", ...getReleasePlan(context) });
    const pkg = await jsonFile(join(root, "package.json"));
    const lock = await jsonFile(join(root, "package-lock.json"));
    if (pkg.name !== packageName) throw new Error("Unexpected package name.");
    if (lock.version !== pkg.version || lock.packages?.[""]?.version !== pkg.version)
      throw new Error("Package version and lockfile versions must agree.");
    context.version = pkg.version;
    const plan = async () => {
      const latest = await registry.latest();
      const proposed = getReleasePlan({ ...context, latestVersion: latest.version });
      const existing = await registry.version(proposed.version);
      return getReleasePlan({
        ...context,
        latestVersion: latest.version,
        existingVersion: existing?.version,
      });
    };
    const selected = await plan();
    await save(selected);
    if (!selected.publish) return await save({ status: "skipped" });
    if (!publish) return await save({ status: "planned" });
    const assertHead = async () => {
      if (
        !/^[a-f0-9]{40}$/.test(env.GITHUB_SHA ?? "") ||
        (await head(context.ref)) !== env.GITHUB_SHA
      )
        throw new Error(
          "Branch head has changed or the expected commit is invalid; refusing a stale release.",
        );
    };
    await assertHead();
    pkg.version = selected.version;
    lock.version = selected.version;
    lock.packages[""].version = selected.version;
    await writeFile(join(root, "package.json"), JSON.stringify(pkg, null, 2) + "\n");
    await writeFile(join(root, "package-lock.json"), JSON.stringify(lock, null, 2) + "\n");
    await run("npm", ["run", "build"]);
    await run("npm", ["test"]);
    const packed = JSON.parse(
      await run("npm", ["pack", "--json", "--ignore-scripts", "--pack-destination", output]),
    );
    const item = packed[0];
    const filename = `${packageName}-${selected.version}.tgz`;
    if (
      packed.length !== 1 ||
      item.name !== packageName ||
      item.version !== selected.version ||
      item.filename !== filename
    )
      throw new Error("Unexpected packed package metadata.");
    const archive = join(output, filename);
    const expectedIntegrity = integrity(await readFile(archive));
    if (item.integrity !== expectedIntegrity) throw new Error("Packed archive integrity mismatch.");
    const packedPkg = JSON.parse(await run("tar", ["-xOf", archive, "package/package.json"]));
    const manifest = JSON.parse(await run("tar", ["-xOf", archive, "package/manifest.json"]));
    if (
      packedPkg.name !== packageName ||
      packedPkg.version !== selected.version ||
      manifest.version !== selected.version
    )
      throw new Error("Archive package and manifest versions must match the release.");
    await save({ status: "packed", archive: filename, integrity: expectedIntegrity });
    const finalPlan = await plan();
    if (!finalPlan.publish) return await save({ ...finalPlan, status: "skipped" });
    await assertHead();
    if (integrity(await readFile(archive)) !== expectedIntegrity)
      throw new Error("Archive integrity changed before publication.");
    await run("npm", [
      "publish",
      archive,
      "--access",
      "public",
      "--tag",
      selected.tag,
      "--ignore-scripts",
      "--registry",
      registryUrl,
    ]);
    const published = await registry.version(selected.version);
    if (!published || published.dist.integrity !== expectedIntegrity)
      throw new Error(
        "Published registry integrity does not match the inspected archive; inspect npm before retrying.",
      );
    return await save({ status: "published" });
  } catch (error) {
    await save({ status: "failed", error: error.message });
    throw error;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  const command = process.argv[2];
  if (!["plan", "publish"].includes(command)) {
    console.error("Usage: node scripts/release.mjs plan|publish");
    process.exitCode = 1;
  } else {
    try {
      console.log(JSON.stringify(await runRelease({ publish: command === "publish" }), null, 2));
    } catch (error) {
      console.error(error.message);
      process.exitCode = 1;
    }
  }
}
