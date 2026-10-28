import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import { createServer } from "node:http";
import { once } from "node:events";
import { resolve, extname } from "node:path";
import { chromium } from "playwright";

const directory = resolve("website/out");
const basePath = process.env.DOCS_BASE_PATH || "";
const actual = JSON.parse(await readFile(`${directory}/manifest.json`, "utf8"));
const expected = JSON.parse(await readFile("manifest.json", "utf8"));
assert.equal(actual.version, expected.version);
assert.equal(actual.count, expected.count);
assert.equal(
  (await readdir(`${directory}/svg`)).filter((file) => file.endsWith(".svg")).length,
  expected.count,
);
const server = createServer(async (request, response) => {
  let pathname;
  try {
    pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  } catch {
    response.writeHead(400).end();
    return;
  }
  if (basePath && !pathname.startsWith(`${basePath}/`)) {
    response.writeHead(404).end();
    return;
  }
  let relative = pathname.slice(basePath.length);
  if (relative.endsWith("/")) relative += "index.html";
  const file = resolve(directory, `.${relative}`);
  if (!file.startsWith(`${directory}/`)) {
    response.writeHead(403).end();
    return;
  }
  try {
    const types = {
      ".js": "text/javascript",
      ".css": "text/css",
      ".svg": "image/svg+xml",
      ".json": "application/json",
    };
    response.setHeader("Content-Type", types[extname(file)] ?? "text/html");
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
let browser;
try {
  browser = await chromium.launch({ ...options, headless: true });
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (error) => errors.push(String(error)));
  const origin = `http://127.0.0.1:${server.address().port}${basePath}`;
  const response = await page.goto(`${origin}/`);
  assert.equal(response.status(), 200);
  assert.ok(
    (await page.locator(".intro-description").textContent()).includes(
      `${expected.count} original icons`,
    ),
  );
  await page.goto(`${origin}/icons/`);
  const search = page.getByRole("textbox", { name: "Search icons", exact: true });
  await search.fill("hearing");
  await page.waitForFunction(() => document.querySelectorAll(".icon-tile").length < 100);
  await page.getByRole("button", { name: "Select ear", exact: true }).waitFor();
  await page.getByRole("button", { name: "Select ear", exact: true }).click();
  await page.getByRole("heading", { name: "EarIcon", exact: true }).waitFor();
  assert.equal(
    await page.getByRole("link", { name: "Download SVG", exact: true }).getAttribute("href"),
    `${basePath}/svg/ear.svg`,
  );
  await search.fill("close");
  await page.getByRole("button", { name: "Select x", exact: true }).waitFor();
  await search.fill("");
  await page.waitForFunction(
    (count) => document.querySelectorAll(".icon-tile").length === count,
    expected.count,
  );
  assert.deepEqual(errors, []);
  console.log(
    `Verified docs ${actual.version}: ${actual.count} tiles and SVGs, metadata search, intro count, downloads and ${basePath || "/"} paths.`,
  );
} finally {
  await browser?.close();
  await new Promise((resolve) => server.close(resolve));
}
