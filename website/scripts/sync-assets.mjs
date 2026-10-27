import { cp, mkdir, copyFile } from "node:fs/promises";
const root = new URL("../../", import.meta.url);
const publicDir = new URL("../public/", import.meta.url);
await mkdir(publicDir, { recursive: true });
await cp(new URL("svg/", root), new URL("svg/", publicDir), { recursive: true });
await copyFile(new URL("sprite.svg", root), new URL("sprite.svg", publicDir));
await copyFile(new URL("manifest.json", root), new URL("manifest.json", publicDir));
