import test from "node:test";
import assert from "node:assert/strict";
import { getReleasePlan, createRegistry, runRelease } from "../scripts/release.mjs";
import { mkdtemp, mkdir, readFile, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { execFile } from "node:child_process";
import { promisify } from "node:util";
import { createHash } from "node:crypto";

const execute = promisify(execFile);

const context = {
  eventName: "push",
  repository: "Nikola-Limpet/solite-icons",
  ref: "refs/heads/main",
  version: "0.3.0",
  latestVersion: "0.2.1",
  existingVersion: null,
  runNumber: "42",
  runAttempt: "1",
};

test("staging publishes a unique prerelease without touching latest", () => {
  const plan = getReleasePlan({ ...context, ref: "refs/heads/staging" });
  assert.equal(plan.publish, true);
  assert.equal(plan.version, "0.3.0-staging.42.1");
  assert.equal(plan.tag, "staging");
  assert.equal(
    getReleasePlan({ ...context, ref: "refs/heads/staging", runAttempt: "2" }).version,
    "0.3.0-staging.42.2",
  );
});

test("main publishes the explicit stable target to latest", () => {
  const plan = getReleasePlan(context);
  assert.equal(plan.publish, true);
  assert.equal(plan.version, "0.3.0");
  assert.equal(plan.tag, "latest");
});

test("pull requests, other branches, tags and forks cannot publish", () => {
  for (const overrides of [
    { eventName: "pull_request" },
    { eventName: "workflow_dispatch" },
    { ref: "refs/heads/feature" },
    { ref: "refs/tags/v0.3.0" },
    { repository: "someone/solite-icons" },
  ])
    assert.equal(getReleasePlan({ ...context, ...overrides }).publish, false);
});

test("an already published version is skipped without changing tags", () => {
  assert.equal(
    getReleasePlan({ ...context, version: "0.2.1", existingVersion: "0.2.1" }).publish,
    false,
  );
  assert.equal(getReleasePlan({ ...context, existingVersion: "0.3.0" }).publish, false);
});

test("stable and staging both reject a target behind latest", () => {
  for (const ref of ["refs/heads/main", "refs/heads/staging"])
    assert.throws(() => getReleasePlan({ ...context, ref, version: "0.1.0" }), /older/);
  assert.throws(
    () => getReleasePlan({ ...context, ref: "refs/heads/staging", version: "0.2.1" }),
    /newer/,
  );
});

test("version ordering compares numeric components", () => {
  assert.equal(
    getReleasePlan({ ...context, latestVersion: "0.9.9", version: "0.10.0" }).publish,
    true,
  );
  assert.throws(
    () => getReleasePlan({ ...context, latestVersion: "0.10.0", version: "0.9.9" }),
    /older/,
  );
});

test("staging rejects a candidate behind the current staging tag", () => {
  for (const overrides of [
    { stagingVersion: "0.4.0-staging.41.1" },
    { stagingVersion: "0.3.0-staging.43.1" },
    { stagingVersion: "0.3.0-staging.42.2" },
    { stagingVersion: "0.3.0" },
  ])
    assert.throws(
      () => getReleasePlan({ ...context, ref: "refs/heads/staging", ...overrides }),
      /staging tag/,
    );
  assert.equal(
    getReleasePlan({ ...context, ref: "refs/heads/staging", stagingVersion: "0.3.0-staging.9.9" })
      .publish,
    true,
  );
  assert.equal(
    getReleasePlan({
      ...context,
      ref: "refs/heads/staging",
      stagingVersion: "0.3.0-staging.42.1",
      existingVersion: "0.3.0-staging.42.1",
    }).publish,
    false,
  );
  assert.throws(
    () => getReleasePlan({ ...context, ref: "refs/heads/staging", stagingVersion: "invalid" }),
    /staging tag/,
  );
});

test("registry can read the staging tag and treats its absence as optional", async () => {
  const staged = { ...metadata, version: "0.3.0-staging.41.1" };
  const registry = createRegistry(async (url) => {
    assert.equal(url, "https://registry.npmjs.org/solite-icons/staging");
    return new Response(JSON.stringify(staged));
  });
  assert.deepEqual(await registry.staging(), staged);
  assert.equal(await createRegistry(async () => new Response("", { status: 404 })).staging(), null);
  await assert.rejects(
    () => createRegistry(async () => new Response("", { status: 503 })).staging(),
    /Registry/,
  );
});

test("invalid targets, malformed registry versions and unsafe run identifiers fail closed", () => {
  for (const version of [
    "0.3.0-beta.1",
    "v0.3.0",
    "00.3.0",
    "0.3",
    "0.3.0+build",
    "0.3.0\n",
    "9007199254740992.0.0",
  ])
    assert.throws(() => getReleasePlan({ ...context, version }), /stable version/);
  for (const latestVersion of [null, undefined, "oops", "0.3.0-beta.1"])
    assert.throws(() => getReleasePlan({ ...context, latestVersion }), /stable version/);
  assert.throws(
    () => getReleasePlan({ ...context, existingVersion: "0.4.0" }),
    /Unexpected existing/,
  );
  for (const runNumber of ["0", "01", "-1", "2;echo", undefined])
    assert.throws(
      () => getReleasePlan({ ...context, ref: "refs/heads/staging", runNumber }),
      /run identifier/,
    );
});

const metadata = { name: "solite-icons", version: "0.3.0", dist: { integrity: "sha512-example" } };

test("registry reads exact public metadata and distinguishes missing versions", async () => {
  const urls = [];
  const registry = createRegistry(async (url) => {
    urls.push(String(url));
    return url.endsWith("/0.3.0")
      ? new Response(JSON.stringify(metadata))
      : new Response("", { status: 404 });
  });
  assert.deepEqual(await registry.version("0.3.0"), metadata);
  assert.equal(await registry.version("0.3.1"), null);
  assert.deepEqual(urls, [
    "https://registry.npmjs.org/solite-icons/0.3.0",
    "https://registry.npmjs.org/solite-icons/0.3.1",
  ]);
  await assert.rejects(() => registry.latest(), /Registry.*404/);
});

test("registry outages, auth errors and malformed responses never become a missing version", async () => {
  for (const status of [401, 403, 429, 500, 503]) {
    const registry = createRegistry(async () => new Response("failure", { status }));
    await assert.rejects(() => registry.version("0.3.0"), /Registry/);
  }
  for (const body of [
    "not json",
    "null",
    "{}",
    JSON.stringify({ ...metadata, version: "0.4.0" }),
    JSON.stringify({ ...metadata, name: "other" }),
    JSON.stringify({ ...metadata, dist: {} }),
  ]) {
    await assert.rejects(
      () => createRegistry(async () => new Response(body)).version("0.3.0"),
      /metadata|JSON/,
    );
  }
  await assert.rejects(
    () =>
      createRegistry(async () => {
        throw new Error("network down");
      }).version("0.3.0"),
    /network down/,
  );
});

async function releaseFixture(
  t,
  {
    branch = "main",
    version = "0.3.0",
    latest = "0.2.1",
    existing = null,
    stale = false,
    badManifest = false,
    tamper = false,
    publishError = false,
    badIntegrity = false,
    lockVersion = version,
  } = {},
) {
  const root = await mkdtemp(join(tmpdir(), "solite-release-test-"));
  t.after(() => rm(root, { recursive: true, force: true }));
  const pkg = {
    name: "solite-icons",
    version,
    type: "module",
    files: ["index.js", "manifest.json"],
    scripts: { build: "node build.mjs", test: "node --check index.js" },
  };
  await writeFile(join(root, "package.json"), JSON.stringify(pkg));
  await writeFile(
    join(root, "package-lock.json"),
    JSON.stringify({
      name: "solite-icons",
      version: lockVersion,
      lockfileVersion: 3,
      packages: { "": { name: "solite-icons", version: lockVersion } },
    }),
  );
  await writeFile(join(root, "index.js"), "export const icon = 'home';\n");
  await writeFile(
    join(root, "build.mjs"),
    `import { readFileSync, writeFileSync } from 'node:fs';
    const pkg = JSON.parse(readFileSync('package.json'));
    writeFileSync('manifest.json', JSON.stringify({version: ${badManifest ? "'0.0.0'" : "pkg.version"}}));`,
  );
  const env = {
    GITHUB_EVENT_NAME: "push",
    GITHUB_REPOSITORY: "Nikola-Limpet/solite-icons",
    GITHUB_REF: `refs/heads/${branch}`,
    GITHUB_SHA: "a".repeat(40),
    GITHUB_RUN_NUMBER: "42",
    GITHUB_RUN_ATTEMPT: "1",
  };
  const calls = [];
  let published = existing;
  const registry = {
    latest: async () => ({
      name: "solite-icons",
      version: latest,
      dist: { integrity: "sha512-previous" },
    }),
    version: async (candidate) => (published?.version === candidate ? published : null),
    staging: async () => null,
  };
  const run = async (command, args) => {
    calls.push([command, ...args]);
    if (command === "npm" && args[0] === "publish") {
      if (publishError) throw new Error("npm rejected publish");
      const archive = await readFile(args[1]);
      const lock = JSON.parse(await readFile(join(root, "package-lock.json")));
      published = {
        name: "solite-icons",
        version: lock.version,
        dist: {
          integrity: badIntegrity
            ? "sha512-wrong"
            : `sha512-${createHash("sha512").update(archive).digest("base64")}`,
        },
      };
      return "published";
    }
    const { stdout } = await execute(command, args, { cwd: root, maxBuffer: 8 * 1024 * 1024 });
    if (tamper && command === "npm" && args[0] === "pack") {
      const packed = JSON.parse(stdout)[0];
      await writeFile(join(root, "output/npm-release", packed.filename), "changed archive");
    }
    return stdout;
  };
  return { root, env, registry, run, calls, head: async () => (stale ? "b" : "a").repeat(40) };
}

test("staging builds and publishes the inspected archive with matching package, lock and manifest", async (t) => {
  const fixture = await releaseFixture(t, { branch: "staging" });
  const result = await runRelease({ ...fixture, publish: true });
  assert.equal(result.status, "published");
  assert.equal(result.version, "0.3.0-staging.42.1");
  const lock = JSON.parse(await readFile(join(fixture.root, "package-lock.json")));
  assert.equal(lock.version, "0.3.0-staging.42.1");
  assert.equal(lock.packages[""].version, "0.3.0-staging.42.1");
  const publish = fixture.calls.filter((call) => call[1] === "publish");
  assert.deepEqual(publish, [
    [
      "npm",
      "publish",
      join(fixture.root, "output/npm-release/solite-icons-0.3.0-staging.42.1.tgz"),
      "--access",
      "public",
      "--tag",
      "staging",
      "--ignore-scripts",
      "--registry",
      "https://registry.npmjs.org",
    ],
  ]);
  assert.equal(fixture.calls.filter((call) => call[1] === "pack").length, 1);
  assert.ok(fixture.calls.some((call) => call[1] === "test"));
  assert.equal(
    JSON.parse(await readFile(join(fixture.root, "output/npm-release/release.json"))).status,
    "published",
  );
});

test("stable publish preserves target and uses latest", async (t) => {
  const fixture = await releaseFixture(t);
  const result = await runRelease({ ...fixture, publish: true });
  assert.equal(result.version, "0.3.0");
  assert.equal(result.tag, "latest");
  assert.equal(JSON.parse(await readFile(join(fixture.root, "package.json"))).version, "0.3.0");
});

test("existing stable version skips without executing any command or requiring authentication", async (t) => {
  const fixture = await releaseFixture(t, { version: "0.2.1", existing: { version: "0.2.1" } });
  assert.equal((await runRelease({ ...fixture, publish: true })).status, "skipped");
  assert.deepEqual(fixture.calls, []);
});

test("plan mode reports release eligibility without mutating package files or publishing", async (t) => {
  const fixture = await releaseFixture(t, { branch: "staging" });
  assert.equal((await runRelease(fixture)).status, "planned");
  assert.equal(JSON.parse(await readFile(join(fixture.root, "package.json"))).version, "0.3.0");
  assert.deepEqual(fixture.calls, []);
});

test("disallowed events skip without reading the registry or running commands", async (t) => {
  const fixture = await releaseFixture(t);
  fixture.env.GITHUB_EVENT_NAME = "pull_request";
  fixture.registry.latest = () => {
    throw new Error("must not read registry");
  };
  assert.equal((await runRelease({ ...fixture, publish: true })).status, "skipped");
  assert.deepEqual(fixture.calls, []);
});

test("stale branch head prevents publication", async (t) => {
  const fixture = await releaseFixture(t, { stale: true });
  await assert.rejects(() => runRelease({ ...fixture, publish: true }), /head.*changed/);
  assert.ok(!fixture.calls.some((call) => call[1] === "publish"));
});

test("a restored older run cannot move staging backward despite being the current head", async (t) => {
  const fixture = await releaseFixture(t, { branch: "staging" });
  fixture.registry.staging = async () => ({ version: "0.3.0-staging.43.1" });
  await assert.rejects(() => runRelease({ ...fixture, publish: true }), /staging tag/);
  assert.deepEqual(fixture.calls, []);
});

test("a staging tag that advances during packing is rechecked before publishing", async (t) => {
  const fixture = await releaseFixture(t, { branch: "staging" });
  let reads = 0;
  fixture.registry.staging = async () => (++reads === 1 ? null : { version: "0.4.0-staging.43.1" });
  await assert.rejects(() => runRelease({ ...fixture, publish: true }), /staging tag/);
  assert.ok(fixture.calls.some((call) => call[1] === "pack"));
  assert.ok(!fixture.calls.some((call) => call[1] === "publish"));
});

test("mismatching lockfile blocks a release", async (t) => {
  const fixture = await releaseFixture(t, { lockVersion: "0.2.1" });
  await assert.rejects(() => runRelease({ ...fixture, publish: true }), /lockfile/);
  assert.ok(!fixture.calls.some((call) => call[1] === "publish"));
});

test("an archive with the wrong manifest version is never published", async (t) => {
  const fixture = await releaseFixture(t, { badManifest: true });
  await assert.rejects(() => runRelease({ ...fixture, publish: true }), /manifest/);
  assert.ok(!fixture.calls.some((call) => call[1] === "publish"));
});

test("a modified archive is never published", async (t) => {
  const fixture = await releaseFixture(t, { tamper: true });
  await assert.rejects(() => runRelease({ ...fixture, publish: true }), /integrity/);
  assert.ok(!fixture.calls.some((call) => call[1] === "publish"));
});

test("publish rejection remains failed with an inspectable archive and error metadata", async (t) => {
  const fixture = await releaseFixture(t, { publishError: true });
  await assert.rejects(() => runRelease({ ...fixture, publish: true }), /npm rejected/);
  const report = JSON.parse(await readFile(join(fixture.root, "output/npm-release/release.json")));
  assert.equal(report.status, "failed");
  assert.ok(
    (await readFile(join(fixture.root, "output/npm-release/solite-icons-0.3.0.tgz"))).length > 0,
  );
});

test("registry integrity must match the actual published archive", async (t) => {
  const fixture = await releaseFixture(t, { badIntegrity: true });
  await assert.rejects(() => runRelease({ ...fixture, publish: true }), /integrity/);
});
