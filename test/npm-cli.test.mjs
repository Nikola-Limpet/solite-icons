import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdtemp, writeFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

test("npm scripts use the launching npm CLI even when PATH contains another npm", async () => {
  const directory = await mkdtemp(join(tmpdir(), "solite-npm-path-"));
  try {
    await writeFile(join(directory, "npm"), "#!/bin/sh\nprintf 'untrusted-npm'\n", { mode: 0o755 });
    const expected = execFileSync(process.execPath, [process.env.npm_execpath, "--version"], {
      encoding: "utf8",
    });
    const actual = execFileSync(
      process.execPath,
      [
        "--input-type=module",
        "-e",
        'import { runNpm } from "./scripts/npm-cli.mjs"; process.stdout.write(runNpm(["--version"], { encoding: "utf8" }));',
      ],
      { encoding: "utf8", env: { ...process.env, PATH: directory } },
    );
    assert.equal(actual, expected);
    assert.doesNotMatch(actual, /untrusted-npm/);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

test("npm scripts reject missing or relative npm CLI paths", () => {
  for (const path of ["", "npm-cli.js"]) {
    assert.throws(
      () =>
        execFileSync(
          process.execPath,
          [
            "--input-type=module",
            "-e",
            'import { runNpm } from "./scripts/npm-cli.mjs"; runNpm(["--version"]);',
          ],
          {
            env: { ...process.env, npm_execpath: path },
            stdio: "pipe",
          },
        ),
      (error) => error.stderr.toString().includes("Run this command through npm run"),
    );
  }
});
