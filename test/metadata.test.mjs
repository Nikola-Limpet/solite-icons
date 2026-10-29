import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { build } from "esbuild";

async function metadata() {
  const pkg = JSON.parse(await readFile(new URL("../package.json", import.meta.url)));
  assert.ok(pkg.exports["./metadata"], "A React-free metadata entry must be exported");
  return import("solite-icons/metadata");
}

test("search finds canonical icons from aliases, tags and component spelling", async () => {
  const { searchIcons } = await metadata();
  for (const [query, expected] of [
    ["close", "x"],
    ["delete", "trash"],
    ["gear", "settings"],
    ["magnifier", "search"],
    ["hearing", "ear"],
    ["CashRegisterIcon", "cash-register"],
    ["cash register", "cash-register"],
  ])
    assert.ok(searchIcons(query).includes(expected), `${query} should find ${expected}`);
  assert.equal(searchIcons("a-name-with-no-matching-concept-12345").length, 0);
  assert.deepEqual(searchIcons("  "), searchIcons(""));
});

test("metadata covers the collection and does not accept inherited or non-string names", async () => {
  const { iconMetadata, isIconName, searchIcons, lucideIconMap } = await metadata();
  const { icons } = await import("solite-icons/data");
  assert.deepEqual(new Set(Object.keys(iconMetadata)), new Set(Object.keys(icons)));
  assert.equal(searchIcons("").length, 553);
  for (const value of ["__proto__", "constructor", "toString", "missing", null, 123, {}])
    assert.equal(isIconName(value), false);
  assert.equal(isIconName("home"), true);
  for (const [name, info] of Object.entries(iconMetadata)) {
    assert.ok(info.category.length, name);
    assert.ok(info.tags.length, name);
  }
  assert.equal(lucideIconMap.House, "home");
  for (const name of Object.values(lucideIconMap)) assert.equal(isIconName(name), true);
  const require = createRequire(import.meta.url);
  assert.equal(require("solite-icons/metadata").isIconName("home"), true);
});

test("the metadata entry bundles without React or glyph geometry", async () => {
  await metadata();
  const result = await build({
    stdin: {
      contents:
        'import { searchIcons } from "solite-icons/metadata"; console.log(searchIcons("close"));',
      resolveDir: process.cwd(),
    },
    bundle: true,
    write: false,
    metafile: true,
    format: "esm",
  });
  for (const file of Object.keys(result.metafile.inputs))
    assert.doesNotMatch(file, /node_modules\/react|\/definitions\/|\/icons\//, file);
});
