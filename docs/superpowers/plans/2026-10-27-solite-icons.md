# Solite icons extraction plan

**Goal:** Move the approved 229 original Solite POS outline glyphs into the supplied `Nikola-Limpet/solite-icons` repository as an installable `solite-icons` package.

**Architecture:** Preserve geometry in small source groups. Generate one React component per icon and standalone SVGs from that source. Export named React components from the package root, name-based rendering from `/dynamic`, framework-free geometry from `/data`, and SVG assets through subpaths. Ship ESM, CommonJS, declarations, and prebuilt distribution files so GitHub installs do not require a consumer build step.

**Constraints:** Preserve the 24px grid, 1.75px stroke, rounded caps/joins, currentColor and original icon names. Do not change the POS app or publish to npm. The new empty repository needs an initial main commit. MIT licensing permits reuse in the user's other projects. React 18.2 and 19 are supported; SVG/data use does not require React.

- [x] Add package boundary tests that fail before implementation: exports, names, geometry safety, React rendering/accessibility, ESM/CommonJS, tree shaking and asset parity.
- [x] Extract source geometry and implement generated named components plus the dynamic renderer. Add a deterministic build and reproducibility check.
- [x] Document GitHub installation, named/dynamic imports, styling, accessibility, framework-free usage, icon catalog, and contributing/release steps. Include a searchable static catalog.
- [x] Run package tests and a clean tarball install, TypeScript consumer checks and React 18/19 smoke tests. Review the whole result.
- [x] Commit and push the initial main branch to the supplied repository. Record the exact commit for reproducible installs.

## Verification

Six package tests pass, including all 229 named/deep exports, decorative and accessible rendering, dynamic name validation, CommonJS and TypeScript ESM/CommonJS consumers, and tree shaking. Separate clean tarball projects pass SSR and TypeScript with React 18.3.1 and React 19.2.8. A data-only project installs and renders geometry without React. All 229 drawing geometries match the approved app. Catalog search, categories, empty state, details, copyable usage, asset paths and download labels were exercised. Generated-asset reproducibility, formatting and dependency audit pass. A separate source/package review found no substantive issues.

The supplied repository was empty. Initial main is published directly, preserving the existing POS repository. No npm publish or app dependency migration is included.
