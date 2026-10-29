import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { createServer } from "node:http";
import { once } from "node:events";
import { resolve, join, extname } from "node:path";
import { pathToFileURL } from "node:url";
import { build } from "esbuild";
import { chromium } from "playwright";
import AxeBuilder from "@axe-core/playwright";
import { createElement } from "react";
import { renderToString } from "react-dom/server";

test(
  "browser accessibility, refs, hydration and lazy transitions",
  { timeout: 60000 },
  async () => {
    await mkdir(".preview", { recursive: true });
    const directory = await mkdtemp(resolve(".preview/browser-"));
    let browser;
    let server;
    try {
      await build({
        entryPoints: ["test/browser/fixture.tsx"],
        bundle: true,
        platform: "node",
        format: "esm",
        packages: "external",
        outfile: join(directory, "fixture.mjs"),
        jsx: "automatic",
      });
      const { HydrationFixture } = await import(pathToFileURL(join(directory, "fixture.mjs")).href);
      const ssr = renderToString(createElement(HydrationFixture));
      await build({
        entryPoints: { app: "test/browser/fixture.tsx" },
        bundle: true,
        platform: "browser",
        format: "esm",
        splitting: true,
        outdir: directory,
        chunkNames: "chunks/[name]-[hash]",
        jsx: "automatic",
      });
      await writeFile(
        join(directory, "index.html"),
        `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Solite accessibility tests</title><style>body{font-family:system-ui;color:#172133;background:white}button{padding:12px;margin:6px}button:focus-visible{outline:3px solid #2563eb}svg{vertical-align:middle}</style></head><body><div id="hydration">${ssr}</div><div id="app"></div><script type="module" src="/app.js"></script></body></html>`,
      );
      server = createServer(async (request, response) => {
        const pathname = new URL(request.url, "http://localhost").pathname;
        const file = resolve(directory, `.${pathname === "/" ? "/index.html" : pathname}`);
        if (!file.startsWith(`${directory}/`)) {
          response.writeHead(403).end();
          return;
        }
        try {
          response.setHeader(
            "Content-Type",
            extname(file) === ".js" ? "text/javascript" : "text/html",
          );
          response.end(await readFile(file));
        } catch {
          response.writeHead(404).end();
        }
      });
      server.listen(0, "127.0.0.1");
      await once(server, "listening");
      const options = process.env.SOLITE_CHROME_PATH
        ? { executablePath: process.env.SOLITE_CHROME_PATH }
        : {};
      browser = await chromium.launch({ ...options, headless: true });
      const context = await browser.newContext();
      const page = await context.newPage();
      const errors = [];
      page.on("pageerror", (error) => errors.push(String(error)));
      await page.goto(`http://127.0.0.1:${server.address().port}/`);
      await page.getByRole("button", { name: "Open settings" }).waitFor();
      assert.equal(
        await page.getByRole("img", { name: "Informative home", exact: true }).count(),
        1,
      );
      assert.equal(await page.getByRole("img", { name: "Labeled home", exact: true }).count(), 1);
      assert.equal(
        await page.getByRole("img", { name: "Preferred direct label", exact: true }).count(),
        1,
      );
      assert.equal(
        await page.getByRole("img", { name: "Preferred referenced label", exact: true }).count(),
        1,
      );
      assert.equal(
        await page.getByRole("img", { name: "Referenced home", exact: true }).count(),
        1,
      );
      assert.equal(
        await page.getByRole("img", { name: "Explicitly hidden", exact: true }).count(),
        0,
      );
      assert.equal(
        await page.getByRole("button", { name: "Open settings" }).getByRole("img").count(),
        0,
      );
      const repeated = page.getByRole("img", { name: "Repeated home", exact: true });
      assert.equal(await repeated.count(), 2);
      const ids = await repeated.evaluateAll((nodes) =>
        nodes.map((node) => node.getAttribute("aria-labelledby")),
      );
      assert.equal(new Set(ids).size, 2);
      await page.getByRole("button", { name: "Favorite", exact: true }).focus();
      await page.keyboard.press("Space");
      assert.equal(
        await page
          .getByRole("button", { name: "Favorite", exact: true })
          .getAttribute("aria-pressed"),
        "true",
      );
      assert.equal(
        await page.getByRole("button", { name: "Unavailable action" }).isDisabled(),
        true,
      );
      await page.getByRole("button", { name: "Check SVG ref" }).click();
      await page.getByText("SVG ref connected", { exact: true }).waitFor();
      const lazy = page.getByRole("img", { name: "Current lazy icon", exact: true });
      await lazy.waitFor();
      assert.equal(await lazy.getAttribute("data-solite-icon"), "home");
      let unblock;
      const blocked = new Promise((resolve) => {
        unblock = resolve;
      });
      await page.route(/\/chunks\/ear-[^/]+\.js$/, async (route) => {
        await blocked;
        await route.continue();
      });
      await page.getByRole("button", { name: "Show hearing icon" }).click();
      await page.locator('[data-solite-loading="ear"]').waitFor();
      assert.equal(
        await lazy.count(),
        0,
        "The old named icon must not remain during the next load",
      );
      unblock();
      await page.locator('[data-solite-icon="ear"]').waitFor();
      assert.equal(await lazy.getAttribute("data-solite-icon"), "ear");
      await page.getByRole("button", { name: "Check lazy ref" }).click();
      await page.getByText("Lazy ref ear", { exact: true }).waitFor();
      assert.deepEqual(await page.evaluate(() => window.__hydrationErrors), []);
      assert.deepEqual(errors, []);
      const scan = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
        .analyze();
      assert.deepEqual(
        scan.violations.map(({ id, nodes }) => ({ id, targets: nodes.map((node) => node.target) })),
        [],
      );
    } finally {
      await browser?.close();
      if (server) await new Promise((resolve) => server.close(resolve));
      await rm(directory, { recursive: true, force: true });
    }
  },
);
