import { build } from "esbuild";
import { renderToStaticMarkup } from "react-dom/server";
import { createElement } from "react";
import { mkdir, readFile, writeFile, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
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
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>Solite Icons React preview</title><style>${fontFace}*{box-sizing:border-box}body{margin:0;padding:35px 48px;background:#fff;font-family:Geist,Arial,sans-serif;color:#193154}header{display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;font-size:12px}header strong{font-size:17px;letter-spacing:-.04em}header span{color:#6e7c93}svg{display:block;flex-shrink:0}${styles}.example-board{margin:20px 0 18px;padding:26px 28px}.board-icons>div{min-height:82px}pre{border:1px solid #e1e7ef;border-radius:7px;background:#fbfcfe;padding:15px 18px;font:12px/1.7 ui-monospace,monospace;margin:0}footer{font-size:10px;color:#738198;margin-top:14px}</style></head><body><header><strong>solite-icons</strong><span>229 original icons · React + SVG</span></header>${board}<pre>import { ShopIcon, CoffeeIcon, PackageIcon } from "solite-icons";\n\n&lt;ShopIcon size={24} /&gt;</pre><footer>Actual React components · 24px grid · 1.75px rounded stroke · MIT licensed</footer></body></html>`;
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
} finally {
  await rm(temp, { recursive: true, force: true });
}
