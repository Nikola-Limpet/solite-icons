# Solite Icons docs

A Next.js 16 and Fumadocs site with MDX guides, static documentation search, rendered React examples, and an interactive collection browser. The repository contains an unpublished 0.3.0 candidate with 553 icons, including 300 additions; npm latest remains 0.2.1 with 253 icons.

## Run locally

Use Node.js 22 or newer. From the repository root, install the locked dependencies and preview the published collection:

```sh
npm ci
npm --prefix website ci
npm --prefix website run dev
```

The development server runs at `http://localhost:3000`. The docs app has its own dependency lockfile and is not included in the published library files.

The package manifest and lockfile pin `solite-icons@0.2.1` from npm. The docs can run and build with that published collection. To preview the expanded collection, use the local workflow below. Code samples importing new candidate APIs require the candidate in the consuming application.

## Preview the local candidate

After installing root and website dependencies, run from the repository root:

```sh
npm run docs:candidate
npm --prefix website run dev
```

`docs:candidate` builds the library, packs the local 0.3.0 candidate under `output/`, and installs that archive into the website's `node_modules` with no saved dependency or lockfile changes. It does not publish anything. React previews, metadata, counts, and SVG downloads should all come from that installed candidate.

To restore the registry dependency recorded in the website lockfile:

```sh
npm run docs:restore
```

This runs `npm ci` in `website/` and restores the published collection for docs development and builds. Re-run `docs:candidate` to preview the expanded collection and new APIs. Do not replace the pinned dependency with an unpublished registry version. After npm publication, update both the website dependency and lockfile to the published version, reinstall, and rebuild.

## Write a guide

Add an `.mdx` file in `website/content/docs/`, with `title` and `description` frontmatter. Add its filename to `meta.json` to control navigation order. The layout supplies code highlighting, copy buttons, in-page navigation, theme switching, mobile navigation, and full-text search.

The MDX component mapping in `components/mdx.tsx` exposes:

- `<DocsIntro />`: the React-first introduction, install command, source links, and license.
- `<ExampleBoard />`: a specimen of actual named React components.
- `<IconPlayground />`: size, stroke, color, and canvas controls, with copyable JSX.
- `<IconBrowser />`: all icons, name/category filters, size controls, React imports, and SVG downloads.

`scripts/sync-assets.mjs` copies downloads from the installed icon package before each build. Derive collection counts and search data from that same package; do not hardcode a candidate total into shared introduction copy. Keep explicit release totals in versioned release notes.

## Build and check

```sh
npm --prefix website run build
npm --prefix website run typecheck
```

The site exports to `website/out/`. A static host must serve each directory's `index.html`. Do not run `next start`, which is not used for an exported site.

Run both checks after `npm run docs:candidate` when validating this branch. Also verify a base-path build before release. At the repository root, `npm run test:browser` runs the Playwright and axe package fixtures after Chromium installation with `npx playwright install chromium`. It checks accessible names, complete controls, refs, hydration, and lazy transitions. Manual VoiceOver/NVDA verification is separate; record software versions and results using `content/docs/accessibility.mdx`. Do not claim those checks ran without an actual record.

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

The approved S mark was developed with the built-in ImageGen tool. Historical teal concepts, the refined concept PNG, and exact prompts are in `assets/brand/` at the repository root. The clean SVG, Apple icon, and social image served by the website are in `public/brand/`. `components/solite-logo.tsx` uses the same SVG path with `currentColor` for theme support. Keep that path synchronized when changing the mark.

`DESIGN.md` at the repository root records the blue drawing-specimen identity. The README uses an absolute logo URL so the image also resolves on npm without depending on a local package asset.

The root metadata prefixes favicon and sharing-image paths with `DOCS_BASE_PATH`. For an alternate host, set `DOCS_SITE_URL` as well, for example `DOCS_SITE_URL=https://nikola-limpet.github.io DOCS_BASE_PATH=/solite-icons npm --prefix website run build`.
