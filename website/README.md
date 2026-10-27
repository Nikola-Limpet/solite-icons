# Solite Icons docs

A Next.js 16 and Fumadocs site with MDX guides, static documentation search, rendered React examples, and an interactive 253-icon gallery.

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

- `<DocsIntro />`: the React-first introduction, install command, source links, and license.
- `<ExampleBoard />`: a specimen of actual named React components.
- `<IconPlayground />`: size, stroke, color, and canvas controls, with copyable JSX.
- `<IconBrowser />`: all icons, name/category filters, size controls, React imports, and SVG downloads.

The package dependency is pinned to npm version `0.2.1`. After publishing new icons, update `solite-icons` in this app's package and lockfile to the new npm version. `scripts/sync-assets.mjs` copies downloads from the installed icon package before each build, so the rendered icons and downloads use the same release.

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

The CI workflow builds the docs and uploads the output as the `solite-icons-docs` artifact. The production Vercel project is `solite-icons` in the Aurra account, using root directory `website`, build command `npm run build`, and automatic output detection. Its custom domain is `solite-icons.nikola33.dev`.

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

## Brand assets

The approved S mark was developed with the built-in ImageGen tool. Concepts, the refined PNG, and exact prompts are in `assets/brand/` at the repository root. The clean SVG, Apple icon, and social image served by the website are in `public/brand/`. `components/solite-logo.tsx` uses the same SVG path with `currentColor` for theme support. Keep that path synchronized when changing the mark.

`DESIGN.md` at the repository root records the teal drawing-specimen identity. The README uses an absolute logo URL so the image also resolves on npm without depending on a local package asset.

The root metadata prefixes favicon and sharing-image paths with `DOCS_BASE_PATH`. For an alternate host, set `DOCS_SITE_URL` as well, for example `DOCS_SITE_URL=https://nikola-limpet.github.io DOCS_BASE_PATH=/solite-icons npm --prefix website run build`.
