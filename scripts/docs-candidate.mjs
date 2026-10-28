import { execFileSync } from "node:child_process";
import { mkdir, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);
process.chdir(fileURLToPath(root));
const restore = process.argv.includes("--restore");
if (restore) {
  execFileSync("npm", ["--prefix", "website", "ci"], { stdio: "inherit" });
  console.log("Restored the docs' locked public npm dependency.");
} else {
  await mkdir("output", { recursive: true });
  execFileSync("npm", ["run", "build"], { stdio: "inherit" });
  const output = execFileSync(
    "npm",
    ["pack", "--ignore-scripts", "--json", "--pack-destination", "output"],
    { encoding: "utf8" },
  );
  const [{ filename }] = JSON.parse(output);
  execFileSync(
    "npm",
    [
      "--prefix",
      "website",
      "install",
      "--no-save",
      "--package-lock=false",
      "--ignore-scripts",
      `solite-icons@file:${resolve("output", filename)}`,
    ],
    { stdio: "inherit" },
  );
  const candidate = JSON.parse(
    await readFile(new URL("../manifest.json", import.meta.url), "utf8"),
  );
  console.log(
    `Docs now use the local ${candidate.version} candidate with ${candidate.count} icons. Package manifests and the registry lockfile were not changed.`,
  );
}
