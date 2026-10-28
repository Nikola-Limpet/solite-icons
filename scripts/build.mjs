import { build } from "esbuild";
import { mkdir, readFile, writeFile, readdir, mkdtemp, rm } from "node:fs/promises";
import { execFileSync } from "node:child_process";
import { tmpdir } from "node:os";
import { resolve, relative, join } from "node:path";
import { fileURLToPath } from "node:url";
import { renderCatalog } from "./catalog.mjs";

const root = fileURLToPath(new URL("..", import.meta.url));
process.chdir(root);
const check = process.argv.includes("--check");
const dataBundle = await build({
  entryPoints: ["src/data.ts"],
  bundle: true,
  platform: "node",
  format: "esm",
  write: false,
});
const { icons, iconCategories } = await import(
  `data:text/javascript;base64,${Buffer.from(dataBundle.outputFiles[0].text).toString("base64")}`
);
const names = Object.keys(icons);
const metadataBundle = await build({
  entryPoints: ["src/metadata.ts"],
  bundle: true,
  platform: "node",
  format: "esm",
  write: false,
});
const { iconMetadata } = await import(
  `data:text/javascript;base64,${Buffer.from(metadataBundle.outputFiles[0].text).toString("base64")}`
);
if (
  Object.keys(iconMetadata).length !== names.length ||
  names.some((name) => !Object.hasOwn(iconMetadata, name))
)
  throw Error("Icon metadata must cover every canonical name exactly once.");
const allowedTags = new Set(["path", "rect", "circle", "ellipse", "line", "polyline", "polygon"]);
const allowedAttributes = new Set([
  "d",
  "x",
  "y",
  "width",
  "height",
  "rx",
  "ry",
  "cx",
  "cy",
  "r",
  "x1",
  "y1",
  "x2",
  "y2",
  "points",
]);
for (const [name, nodes] of Object.entries(icons)) {
  if (!/^[a-z][a-z0-9]*(?:-[a-z0-9]+)*$/.test(name) || !nodes.length)
    throw Error(`Invalid icon: ${name}`);
  for (const [tag, attributes] of nodes) {
    if (!allowedTags.has(tag) || Object.keys(attributes).some((key) => !allowedAttributes.has(key)))
      throw Error(`Unsafe drawing node: ${name}`);
    if (
      Object.values(attributes).some((value) =>
        typeof value === "number" ? !Number.isFinite(value) : typeof value !== "string",
      )
    )
      throw Error(`Invalid drawing attributes: ${name}`);
  }
}
const componentName = (name) =>
  name
    .split("-")
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("") + "Icon";
const generatedSource = new Map();
generatedSource.set(
  "src/lazy-imports.ts",
  `// Generated literal imports keep glyphs in separate lazy chunks.\nimport type { SoliteIconName } from "./data.js";\nimport type { SoliteIconComponent } from "./create-icon.js";\nimport { resolveLazyModule } from "./lazy-module.js";\n\nexport const lazyIconImports: Record<SoliteIconName, () => Promise<{ default: SoliteIconComponent }>> = {\n${names.map((name) => `  ${JSON.stringify(name)}: () => import("./icons/${name}.js").then((module) => resolveLazyModule(module, "${componentName(name)}")),`).join("\n")}\n};\n`,
);
for (const [name, definition] of Object.entries(icons)) {
  const component = componentName(name);
  generatedSource.set(
    `src/icons/${name}.ts`,
    `"use client";\n\n// Generated from src/definitions. Run npm run build after changes.\nimport { createSoliteIcon } from "../create-icon.js";\n\nexport const ${component} = /* @__PURE__ */ createSoliteIcon(${JSON.stringify(name)}, ${JSON.stringify(definition)});\nexport default ${component};\n`,
  );
}
generatedSource.set(
  "src/index.ts",
  `// Generated named exports. Dynamic rendering is a separate entry point.\nexport type { SoliteIconProps, SoliteIconComponent } from "./create-icon.js";\nexport { SoliteProvider } from "./context.js";\nexport type { SoliteIconDefaults, SoliteProviderProps } from "./context.js";\nexport type { SoliteIconName } from "./data.js";\nexport type { IconDefinition, IconNode } from "./geometry.js";\n${names.map((name) => `export { ${componentName(name)} } from "./icons/${name}.js";`).join("\n")}\n`,
);

