import { icons } from "../dist/esm/data.js";
import { build } from "esbuild";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import { mkdir, readFile, writeFile, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
const root = new URL("../", import.meta.url);
const temp = new URL(".preview/", root);
await mkdir(temp, { recursive: true });
try {
  await build({
    entryPoints: [fileURLToPath(new URL("website/components/example-board.tsx", root))],
    outfile: fileURLToPath(new URL("board.mjs", temp)),
    bundle: true,
    platform: "node",
    format: "esm",
    packages: "external",
  });
  const { ExampleBoard } = await import(new URL("board.mjs", temp).href);
  const board = renderToStaticMarkup(createElement(ExampleBoard));
  const css = await readFile(new URL("website/app/global.css", root), "utf8");
  const theme = css.slice(css.indexOf(":root {"), css.indexOf("body {"));
  const logo = await readFile(new URL("website/public/brand/solite-mark.svg", root), "utf8");
  const styles = css.slice(css.indexOf(".example-board"), css.indexOf(".playground {"));
  const font = await readFile(
    new URL(
      "website/node_modules/@fontsource-variable/geist/files/geist-latin-wght-normal.woff2",
      root,
    ),
  ).catch(() => null);
  const fontFace = font
    ? `@font-face{font-family:Geist;src:url(data:font/woff2;base64,${font.toString("base64")}) format('woff2');font-weight:100 900}`
    : "";
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Solite Icons React preview</title><style>${fontFace}${theme}*{box-sizing:border-box}body{margin:0;padding:35px 48px;background:#fff;font-family:Geist,Arial,sans-serif;color:#172133}header{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;font-size:12px}header strong{display:flex;align-items:center;gap:10px;font-size:17px;letter-spacing:-.025em}header strong svg{width:28px;height:28px}header span{color:#596375}svg{display:block;flex-shrink:0}${styles}.example-board{margin:20px 0 18px;padding:26px 28px}.board-icons>div{min-height:82px}pre{border:1px solid #dde2ea;border-radius:7px;background:#f1f6ff;padding:15px 18px;font:12px/1.7 ui-monospace,monospace;margin:0}footer{font-size:10px;color:#596375;margin-top:14px}</style></head><body><header><strong>${logo}Solite Icons</strong><span>${Object.keys(icons).length} original icons · React + SVG</span></header>${board}<pre>import { ShopIcon, CoffeeIcon, PackageIcon } from "solite-icons";\n\n&lt;ShopIcon size={24} /&gt;</pre><footer>Actual React components · 24px grid · 1.75px rounded stroke · MIT licensed</footer></body></html>`;
  await mkdir(new URL("output/", root), { recursive: true });
  await writeFile(new URL("output/react-preview.html", root), html);
  const inlineCss = `*{box-sizing:border-box}body{margin:0}svg{display:block}${styles}.example-board{margin:0;padding:16px;background:var(--muted);color:var(--foreground);border-color:var(--border);border-radius:var(--radius)}.board-dot{background:var(--primary)}.board-heading h2{color:var(--foreground)}.board-heading p,.board-meta{color:var(--muted-foreground)}.board-icons>div{background:var(--card);border-color:var(--border);color:var(--primary)}.board-icons span{color:var(--muted-foreground)}.board-bottom{border-color:var(--border)}.board-pill{color:var(--success)}.board-action{color:var(--primary)}pre{background:var(--code-background);color:var(--foreground);border:1px solid var(--border);border-radius:var(--radius);padding:16px;overflow:auto;font-family:var(--font-mono);font-size:12px;line-height:1.7;margin:12px 0 0}@media(max-width:500px){.board-heading p{display:none}.board-heading h2{font-size:26px}.board-icons{grid-template-columns:repeat(4,minmax(0,1fr))}.board-meta{font-size:8px}}`;
  await writeFile(
    new URL("output/react-preview-inline.html", root),
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><style>${inlineCss}</style></head><body>${board}<pre><code>import { ShopIcon } from "solite-icons";\n\n&lt;ShopIcon size={24} /&gt;</code></pre></body></html>`,
  );
  console.log(
    "Rendered actual React markup to output/react-preview.html and output/react-preview-inline.html.",
  );
  if (process.argv.includes("--png")) {
    const options = process.env.SOLITE_CHROME_PATH
      ? { executablePath: process.env.SOLITE_CHROME_PATH }
      : {};
    const browser = await chromium.launch({ ...options, headless: true });
    try {
      const page = await browser.newPage({
        viewport: { width: 954, height: 650 },
        deviceScaleFactor: 2,
      });
      await page.goto(new URL("output/react-preview.html", root).href);
      await page.evaluate(() => document.fonts.ready);
      await page.screenshot({
        path: fileURLToPath(new URL("assets/react-preview.png", root)),
        fullPage: true,
      });
      const names = [
        "shop",
        "coffee",
        "code",
        "package",
        "users",
        "qr-code",
        "credit-card",
        "terminal",
        "accessibility",
        "sparkles",
        "settings",
        "wrench",
      ];
      const glyphs = await Promise.all(
        names.map(async (name) =>
          (await readFile(new URL(`svg/${name}.svg`, root), "utf8")).replace(
            'width="24" height="24"',
            'width="40" height="40"',
          ),
        ),
      );
      const social = `<!doctype html><html><head><meta charset="utf-8"><style>${fontFace}*{box-sizing:border-box}body{margin:0;width:1200px;height:630px;background:#f1f6ff;color:#172133;font-family:Geist,Arial,sans-serif;padding:66px 70px}header{display:flex;align-items:center;gap:18px;color:#2563eb;font-size:26px;font-weight:600}header svg{width:38px;height:38px}.copy{margin-top:76px;width:610px}h1{font-size:68px;line-height:1.1;letter-spacing:-3px;margin:0 0 28px}h1 span{color:#2563eb}p{font-size:20px;color:#596375;line-height:1.6;margin:0}.glyphs{position:absolute;left:710px;top:182px;display:grid;grid-template-columns:repeat(4,40px);gap:64px 74px;color:#2563eb}footer{position:absolute;left:70px;right:70px;bottom:80px;border-top:1px solid #d9e2f2;padding-top:24px;display:flex;justify-content:space-between;font-size:16px;color:#596375}</style></head><body><header>${logo}Solite Icons</header><div class="copy"><h1>Outline icons.<br><span>Open by design.</span></h1><p>Original icons for React and SVG.<br>Open source. MIT licensed.</p></div><div class="glyphs">${glyphs.join("")}</div><footer><span>npm install solite-icons</span><span>solite-icons.nikola33.dev</span></footer></body></html>`;
      await writeFile(new URL("output/social.html", root), social);
      const socialPage = await browser.newPage({
        viewport: { width: 1200, height: 630 },
        deviceScaleFactor: 1,
      });
      await socialPage.setContent(social);
      await socialPage.evaluate(() => document.fonts.ready);
      await socialPage.screenshot({
        path: fileURLToPath(new URL("website/public/brand/social.png", root)),
      });
      console.log(
        `Updated README and social PNGs from the ${Object.keys(icons).length}-icon collection.`,
      );
    } finally {
      await browser.close();
    }
  }
} finally {
  await rm(temp, { recursive: true, force: true });
}
