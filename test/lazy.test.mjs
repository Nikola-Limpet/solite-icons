import test from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { readFile } from "node:fs/promises";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { build } from "esbuild";

test("the lazy entry supports both module systems and validates runtime names", async () => {
  const pkg = JSON.parse(await readFile(new URL("../package.json", import.meta.url)));
  assert.ok(pkg.exports["./lazy"], "The lazy entry must be exported");
  const { LazySoliteIcon } = await import("solite-icons/lazy");
  const require = createRequire(import.meta.url);
  assert.equal(typeof require("solite-icons/lazy").LazySoliteIcon, "object");
  for (const name of ["missing", "__proto__", "constructor"])
    assert.throws(
      () => renderToStaticMarkup(createElement(LazySoliteIcon, { name })),
      /Unknown solite icon/,
    );
});

test("every lazy loader resolves a real component in Node ESM and CommonJS", async () => {
  const require = createRequire(import.meta.url);
  const formats = {
    esm: await import("../dist/esm/lazy-imports.js"),
    commonjs: require("../dist/cjs/lazy-imports.js"),
  };
  for (const [format, { lazyIconImports }] of Object.entries(formats)) {
    for (const [name, load] of Object.entries(lazyIconImports)) {
      const module = await load();
      assert.ok(module.default, `${format} loader did not resolve ${name}`);
      assert.match(
        renderToStaticMarkup(createElement(module.default)),
        new RegExp(`data-solite-icon="${name}"`),
      );
    }
  }
});

test("lazy loading reserves visual dimensions without announcing a not-yet-loaded icon", async () => {
  const pkg = JSON.parse(await readFile(new URL("../package.json", import.meta.url)));
  assert.ok(pkg.exports["./lazy"], "The lazy entry must be exported");
  const { LazySoliteIcon } = await import("solite-icons/lazy");
  const html = renderToStaticMarkup(
    createElement(LazySoliteIcon, { name: "home", size: "2rem", width: 45, title: "Home" }),
  );
  assert.match(html, /width="45"/);
  assert.match(html, /height="2rem"/);
  assert.match(html, /aria-hidden="true"/);
  assert.doesNotMatch(html, /<title|role="img"/);
});

test("a lazy entry splits glyph modules instead of embedding geometry in its initial chunk", async () => {
  const pkg = JSON.parse(await readFile(new URL("../package.json", import.meta.url)));
  assert.ok(pkg.exports["./lazy"], "The lazy entry must be exported");
  const result = await build({
    stdin: {
      contents: 'import { LazySoliteIcon } from "solite-icons/lazy"; console.log(LazySoliteIcon);',
      resolveDir: process.cwd(),
    },
    bundle: true,
    write: false,
    splitting: true,
    format: "esm",
    outdir: "output/lazy-check",
    external: ["react"],
    metafile: true,
  });
  const initial = Object.values(result.metafile.outputs).find(
    (output) => output.entryPoint === "<stdin>",
  );
  assert.ok(initial);
  assert.ok(
    Object.values(result.metafile.outputs).filter((output) =>
      output.entryPoint?.includes("/icons/"),
    ).length >= 253,
  );
  for (const [file, contribution] of Object.entries(initial.inputs))
    if (file.includes("/icons/") || /\/definitions\//.test(file))
      assert.equal(contribution.bytesInOutput, 0, file);
});