async function syncFiles(files) {
  await Promise.all(
    [...files].map(async ([path, content]) => {
      if (check) {
        if ((await readFile(path, "utf8").catch(() => null)) !== content)
          throw Error(`Stale generated file: ${path}. Run npm run build.`);
      } else {
        await mkdir(resolve(path, ".."), { recursive: true });
        await writeFile(path, content);
      }
    }),
  );
}
await syncFiles(generatedSource);

const walk = async (dir) =>
  (
    await Promise.all(
      (await readdir(dir, { withFileTypes: true })).map((entry) =>
        entry.isDirectory() ? walk(join(dir, entry.name)) : join(dir, entry.name),
      ),
    )
  ).flat();
const entries = (await walk("src")).filter((name) => name.endsWith(".ts"));
const generated = new Map();
for (const format of ["esm", "cjs"]) {
  const result = await build({
    entryPoints: entries,
    outdir: `dist/${format}`,
    outbase: "src",
    format,
    platform: "neutral",
    target: "es2020",
    write: false,
  });
  for (const file of result.outputFiles) generated.set(relative(root, file.path), file.text);
}
generated.set("dist/cjs/package.json", '{"type":"commonjs"}\n');
const typesDir = await mkdtemp(join(tmpdir(), "solite-icons-types-"));
try {
  execFileSync(
    process.execPath,
    ["node_modules/typescript/bin/tsc", "--project", "tsconfig.json", "--outDir", typesDir],
    { stdio: "inherit" },
  );
  for (const file of await walk(typesDir)) {
    const content = await readFile(file, "utf8");
    generated.set(join("dist/types", relative(typesDir, file)), content);
    generated.set(join("dist/types-cjs", relative(typesDir, file)), content);
  }
  generated.set("dist/types-cjs/package.json", '{"type":"commonjs"}\n');
} finally {
  await rm(typesDir, { recursive: true, force: true });
}
const escape = (value) =>
  String(value)
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
const geometry = (name) =>
  icons[name]
    .map(
      ([tag, attrs]) =>
        `<${tag} ${Object.entries(attrs)
          .map(([key, value]) => `${key}="${escape(value)}"`)
          .join(" ")}/>`,
    )
    .join("");
const style =
  'fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"';
const svg = (name) =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" ${style}>${geometry(name)}</svg>`;
for (const name of names) generated.set(`svg/${name}.svg`, svg(name) + "\n");
generated.set(
  "sprite.svg",
  `<svg xmlns="http://www.w3.org/2000/svg">${names.map((name) => `<symbol id="solite-${name}" viewBox="0 0 24 24" ${style}>${geometry(name)}</symbol>`).join("")}</svg>\n`,
);
const pkg = JSON.parse(await readFile("package.json", "utf8"));
generated.set(
  "manifest.json",
  JSON.stringify(
    {
      name: pkg.name,
      version: pkg.version,
      count: names.length,
      viewBox: "0 0 24 24",
      strokeWidth: 1.75,
      provenance:
        "Original SVG geometry authored for Solite POS and extracted into solite-icons. Initial source: Nikola-Limpet/hang-pos commit 07d7a83c9d2b98bb8449ea7b2a58ca055f8aecd1.",
      categories: iconCategories,
      icons: names.map((name) => ({
        name,
        component: componentName(name),
        file: `svg/${name}.svg`,
        ...iconMetadata[name],
      })),
    },
    null,
    2,
  ) + "\n",
);
generated.set(
  "catalog/index.html",
  renderCatalog({ icons, iconCategories, iconMetadata, svg, escape, componentName }),
);
generated.set(
  "docs/icons.md",
  `# Icon list\n\n${names.length} icons. Import each React component from \`solite-icons\`, or use its name with \`SoliteIcon\` from \`solite-icons/dynamic\`.\n\n${Object.entries(
    iconCategories,
  )
    .map(
      ([category, values]) =>
        `## ${category}\n\n| Name | React import |\n| --- | --- |\n${values.map((name) => `| \`${name}\` | \`${componentName(name)}\` |`).join("\n")}\n`,
    )
    .join("\n")}`,
);
await syncFiles(generated);
for (const dir of ["src/icons", "dist", "svg", "catalog"]) {
  const expected = new Set(
    [...generatedSource.keys(), ...generated.keys()].filter((path) => path.startsWith(`${dir}/`)),
  );
  const actual = await walk(dir);
  if (actual.some((path) => !expected.has(path)))
    throw Error(`Unexpected generated file in ${dir}. Remove stale outputs before rebuilding.`);
}
console.log(
  `${check ? "Verified" : "Built"} ${names.length} solite-icons: named React exports, dynamic/data entries, ESM, CommonJS, declarations, SVGs and catalog.`,
);
