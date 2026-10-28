import { cp, mkdir, copyFile, rm } from "node:fs/promises";
import { createRequire } from "node:module";
import { pathToFileURL } from "node:url";

const require = createRequire(import.meta.url);
const root = new URL("./", pathToFileURL(require.resolve("solite-icons/package.json")));
const publicDir = new URL("../public/", import.meta.url);
await mkdir(publicDir, { recursive: true });
await rm(new URL("svg/", publicDir), { recursive: true, force: true });
await cp(new URL("svg/", root), new URL("svg/", publicDir), { recursive: true });
await copyFile(new URL("sprite.svg", root), new URL("sprite.svg", publicDir));
await copyFile(new URL("manifest.json", root), new URL("manifest.json", publicDir));
