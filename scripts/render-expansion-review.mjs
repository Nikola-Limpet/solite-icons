import { mkdir, readFile, writeFile } from "node:fs/promises";
import { chromium } from "playwright";
import { icons } from "../dist/esm/data.js";

const batches = JSON.parse(
  await readFile(new URL("../test/fixtures/expansion-names.json", import.meta.url)),
);
const out = new URL("../output/expansion-review/", import.meta.url);
await mkdir(out, { recursive: true });
const options = process.env.SOLITE_CHROME_PATH
  ? { executablePath: process.env.SOLITE_CHROME_PATH }
  : {};
const browser = await chromium.launch({ ...options, headless: true });
try {
  const page = await browser.newPage({
    viewport: { width: 1260, height: 1100 },
    deviceScaleFactor: 1,
  });
  const bounds = [];
  for (const [batch, names] of Object.entries(batches)) {
    const tiles = await Promise.all(
      names.map(async (name) => {
        const svg = await readFile(new URL(`../svg/${name}.svg`, import.meta.url), "utf8");
        return `<article><div>${[16, 20, 24].map((size) => svg.replace('width="24" height="24"', `width="${size}" height="${size}"`)).join("")}</div><span>${name}</span></article>`;
      }),
    );
    const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${batch} Solite icons</title><style>body{margin:0;padding:24px;font:12px system-ui;color:#243b61;background:white}h1{font-size:20px;margin:0 0 8px}p{margin:0 0 20px}section{display:grid;grid-template-columns:repeat(6,1fr);gap:8px}article{height:74px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:10px;border:1px solid #e6e9ef;border-radius:4px}article div{display:flex;align-items:center;gap:18px}article span{font-size:11px}</style></head><body><h1>${batch} · 100 original additions</h1><p>16 / 20 / 24 px · 1.75 stroke · actual generated SVG assets</p><section>${tiles.join("")}</section></body></html>`;
    await writeFile(new URL(`${batch}.html`, out), html);
    await page.setContent(html);
    await page.screenshot({ path: new URL(`${batch}.png`, out).pathname, fullPage: true });
    const issues = await page.locator("article").evaluateAll((nodes) =>
      nodes.flatMap((node) => {
        const svg = node.querySelector("svg");
        const box = svg.getBBox();
        const limit = 24 - 0.875;
        return box.x < 0.875 ||
          box.y < 0.875 ||
          box.x + box.width > limit ||
          box.y + box.height > limit
          ? [
              {
                name: node.querySelector("span").textContent,
                box: { x: box.x, y: box.y, width: box.width, height: box.height },
              },
            ]
          : [];
      }),
    );
    bounds.push(...issues);
    console.log(`${batch}: rendered ${names.length} generated icons at 16/20/24 pixels`);
  }
  await writeFile(new URL("bounds.json", out), JSON.stringify(bounds, null, 2));
  console.log(
    `${Object.keys(icons).length} total icons; ${bounds.length} additions need an edge-bounds review.`,
  );
} finally {
  await browser.close();
}
