# React accessibility and icon expansion implementation plan

> **For agentic workers:** Use superpowers:executing-plans for controller-owned integration and tests. The maintainer explicitly requested agents for icon generation; run the three disjoint definition batches in parallel, without shared edits or nested agents.

**Goal:** Prepare Solite Icons 0.3.0 with 553 actual icons, accessible React conveniences, metadata search, and documentation driven by the installed package.
**Architecture:** Extend the existing geometry generator. Three agents author separate 100-icon definition and metadata files; the controller owns shared data composition, runtime APIs, generation, tests, docs, and release preparation.
**Tech stack:** TypeScript, React 18.2/19, esbuild, Node test runner, Playwright, axe-core, Next.js/Fumadocs.
**Spec:** docs/superpowers/specs/2026-10-27-react-accessibility-expansion-design.md

## Global constraints

- Preserve all 253 baseline geometries and existing public import paths.
- Add exactly 300 original icons, with all 553 available through every existing package format.
- Keep the 24 by 24 viewBox, 1.75 default stroke, rounded caps and joins, no fill, and currentColor.
- React remains the only runtime peer; new test dependencies are development-only.
- Keep synchronous dynamic rendering compatible; lazy loading is opt-in.
- Counts and previews must describe real assets from the same installed candidate.
- Preserve the current blue identity and existing documentation routes.
- Prepare 0.3.0 locally. Do not publish, merge, push, or deploy as part of this implementation.

## Review focus

- Metadata and all glyphs must stay out of a one-icon named-import bundle.
- Untyped hostile names such as `__proto__` must not resolve through inherited object properties.
- Labels, explicit hiding, title IDs, refs, and hydration must behave in a browser as well as server HTML.
- Lazy name changes and loading placeholders must never expose a stale glyph or false accessible name.
- Docs installation and download assets must use the same package, including the base-path build.

### Task 1: Add three original icon batches

**Files:** Create src/definitions/{interface,editing,apps}-expansion.ts, src/metadata/{interface,editing,apps}-expansion.ts, an integration expansion test. Modify src/data.ts only in the controller.
**Interfaces:** Each definition exports interfaceExpansionIcons, editingExpansionIcons, or appsExpansionIcons as const satisfies IconGroup. Each metadata module exports the matching *ExpansionMetadata object keyed by its 100 canonical names, with category: string and tags: readonly string[]. Definition files consume only src/geometry.ts helpers. Coverage documents specify exact names and drawing ideas.

- [x] Capture baseline geometry in test/fixtures/baseline-icons.json and write a failing total/preservation test for 553 icons.
- [x] Assign the three coverage documents to independent agents, each owning only its new definition, metadata and report files. Have each verify 100 unique names and exact duplicates against baseline.
- [x] Integrate groups into data.ts and generate existing package outputs.
- [x] Verify all 553 named/deep/dynamic exports, safe drawing attributes, category/metadata coverage, no exact duplicate new geometry, and unchanged baseline geometry.
- [x] Render every new drawing at 16/20/24 pixels, review all sheets, and correct visual defects.

### Task 2: Add metadata and search

**Files:** Create src/metadata.ts and src/metadata/baseline.ts; modify scripts/build.mjs, scripts/catalog.mjs, package.json, and metadata tests.
**Interfaces:** React-free /metadata exports iconMetadata, isIconName(value: unknown): value is SoliteIconName, searchIcons(query: string): SoliteIconName[], and lucideIconMap. Metadata uses { category, tags, aliases? }; search returns stable canonical names, matching canonical/component spelling, tags and aliases.

- [x] Write failing tests for close/delete/gear/magnifier/hearing, component spelling, empty query, hostile names, full metadata coverage, and a React-free bundle.
- [x] Implement metadata and curated common Lucide mappings without glyph or React imports. Validate against the complete typed metadata keyset without importing geometry.
- [x] Generate manifest metadata and docs/icons.md; use the same search vocabulary in the offline catalog.
- [x] Run metadata and bundle tests.

### Task 3: Add React styling and lazy loading

