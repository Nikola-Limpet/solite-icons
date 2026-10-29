import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { icons, iconCategories } from "solite-icons/data";

const baseline = JSON.parse(
  await readFile(new URL("./fixtures/baseline-icons.json", import.meta.url)),
);
const batches = JSON.parse(
  await readFile(new URL("./fixtures/expansion-names.json", import.meta.url)),
);

test("the expanded collection preserves every baseline drawing and exposes 300 distinct additions", () => {
  assert.equal(Object.keys(icons).length, 553);
  for (const [name, definition] of Object.entries(baseline))
    assert.deepEqual(icons[name], definition, `Baseline changed: ${name}`);
  const geometries = new Map(
    Object.entries(baseline).map(([name, nodes]) => [JSON.stringify(nodes), name]),
  );
  const added = Object.values(batches).flat();
  assert.equal(new Set(added).size, 300);
  for (const name of added) {
    assert.ok(Object.hasOwn(icons, name), `Missing new icon: ${name}`);
    assert.ok(icons[name].length > 0, `Empty new icon: ${name}`);
    const key = JSON.stringify(icons[name]);
    assert.ok(!geometries.has(key), `${name} duplicates ${geometries.get(key)}`);
    geometries.set(key, name);
  }
  const categorized = Object.values(iconCategories).flat();
  assert.equal(categorized.length, 553);
  assert.equal(new Set(categorized).size, 553);
});
