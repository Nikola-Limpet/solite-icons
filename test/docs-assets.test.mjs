import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile, readFile, copyFile, readdir, rm } from "node:fs/promises";
import { join } from "node:path";
import { tmpdir } from "node:os";
import { execFileSync } from "node:child_process";

test("docs asset sync removes icons absent from the installed release and preserves brand files", async () => {
  const directory = await mkdtemp(join(tmpdir(), "solite-docs-assets-"));
  try {
    const scripts = join(directory, "scripts");
    const packageRoot = join(directory, "node_modules/solite-icons");
    const publicDir = join(directory, "public");
    await Promise.all([
      mkdir(scripts, { recursive: true }),
      mkdir(join(packageRoot, "svg"), { recursive: true }),
      mkdir(join(publicDir, "brand"), { recursive: true }),
    ]);
    await copyFile(
      new URL("../website/scripts/sync-assets.mjs", import.meta.url),
      join(scripts, "sync-assets.mjs"),
    );
    await writeFile(
      join(packageRoot, "package.json"),
      JSON.stringify({ name: "solite-icons", exports: { "./package.json": "./package.json" } }),
    );
    await writeFile(join(packageRoot, "svg/home.svg"), "<svg/>");
    await writeFile(join(packageRoot, "svg/ear.svg"), "<svg/>");
    await writeFile(join(packageRoot, "sprite.svg"), "candidate sprite");
    await writeFile(join(packageRoot, "manifest.json"), JSON.stringify({ count: 2 }));
    await writeFile(join(publicDir, "brand/logo.svg"), "keep brand");
    const sync = () =>
      execFileSync(process.execPath, [join(scripts, "sync-assets.mjs")], { cwd: directory });
    sync();
    assert.deepEqual((await readdir(join(publicDir, "svg"))).sort(), ["ear.svg", "home.svg"]);
    await rm(join(packageRoot, "svg/ear.svg"));
    await writeFile(join(packageRoot, "sprite.svg"), "published sprite");
    await writeFile(join(packageRoot, "manifest.json"), JSON.stringify({ count: 1 }));
    sync();
    assert.deepEqual(await readdir(join(publicDir, "svg")), ["home.svg"]);
    assert.equal(await readFile(join(publicDir, "brand/logo.svg"), "utf8"), "keep brand");
    assert.equal(await readFile(join(publicDir, "sprite.svg"), "utf8"), "published sprite");
    assert.equal(JSON.parse(await readFile(join(publicDir, "manifest.json"), "utf8")).count, 1);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});