**Files:** Create src/context.ts and src/lazy.ts; modify src/create-icon.ts, generator exports, package exports, type fixtures and runtime tests.
**Interfaces:** Main exports SoliteProvider and type SoliteIconComponent. Provider accepts visual defaults only. SoliteIconProps adds nonScalingStroke?: boolean. /lazy exports LazySoliteIcon with standard props/ref plus name and fallback?: ReactNode; generated lazy imports use literal per-icon imports and cached React.lazy identities.

- [x] Write failing tests for provider inheritance/overrides, nested classes, non-scaling child strokes, explicit dimensions and compatibility.
- [x] Implement the visual-only context and stroke option, preserving all accessible-name behavior.
- [x] Write failing lazy tests for loading fallback, hostile names, real module resolution in ESM/CommonJS, and split chunks.
- [x] Implement cached lazy components with Suspense and a size-reserving decorative default fallback. Add typed consumer examples and run package tests.

### Task 4: Add browser accessibility evidence and React matrix

**Files:** Create test/browser fixtures/tests and test/browser.test.mjs; modify package.json and .github/workflows/ci.yml.
**Interfaces:** npm run test:browser builds an isolated bundled fixture and runs headless Chromium with Playwright and axe. It must not depend on the documentation package or an external site.

- [x] Exercise accessible names, decorative exclusion, explicit aria-hidden, referenced labels, repeated titles, forwarded refs, SSR hydration and lazy transitions.
- [x] Scan representative semantic icon buttons and stateful examples with axe; test native keyboard behavior and state announcements.
- [x] Run npm test against React 18.2 and current React 19 in CI. Add a browser job that installs Chromium and runs browser tests.
- [x] Record browser evidence separately from the manual VoiceOver/NVDA checklist.

### Task 5: Update real collection data, docs and release candidate

**Files:** Modify website browser/introduction/metadata, documentation guides, README, CHANGELOG, PRODUCT.md, package versions, scripts/sync-assets.mjs and candidate-preview tooling.
**Interfaces:** Displayed counts and versions derive from the installed package manifest. Provide an explicit local candidate install/restore script for the docs, preserving default registry reproducibility until publication.

- [x] Bump the local library candidate to 0.3.0 and rebuild; update counts and release text without claiming publication.
- [x] Update the browser to use shared metadata search and accessible result counts.
- [x] Document lazy loading, provider defaults, scaling, migration, toggle/loading/disabled controls, contrast, touch targets, forced colors, reduced motion, RTL, and manual assistive-technology checks.
- [x] Build/typecheck the docs against a packed candidate, including a base-path build. Check previews and SVG download counts agree.
- [x] Keep historical 0.2.1 benchmark results explicitly versioned rather than relabeling them as a new measurement.

### Task 6: Verify and review

**Files:** Packed artifact, isolated consumer checks, contact sheets, and task ledger/report.

- [x] Run package tests, browser tests, generated-file checks, formatting, docs builds/typecheck, and packed-artifact ESM/CommonJS/TypeScript checks.
- [x] Run one independent whole-change review; fix substantive findings and verify each correction.
- [x] Commit only this feature's files and leave the release candidate reviewable. Report actual icon count, checks, artifact path, npm public status, and remaining manual checks.

## Execution rulings

The maintainer approved proceeding after the design and style comparison. The controller writes this task-level plan and executes through verification without another routine approval round, as authorized by the design. Icon generation is parallel because ownership is disjoint; shared data and generated files remain controller-owned. Work starts from main commit d00f4ce, after the independent blue-branding change was merged. Use a feature branch in the current clean checkout rather than touching the merged main history.

## Completed validation

The candidate contains 553 icons and preserves all 253 baseline drawings. All 21 package tests and the browser accessibility, ref, hydration, and lazy-transition fixture passed on React 18.2.0 and 19.2.8. A fresh archive installation passed ESM, CommonJS, all 553 lazy loaders in both formats, and TypeScript consumer checks.

Documentation build, typecheck, metadata search, tile counts, and SVG downloads passed at the root path and /solite-icons. The real restore workflow returned exactly 253 public-release SVGs; reinstalling the candidate returned 553. The two independent review findings were fixed with a regression for stale downloads and a count-neutral social image. No material package/API finding remained.

Manual VoiceOver and NVDA checks are pending and documented. The feature stays on its local branch. npm publication, deployment, pushing, merging, and concurrent sidebar and npm-pipeline work remain separate.
