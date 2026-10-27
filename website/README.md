# Solite Icons docs

A Next.js 16 and Fumadocs site with MDX guides, static documentation search, rendered React examples, and an interactive 229-icon gallery.

## Run locally

Use Node.js 22 or newer. From the repository root:

```sh
npm ci
npm --prefix website ci
npm --prefix website run dev
```

Visit `http://localhost:3000`. The docs app has its own dependency lockfile and is not included in the published library files.

## Write a guide

Add an `.mdx` file in `website/content/docs/`, with `title` and `description` frontmatter. Add its filename to `meta.json` to control navigation order. The layout supplies code highlighting, copy buttons, in-page navigation, theme switching, mobile navigation, and full-text search.

The MDX component mapping in `components/mdx.tsx` exposes:

- `<ExampleBoard />`: actual named React components in a small sample interface.
- `<IconPlayground />`: size, stroke, color, and canvas controls, with copyable JSX.
- `<IconBrowser />`: all icons, name/category filters, size controls, React imports, and SVG downloads.

The package dependency is pinned to commit `6034053bcbd847da27ddbb81f38c71c59296c459`. When changing icon geometry, update `solite-icons` in this app's package and lockfile to the new library revision. `scripts/sync-assets.mjs` copies downloads from the repository's generated SVG assets before each build. Keep the package pin and repository asset version aligned.

## Build and check

```sh
npm --prefix website run build
npm --prefix website run typecheck
```

The site exports to `website/out/`. A static host must serve each directory's `index.html`. Do not run `next start`, which is not used for an exported site.

For local verification of an exported build:

```sh
python3 -m http.server 3000 --directory website/out
```

## Deploy

For a root domain, use the default build and deploy `website/out/` to any static host.

For GitHub Pages under the repository name:

```sh
DOCS_BASE_PATH=/solite-icons npm --prefix website run build
```

Then deploy `website/out/` at `https://YOUR-ACCOUNT.github.io/solite-icons/`. The build applies the prefix to internal links, the local search index, and downloadable SVG files. A base-path build must be served under that path. Rebuild if you change the hosting path.

For Vercel, select `website` as the project's root directory. The standard Next.js framework configuration uses its build command. Leave `DOCS_BASE_PATH` empty for a normal Vercel domain. No API keys or hosted search service are needed.

The CI workflow builds the docs and uploads the output as the `solite-icons-docs` artifact. This change does not configure a domain or automatically publish the site to a hosting account.

## README preview

The README image is a raster capture of actual React-rendered markup, not an AI mockup. After installing root and website dependencies, run:

```sh
npm run preview:render
```

This writes `output/react-preview.html`. Open it in a browser, or regenerate the PNG with Chrome:

```sh
google-chrome --headless=new --no-sandbox --disable-gpu --hide-scrollbars \
  --force-device-scale-factor=2 --window-size=960,660 \
  --screenshot="$PWD/assets/react-preview.png" \
  "file://$PWD/output/react-preview.html"
```

The image lives at `assets/react-preview.png` and is included in the package so the README image also resolves after installation. `output/` is temporary and ignored.
