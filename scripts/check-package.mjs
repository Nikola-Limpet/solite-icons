import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { mkdir, mkdtemp, readFile, writeFile, copyFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = fileURLToPath(new URL("../", import.meta.url));
process.chdir(root);
await mkdir("output", { recursive: true });
execFileSync("npm", ["run", "check"], { stdio: "inherit" });
const [packed] = JSON.parse(
  execFileSync("npm", ["pack", "--ignore-scripts", "--json", "--pack-destination", "output"], {
    encoding: "utf8",
  }),
);
const directory = await mkdtemp(join(tmpdir(), "solite-icons-consumer-"));
try {
  await writeFile(
    join(directory, "package.json"),
    JSON.stringify({ private: true, type: "module" }),
  );
  execFileSync(
    "npm",
    [
      "install",
      "--ignore-scripts",
      "--no-audit",
      "--no-fund",
      "--package-lock=false",
      resolve("output", packed.filename),
      "react@19.2.8",
      "react-dom@19.2.8",
      "typescript@6.0.3",
      "@types/react@19.2.18",
    ],
    { cwd: directory, stdio: "inherit" },
  );
  const probe = `
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { join } from 'node:path';
import { pathToFileURL } from 'node:url';
import { createElement } from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { KeyboardIcon, SoliteProvider } from 'solite-icons';
import { icons } from 'solite-icons/data';
import { searchIcons } from 'solite-icons/metadata';
import { LazySoliteIcon } from 'solite-icons/lazy';
import EarIcon from 'solite-icons/icons/ear';
const require = createRequire(import.meta.url);
const manifest = require('solite-icons/manifest.json');
assert.equal(manifest.count, 553);
assert.equal(manifest.version, '0.3.0');
assert.equal(Object.keys(icons).length, 553);
assert.ok(searchIcons('hearing').includes('ear'));
assert.match(renderToStaticMarkup(createElement(SoliteProvider, {size:20}, createElement(KeyboardIcon))), /width="20"/);
assert.match(renderToStaticMarkup(createElement(EarIcon)), /data-solite-icon="ear"/);
assert.equal(typeof LazySoliteIcon, 'object');
const root = join(require.resolve('solite-icons/package.json'), '..');
const esm = await import(pathToFileURL(join(root, 'dist/esm/lazy-imports.js')).href);
const cjs = require(join(root, 'dist/cjs/lazy-imports.js'));
for (const format of [esm, cjs]) for (const [name, load] of Object.entries(format.lazyIconImports)) {
 const module = await load();
 assert.match(renderToStaticMarkup(createElement(module.default)), new RegExp('data-solite-icon="' + name + '"'));
}
assert.equal(Object.keys(require('solite-icons/data').icons).length, 553);
assert.equal(require('solite-icons/metadata').isIconName('__proto__'), false);
assert.equal(typeof require('solite-icons/lazy').LazySoliteIcon, 'object');
console.log('Packed consumer: 553 icons; ESM/CJS lazy loaders, named/deep/data/metadata entries and rendering pass.');
`;
  await writeFile(join(directory, "probe.mjs"), probe);
  execFileSync(process.execPath, ["probe.mjs"], { cwd: directory, stdio: "inherit" });
  await copyFile("test/fixtures/react.ts", join(directory, "react.ts"));
  await copyFile("test/fixtures/require.cts", join(directory, "require.cts"));
  await writeFile(
    join(directory, "tsconfig.json"),
    JSON.stringify({
      compilerOptions: {
        target: "ES2022",
        module: "NodeNext",
        moduleResolution: "NodeNext",
        strict: true,
        noEmit: true,
      },
      include: ["react.ts", "require.cts"],
    }),
  );
  execFileSync(
    process.execPath,
    ["node_modules/typescript/bin/tsc", "--project", "tsconfig.json"],
    { cwd: directory, stdio: "inherit" },
  );
  const report = {
    version: packed.version,
    count: 553,
    filename: packed.filename,
    integrity: packed.integrity,
    size: packed.size,
    unpackedSize: packed.unpackedSize,
    files: packed.files.length,
    esm: true,
    commonjs: true,
    everyLazyLoader: true,
    typescript: true,
  };
  assert.equal(report.version, JSON.parse(await readFile("package.json", "utf8")).version);
  await writeFile("output/packed-consumer-report.json", JSON.stringify(report, null, 2) + "\n");
  console.log(`Verified release archive: output/${packed.filename}`);
} finally {
  await rm(directory, { recursive: true, force: true });
}
