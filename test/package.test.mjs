import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { build } from "esbuild";

const require = createRequire(import.meta.url);

test("all 253 names have named and deep exports and matching safe SVG assets", async () => {
  const { icons, iconCategories } = await import("solite-icons/data");
  const components = await import("solite-icons");
  const names = Object.keys(icons);
  assert.equal(names.length, 253);
  assert.deepEqual(new Set(Object.values(iconCategories).flat()), new Set(names));
  for (const name of names) {
    const componentName =
      name
        .split("-")
        .map((s) => s[0].toUpperCase() + s.slice(1))
        .join("") + "Icon";
    const deep = await import(`solite-icons/icons/${name}`);
    assert.equal(components[componentName], deep.default);
    const svg = await readFile(new URL(`../svg/${name}.svg`, import.meta.url), "utf8");
    assert.match(svg, /viewBox="0 0 24 24"/);
    assert.doesNotMatch(svg, /<script|onload|href=|foreignObject/);
    assert.equal(
      (svg.match(/<(path|rect|circle|ellipse|line|polyline|polygon)\b/g) ?? []).length,
      icons[name].length,
    );
  }
});

test("React icons preserve styling, decorative defaults and accessible titles", async () => {
  const { ShopIcon } = await import("solite-icons");
  const html = renderToStaticMarkup(
    createElement(ShopIcon, { size: 18, strokeWidth: 2, className: "shop", "data-action": "open" }),
  );
  assert.match(html, /width="18"/);
  assert.match(html, /stroke-width="2"/);
  assert.match(html, /class="shop"/);
  assert.match(html, /aria-hidden="true"/);
  assert.match(html, /data-solite-icon="shop"/);
  assert.match(html, /data-action="open"/);
  const titled = renderToStaticMarkup(
    createElement(
      "div",
      null,
      createElement(ShopIcon, { title: "First shop" }),
      createElement(ShopIcon, { title: "Second shop" }),
    ),
  );
  const ids = [...titled.matchAll(/<title id="([^"]+)"/g)].map((m) => m[1]);
  assert.equal(new Set(ids).size, 2);
  assert.match(titled, /role="img"/);
  for (const id of ids) assert.ok(titled.includes(`aria-labelledby="${id}"`));
  const labeled = renderToStaticMarkup(createElement(ShopIcon, { "aria-label": "Shops" }));
  assert.match(labeled, /aria-label="Shops"/);
  assert.doesNotMatch(labeled, /aria-hidden/);
});

test("dynamic icons support all names and reject unknown runtime values", async () => {
  const { SoliteIcon } = await import("solite-icons/dynamic");
  const { icons } = await import("solite-icons/data");
  for (const name of Object.keys(icons))
    assert.match(renderToStaticMarkup(createElement(SoliteIcon, { name })), /<svg/);
  assert.throws(
    () => renderToStaticMarkup(createElement(SoliteIcon, { name: "missing" })),
    /Unknown solite icon/,
  );
});

test("CommonJS consumers can require named, dynamic and data exports", () => {
  const { HomeIcon } = require("solite-icons");
  assert.match(renderToStaticMarkup(createElement(HomeIcon)), /data-solite-icon="home"/);
  assert.equal(typeof require("solite-icons/dynamic").SoliteIcon, "object");
  assert.equal(Object.keys(require("solite-icons/data").icons).length, 253);
});

test("a named import excludes the other 252 glyphs from the browser bundle", async () => {
  const bundled = await build({
    stdin: {
      contents: 'import { HomeIcon } from "solite-icons"; console.log(HomeIcon);',
      resolveDir: process.cwd(),
    },
    bundle: true,
    write: false,
    format: "esm",
    minify: true,
    external: ["react"],
    metafile: true,
  });
  const out = bundled.outputFiles[0].text;
  assert.ok(
    Buffer.byteLength(out) < 5000,
    `Unexpected home bundle size: ${Buffer.byteLength(out)}`,
  );
  assert.doesNotMatch(out, /cash-register|cloud-sync|archive-restore/);
  for (const [file, meta] of Object.entries(Object.values(bundled.metafile.outputs)[0].inputs))
    if (file.includes("/icons/") && !file.endsWith("/home.js"))
      assert.equal(meta.bytesInOutput, 0, file);
});

test("TypeScript consumers resolve both ESM and CommonJS declarations", async () => {
  const { execFileSync } = await import("node:child_process");
  execFileSync(
    process.execPath,
    ["node_modules/typescript/bin/tsc", "--project", "test/tsconfig.json"],
    { stdio: "pipe" },
  );
});

test("the 24 essentials render through named, deep, and dynamic imports with matching SVG assets", async () => {
  const added = [
    "code",
    "terminal",
    "command",
    "braces",
    "git-branch",
    "bot",
    "sparkles",
    "wand",
    "lightbulb",
    "rocket",
    "accessibility",
    "languages",
    "share",
    "volume",
    "volume-off",
    "microphone",
    "microphone-off",
    "video",
    "video-off",
    "trophy",
    "graduation-cap",
    "wrench",
    "puzzle",
    "target",
  ];
  const components = await import("solite-icons");
  const { SoliteIcon } = await import("solite-icons/dynamic");
  for (const name of added) {
    const exportName =
      name
        .split("-")
        .map((part) => part[0].toUpperCase() + part.slice(1))
        .join("") + "Icon";
    assert.ok(components[exportName], `Missing named export: ${exportName}`);
    const deep = await import(`solite-icons/icons/${name}`);
    assert.equal(deep.default, components[exportName]);
    const props = { size: 20, title: name, strokeWidth: 1.75 };
    const named = renderToStaticMarkup(createElement(components[exportName], props));
    const dynamic = renderToStaticMarkup(createElement(SoliteIcon, { ...props, name }));
    assert.match(named, /width="20"/);
    assert.match(named, /stroke-width="1.75"/);
    assert.match(dynamic, new RegExp(`data-solite-icon="${name}"`));
    const svg = await readFile(new URL(`../svg/${name}.svg`, import.meta.url), "utf8");
    assert.match(svg, /fill="none" stroke="currentColor" stroke-width="1.75"/);
    assert.match(svg, /stroke-linecap="round" stroke-linejoin="round"/);
  }
});
