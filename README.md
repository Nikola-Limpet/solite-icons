<p align="left">
  <img src="https://solite-icons.nikola33.dev/brand/solite-mark.svg" width="56" height="56" alt="Solite Icons logo" />
</p>

# Solite Icons

Original outline icons. Open by design.

[Documentation](https://solite-icons.nikola33.dev) · [Browse icons](https://solite-icons.nikola33.dev/icons/) · [npm v0.2.1](https://www.npmjs.com/package/solite-icons) · [Releases](https://github.com/Nikola-Limpet/solite-icons/releases) · [MIT license](LICENSE)

Original SVG outline icons for dashboards, commerce, developer tools, media, accessibility, and everyday app controls. Open source and MIT licensed, with React components and standalone SVGs.

This checkout contains the unpublished **0.3.0 release candidate with 553 icons**, including 300 additions. The published npm version remains **0.2.1 with 253 icons**. The provider, lazy renderer, metadata helpers, and `nonScalingStroke` documented below require the local candidate. See [local candidate preview](#local-candidate-preview) before trying them.

Every icon uses a 24 × 24 grid, a 1.75px stroke, rounded caps and joins, and `currentColor`. Use React components or the SVG files directly. No stylesheet, icon font, or external icon service is required.

![Solite Icons rendered as React components, with shop, coffee, package, payment, and navigation icons](assets/react-preview.png)

## Install

Install the package from npm:

```sh
npm install solite-icons
# or
pnpm add solite-icons
# or
bun add solite-icons
```

These commands install the published 0.2.1 release. Keep the resulting lockfile. To pin it explicitly, install `solite-icons@0.2.1`. The package includes built JavaScript and types, so installation does not run a build in your project.

React components need React 18.2 or React 19. Install React if your project does not already use it. React is an optional peer dependency, so projects using only SVGs or raw geometry do not need it.

## Historical 0.2.1 bundle benchmark

Production icon-only JavaScript for the same 1, 10, and 50 icon purposes. Named ES-module imports, React excluded. Measured on 27 October 2026 using Solite 0.2.1 and the other versions shown. These results describe 0.2.1; they are not measurements of the 0.3.0 candidate.

![Benchmark of gzipped icon JavaScript and unpacked npm packages for Solite, Lucide React, Heroicons, and React Icons. All three bundle scenarios and package versions are shown.](https://raw.githubusercontent.com/Nikola-Limpet/solite-icons/main/assets/benchmark-2026-10-27.png)

[Methodology, accessible tables, and raw data](https://github.com/Nikola-Limpet/solite-icons/blob/main/docs/benchmarks/2026-10-27.md). Package collections and component features differ; install footprint is separate from browser payload. This is a size comparison, not a page-load or FPS test.

## React: import an icon by name

```tsx
import { HomeIcon, PackageIcon, ShopIcon } from "solite-icons";

export function Navigation() {
  return (
    <nav>
      <a href="/">
        <HomeIcon size={20} /> Home
      </a>
      <a href="/shops">
        <ShopIcon size={20} /> Shops
      </a>
      <a href="/packages">
        <PackageIcon size={20} /> Packages
      </a>
    </nav>
  );
}
```

Named imports support tree shaking in production bundlers. You can also import a single module:

```tsx
import CashRegisterIcon from "solite-icons/icons/cash-register";

<CashRegisterIcon size={24} />;
```

Icon file names use kebab-case. Component names use PascalCase followed by `Icon`: `cash-register` becomes `CashRegisterIcon`, `qr-code` becomes `QrCodeIcon`, and `user-add` becomes `UserAddIcon`.

Browse [the icon list](docs/icons.md) or open [catalog/index.html](catalog/index.html) from a clone or installed package. The catalog supports search, categories, size/stroke previews, dark backgrounds, React snippets, and SVG downloads. GitHub shows HTML source; download the repository and open the file in a browser to use the catalog.

## Styling

Icons inherit the surrounding text color. Pass SVG props, CSS classes, inline styles, or Tailwind classes:

```tsx
import { CheckCircleIcon, ShopIcon } from "solite-icons";

<ShopIcon size={20} color="#2563eb" strokeWidth={1.75} />;
<ShopIcon className="size-5 text-blue-600" />;
<CheckCircleIcon style={{ width: "1.25rem", height: "1.25rem", color: "green" }} />;
```

```css
.toolbar-icon {
  width: 20px;
  height: 20px;
  color: var(--text-muted);
  flex-shrink: 0;
}
```

```tsx
<ShopIcon className="toolbar-icon" />
```

| Prop                 | Default               | Purpose                                                                |
| -------------------- | --------------------- | ---------------------------------------------------------------------- |
| `size`               | `24`                  | SVG width and height, as a number or CSS length                        |
| `color`              | `currentColor`        | Stroke color                                                           |
| `strokeWidth`        | `1.75`                | Outline thickness in viewBox units                                     |
| `nonScalingStroke`   | `false`               | Candidate: preserve stroke thickness as the SVG scales                 |
| `className`, `style` | none                  | CSS styling                                                            |
| `title`              | none                  | Accessible SVG title with a unique ID                                  |
| `aria-label`         | none                  | Accessible name without a visible title                                |
| `ref`                | none                  | Reference to the root `SVGSVGElement`                                  |
| Other SVG props      | standard SVG defaults | Such as `width`, `height`, `aria-hidden`, `data-*`, and event handlers |

Explicit `width` and `height` props override `size`. Use `size` or CSS when both dimensions should match. Keep the default outline thickness for visual consistency; use `strokeWidth` when a small control needs a heavier stroke.

In the 0.3.0 candidate, `nonScalingStroke` applies `vectorEffect="non-scaling-stroke"` to each drawing element. It works with CSS dimensions and string sizes without calculating a stroke from `size`.

### Shared visual defaults in the candidate

```tsx
import { ShopIcon, SoliteProvider } from "solite-icons";

<SoliteProvider size={20} color="currentColor" strokeWidth={1.75} className="app-icon">
  <ShopIcon />
  <SoliteProvider size={16} className="compact-icon">
    <ShopIcon color="rebeccapurple" className="shop-icon" />
  </SoliteProvider>
</SoliteProvider>;
```

`SoliteProvider` supplies only `size`, `color`, `strokeWidth`, `nonScalingStroke`, and `className`. Nested providers inherit unspecified defaults. Icon props override defaults, and classes combine in parent-provider, nested-provider, icon order. The provider does not share accessible names, titles, refs, or handlers. Without a provider, the existing defaults apply.

## Accessibility

Icons are decorative by default: `aria-hidden="true"` and `focusable="false"`. Put an accessible name on an icon-only button:

```tsx
import { SettingsIcon } from "solite-icons";

<button type="button" aria-label="Open settings">
  <SettingsIcon size={20} />
</button>;
```

When the icon itself conveys information, give it a title or an ARIA label:

```tsx
import { PaymentCheckIcon } from "solite-icons";

<PaymentCheckIcon title="Payment received" />;
<PaymentCheckIcon aria-label="Payment received" />;
```

A title gets a unique `aria-labelledby` ID, including when multiple copies render. Do not add a separate icon title when adjacent text already names the same action.

An explicit `aria-labelledby` takes precedence over `aria-label` and the generated title reference. `aria-label` takes precedence over the generated title reference. Explicit `aria-hidden` remains authoritative, including when a name is present.

Use a native button for actions, `aria-pressed` for toggle state, and visible text or a visually hidden label for the control's name. Keep keyboard focus visible and communicate loading separately from a decorative spinner. See the [accessibility guide](website/content/docs/accessibility.mdx) for disabled controls, contrast, target sizes, forced colors, reduced motion, RTL, and the pending manual VoiceOver/NVDA checklist. The package cannot establish an application's WCAG conformance.

## Dynamic names

For configuration-driven menus or names received at runtime, use the separate dynamic entry:

```tsx
import { SoliteIcon, type SoliteIconName } from "solite-icons/dynamic";

const iconName: SoliteIconName = "cash-register";

<SoliteIcon name={iconName} size={20} />;
```

This existing entry remains eager and includes the whole collection, all 553 glyphs in the candidate. Prefer named imports when the icons are known in code. Unknown names throw an error at runtime. The candidate provides a React-free validator:

```tsx
import { isIconName } from "solite-icons/metadata";
import { SoliteIcon } from "solite-icons/dynamic";

function ConfiguredIcon({ value }: { value: string }) {
  return isIconName(value) ? <SoliteIcon name={value} /> : null;
}
```

### Opt-in lazy names in the candidate

```tsx
import { useRef } from "react";
import { LazySoliteIcon } from "solite-icons/lazy";

export function ConfiguredShop() {
  const ref = useRef<SVGSVGElement>(null);
  return <LazySoliteIcon name="shop" size={20} ref={ref} />;
}
```

`LazySoliteIcon` accepts `name: SoliteIconName`, the usual icon props, a forwarded SVG ref, and `fallback?: ReactNode`. It caches lazy component identities and uses a separate per-icon import. Its default fallback reserves the requested dimensions and stays decorative. Pass `fallback={null}` to render nothing while loading, or provide your own placeholder without a duplicate name or premature success message. The ref connects after the icon loads. A name change shows the next fallback rather than presenting the previous drawing as the new icon.

Production code splitting depends on your bundler's dynamic-import support. There is loader-map overhead and potentially a network request; named imports remain preferable for fixed names. The component uses Suspense internally. Streaming SSR depends on the framework, and React's `renderToString` emits a fallback when a component suspends instead of waiting. See [dynamic and lazy usage](website/content/docs/dynamic.mdx) and [React's server-rendering limitations](https://react.dev/reference/react-dom/server/renderToString).

### Search and migration metadata in the candidate

```ts
import { iconMetadata, isIconName, searchIcons, lucideIconMap } from "solite-icons/metadata";

const names = searchIcons("magnifier");
const allNames = searchIcons("");
const category = iconMetadata.shop.category;
const soliteName = lucideIconMap.House; // "home"
const valid = isIconName("shop");
```

This entry has no React imports. Search matches canonical names, component spelling, categories, tags, and aliases in stable collection order. Aliases do not create components. `lucideIconMap` is a curated name aid; Solite drawings and props differ from Lucide. See the [migration guide](website/content/docs/migration.mdx).

## SVGs in any framework

Every icon is also a standalone file under `svg/`. Copy a file into your public assets directory and use it in HTML, Vue, Svelte, Laravel, or another framework:

```html
<img src="/icons/shop.svg" width="20" height="20" alt="Shops" />
```

Use `alt=""` when the image is decorative. An SVG loaded through `<img>` does not inherit the page's text color. Use inline SVG or the sprite when you need CSS-controlled stroke color.

Bundlers that support asset URLs can resolve the exported SVG path:

```tsx
// Vite asset URL example. Requires Vite's usual vite/client type declarations.
import shopUrl from "solite-icons/svg/shop.svg?url";

<img src={shopUrl} width={20} height={20} alt="Shops" />;
```

Your bundler's SVG loader controls whether an SVG import returns a URL, source text, or a component. Solite Icons does not install an SVG loader.

### SVG sprite

Copy `sprite.svg` into your public directory. Symbol IDs are prefixed with `solite-`:

```html
<svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true" style="color: #2563eb">
  <use href="/icons/sprite.svg#solite-shop"></use>
</svg>
```

### Raw geometry and names

The `/data` entry has no React imports:

```ts
import { icons, iconCategories, type SoliteIconName } from "solite-icons/data";

const names = Object.keys(icons);
const shopGeometry = icons.shop;
```

Each geometry node is `[tagName, attributes]`. Tags are limited to SVG drawing elements such as `path`, `rect`, and `circle`. `manifest.json` maps icon names to component names, files, and categories.

## CommonJS

```js
const { ShopIcon, CashRegisterIcon } = require("solite-icons");
const { SoliteIcon } = require("solite-icons/dynamic");
const { icons } = require("solite-icons/data");
```

## Moving from the app's `Uicons`

```tsx
// Before, inside Solite POS:
// import { Uicons } from "@/components/uicons";
// <Uicons name="shop" size={20} />

// Reusable named component:
import { ShopIcon } from "solite-icons";
<ShopIcon size={20} />;

// Or retain name-based rendering:
import { SoliteIcon } from "solite-icons/dynamic";
<SoliteIcon name="shop" size={20} />;
```

The geometry and default appearance are unchanged. The diagnostic DOM attribute is now `data-solite-icon`, replacing the app-local `data-uicon` attribute.

## Develop and add icons

Use Node.js 20.19 or newer and npm:

```sh
git clone https://github.com/Nikola-Limpet/solite-icons.git
cd solite-icons
npm ci
npm run build
npm test
npx playwright install chromium
npm run test:browser
npm run check
npm run format:check
```

Edit the original geometry in `src/definitions/`, then run `npm run build`. Keep the icon name unique, use the shared 24px grid, rounded joins/caps, and `currentColor`. Add the glyph to a group in `src/data.ts` and provide category, tags, and useful aliases in `src/metadata/`. The build generates named React components, ESM/CommonJS modules, declarations, SVGs, the sprite, the manifest, the lazy import map, the icon list, and the catalog.

Commit the regenerated `src/icons/`, `src/index.ts`, `dist/`, `svg/`, `sprite.svg`, `manifest.json`, and `catalog/` files. `npm run check` detects stale or unexpected generated files. To remove an icon, remove its old generated files before rebuilding. Removing or renaming a public icon is a breaking API change.

The candidate tests cover the 553-icon total, unchanged baseline geometry, SVG safety, names, metadata, provider and stroke behavior, package consumers, tree shaking, and lazy code splitting. `npm run test:browser` uses Playwright and axe for accessible names, complete controls, refs, hydration, and lazy transitions. It does not replace the manual assistive-technology checklist. If Chromium is installed elsewhere, set `SOLITE_CHROME_PATH` to its executable.

To inspect the package artifact:

```sh
npm pack --dry-run
```

To publish a new release, update the version and changelog, rebuild, run all checks, inspect the package artifact, and run `npm publish --access public` with an authorized npm account. No automatic publishing is configured.

## Contribute

Icon drawings, documentation fixes, accessibility improvements, and bug reports are welcome. Read the [contribution guide](https://solite-icons.nikola33.dev/contributing/) for the geometry conventions and local workflow. [Open an issue](https://github.com/Nikola-Limpet/solite-icons/issues) before starting a large change.

## Releases and registries

Install from [npm](https://www.npmjs.com/package/solite-icons). [GitHub Releases](https://github.com/Nikola-Limpet/solite-icons/releases) contains version notes and downloadable archives. The repository's Packages panel is for the separate GitHub Packages registry, so it does not show this npm publication.

## License and origin

[MIT](LICENSE). Copyright 2026 Nikola-Limpet.

The initial 229 SVG drawings were created for Solite POS and extracted from `Nikola-Limpet/hang-pos` at commit `07d7a83c9d2b98bb8449ea7b2a58ca055f8aecd1`. The 24 additional essentials extend the same outline style, using original geometry based on the approved Solite design references. Brand logos and product photography are not part of this icon library.

The 0.3.0 candidate adds 300 original drawings for interface controls, editing, accessibility settings, and application categories. All 253 drawings from 0.2.1 retain their names and geometry.

## Documentation website

The `website/` directory contains the Next.js and [Fumadocs](https://fumadocs.dev) documentation app. It includes MDX guides, documentation search, a live React playground, and a searchable collection browser. Its dependencies are separate from the icon package. Counts, previews, metadata, and SVG downloads should all come from the same installed package.

The default workflow previews the locked published package. To preview the expanded collection and new APIs, use the local candidate workflow below instead after installing dependencies.

```sh
npm ci
npm --prefix website ci
npm --prefix website run dev
```

The development server runs at `http://localhost:3000`. After selecting the package version, build the static site with:

```sh
npm --prefix website run build
```

Deploy `website/out/` on a static host. For GitHub Pages at `/solite-icons/`, build with `DOCS_BASE_PATH=/solite-icons`. For a root domain, leave the base path empty. Search runs in the browser using a generated index, so hosting does not require an API server.

Write guides in `website/content/docs/` and edit examples in `website/components/`. The site consumes the npm release pinned in `website/package.json`; update that version when publishing new icons. See [website/README.md](website/README.md) for authoring, preview images, and deployment details.

### Local candidate preview

The website manifest and lockfile continue to pin the published 0.2.1 package. To preview this branch's candidate, use Node.js 22 or newer and run from the repository root after installing both sets of dependencies:

```sh
npm run docs:candidate
npm --prefix website run dev
```

`docs:candidate` builds and packs the local 0.3.0 candidate into `output/`, then installs that archive into the website's `node_modules` without changing its package manifest or registry lockfile. It does not publish anything. For another local app, install the generated archive by its absolute path, for example `npm install /absolute/path/to/solite-icons/output/solite-icons-0.3.0.tgz`.

Validate the candidate site with `npm --prefix website run build` and `npm --prefix website run typecheck`. Restore the website's locked registry dependency with:

```sh
npm run docs:restore
```

This runs `npm ci` in `website/` and restores the published collection for docs development and builds. Re-run `docs:candidate` to preview the expanded collection and new APIs. After an actual npm publication, update the website dependency and lockfile to that published version, reinstall, and rebuild.
