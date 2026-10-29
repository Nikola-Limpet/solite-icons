# React accessibility and 300-icon expansion

Status: approved for implementation on 2026-10-27 by the maintainer's request to proceed with updating the collection and counts after reviewing the design and style comparison. The maintainer requested implementation of the preceding Lucide comparison findings, use of Superpowers, and agents to create hundreds of additional icons. Publishing remains a separate release action; the current public package was verified as 0.2.1 before implementation.

## Intent

Make Solite a more complete choice for React applications, with accessible defaults that have browser-level evidence, useful documentation, easier migration, and a substantially richer original icon collection. Accessibility has two separate deliverables: accessible React behavior and symbols for accessibility settings. Adding the latter does not establish the former.

## Goals and constraints

- Add exactly 300 original icons to the current 253, yielding 553 named icons.
- Preserve all existing icon names, geometry, import paths, and default rendering behavior.
- Keep the 24 by 24 viewBox, 1.75 default stroke, rounded caps and joins, no fill, and currentColor.
- Keep React 18.2 and React 19 support, ESM, CommonJS, TypeScript, deep imports, standalone SVGs, sprite, manifest, and offline catalog.
- Use original editable vector geometry. Lucide names and categories can identify use cases; do not copy its SVG geometry or introduce a runtime dependency on another icon library.
- Keep new runtime dependencies limited to the existing React peer. Browser test dependencies are development-only.
- Keep the current React-first docs, existing visual identity, existing URLs, dark mode, base-path support, and plain SVG usage. Preserve any concurrent documentation and branding work in the shared checkout; the expansion must not overwrite it.
- Prepare an additive 0.3.0 release locally. Publishing to npm, deploying, merging, and pushing are separate release actions, not part of this implementation approval.

## Approaches

The proposed approach is an additive release using the existing geometry generator, with independent agents owning disjoint new definition files. One controller integrates exports, metadata, runtime APIs, documentation, and verification. This preserves consumers and lets the icon work proceed independently.

Replacing the existing drawings or copying another collection would defeat the original icon family and introduce compatibility or licensing work. Generating raster images would not supply SVG paths, React props, or usable package exports. Those approaches do not fit this request.

## Icon expansion

Create three non-overlapping batches of 100 new names. Assign the exact names before implementation; record them in a companion coverage document. Existing equivalent drawings must be reused through search aliases rather than counted as new icons.

1. Accessibility and interface controls: hearing, captions, keyboard and text preferences, contrast, forms, selection states, tables, sorting, pagination, panels, arrows, and layouts.
2. Editing and development: text formatting, alignment, lists, document tooling, source control, programming and infrastructure concepts, and collaboration.
3. Application categories: media playback, connectivity, devices, security, work and education, transport, weather and nature, health, and other everyday application symbols.

The proposed name lists and drawing concepts are recorded in [interface coverage](2026-10-27-expansion-interface-coverage.md), [editing coverage](2026-10-27-expansion-editing-coverage.md), and [application coverage](2026-10-27-expansion-apps-coverage.md). They are design proposals, not generated SVG assets.

High-priority candidates include keyboard, captions, ear, ear-off, contrast, type, circle, square, circle-dot, minus-square, chevrons-up-down, list, list-ordered, bold, italic, underline, align-left, chevrons-left, chevrons-right, layers, stop-circle, skip-back, and skip-forward. Reuse existing equivalents: for example, the existing sort drawing already represents arrow-up-down, so that name belongs in search aliases rather than the new-icon count. Use stop as an alias for the distinct stop-circle playback control instead of counting a second square silhouette.

Each batch owns only new definition files and companion metadata. Agents must not edit src/data.ts, scripts/build.mjs, generated icons, package manifests, shared tests, or other batches. The controller integrates after all batches are available. No nested agent spawning.

New drawings need distinct recognizable silhouettes and legibility at 16, 20, and 24 pixels. Obvious naming padding, duplicate geometry, and variants without a distinct use case do not count. Review contact sheets for every new icon, not only a sample. Automated tests detect duplicate names, exact duplicate geometry, unsafe attributes, empty definitions, missing metadata, category coverage, and mismatches across generated outputs. Optical quality still requires visual review.

## React APIs

Keep the existing eager SoliteIcon in solite-icons/dynamic unchanged so current synchronous and server-rendered use continues to work.

Add solite-icons/lazy with LazySoliteIcon and a generated literal import map. Each loader references one existing per-icon module. The component accepts name: SoliteIconName, the standard icon props and ref, and fallback?: ReactNode. It uses React.lazy and Suspense, reserves the requested SVG size in the default decorative loading fallback, and retains the named component's accessibility behavior after loading. Fallback content must not create duplicate accessible names or claim that a meaningful status has already loaded. The map caches lazy component identities rather than creating a new lazy component during each render. Invalid untyped names produce a clear error; external values can be checked using isIconName from the metadata entry. Name changes must never display the previous icon as the new one. Documentation must explain bundler chunking, SSR/Suspense limitations, and why named imports remain preferable for names known in source.

Export SoliteProvider and the TypeScript-only SoliteIconComponent type from the main entry. SoliteIconComponent is the type alias ForwardRefExoticComponent<SoliteIconProps & RefAttributes<SVGSVGElement>>, suitable for typed component slots such as navigation item icons; it is not a new runtime component. Provider defaults are size, color, strokeWidth, nonScalingStroke, and className only. Do not inherit titles, ARIA names, refs, or interaction handlers through context. Individual props override provider values; explicit SVG width and height continue to override size. Nested providers merge defaults with their parent. Class names combine predictably. Without a provider, output retains the current defaults.

Add nonScalingStroke?: boolean to SoliteIconProps. When true, apply vectorEffect="non-scaling-stroke" to drawing elements so CSS dimensions and string sizes work without arithmetic. False retains existing scaling behavior. Continue supporting global CSS using [data-solite-icon]; no stylesheet is required.

## Accessibility behavior and evidence

Preserve decorative aria-hidden="true" and focusable="false" defaults. Meaningful icons receive role="img" and an accessible name through title, aria-label, or aria-labelledby. Explicit aria-hidden remains authoritative. Existing label precedence must remain stable. Do not infer accessible names from icon filenames.

Extend automated tests beyond markup regexes. A headless browser fixture must exercise accessible-name queries, decorative exclusion, repeated titles, externally referenced labels, explicit hiding, forwarded refs, and SSR hydration without mismatched title IDs. Use axe for representative complete examples, including icon-only buttons, rather than pretending that an isolated SVG proves an application's accessibility.

Add examples for semantic buttons, visible or visually hidden labels, toggle state using aria-pressed, disabled controls, loading/busy status, tooltip limitations, keyboard focus, and controls with sufficiently large hit areas. Explain meaningful non-text contrast of at least 3:1, WCAG 2.2 AA target-size requirements and their exceptions, and larger touch targets as a recommendation. Add forced-colors, reduced-motion, small-size stroke, and RTL guidance. Do not automatically mirror all icons in RTL.

Provide a reproducible manual VoiceOver/NVDA checklist with the browser and assistive-technology versions to record. Do not claim those manual checks were performed when the required software is unavailable. Automated evidence and remaining manual checks must be reported separately.

## Metadata, search, and migration

Add a React-free solite-icons/metadata entry containing iconMetadata, isIconName, searchIcons, and lucideIconMap. Metadata covers every icon with category and useful tags; optional search aliases describe alternative words without adding duplicate components. searchIcons accepts a string and returns canonical SoliteIconName values, with deterministic ordering, support for kebab-case and component-style names, and matching aliases and tags. Empty input returns the full canonical list.

Include a curated mapping of common Lucide component names to existing Solite names. Document visual differences and missing equivalents honestly. The mapping is a migration aid, not an assertion of API or drawing compatibility. Do not rename existing exports to match Lucide.

Use the same metadata for the website icon browser and generated offline catalog. Searches such as close, delete, gear, magnifier, and hearing should find the appropriate canonical icons even when those words are not in their filenames. Show result counts with accessible announcements. Keep metadata out of named icon browser bundles unless explicitly imported.

## Build and documentation

Extend the existing generator rather than manually creating hundreds of component and asset files. Generate all 553 named/deep modules, both module formats and declaration formats, SVGs, sprite, manifest, catalog, lazy map, metadata, and docs/icons.md consistently. Keep manifest changes additive. Generate or derive counts so tests and docs do not repeat fragile numeric assumptions; retain explicit assertions for the release total and unchanged baseline geometry.

For local docs validation, consume the packed working library through an explicit local-preview workflow. Do not silently leave website dependencies pinned to an unavailable registry version, and do not report the new collection as publicly available before publication. Preserve a reproducible default docs installation using the published package until release. Explain how to validate the candidate locally and how to switch the docs to the registry release afterward.

Update README, CHANGELOG, accessibility, React, styling, dynamic, migration, contributing, and release documentation. Existing benchmark artifacts describe their recorded versions; do not present the old 0.2.1 benchmark as evidence for 0.3.0.

## Verification and completion

- Establish a clean baseline and record the starting commit and all 253 existing geometries.
- Use failing tests before runtime behavior changes and before integrating new icon exports.
- Run package and type tests, generated-file checks, formatting, tree-shaking and lazy code-splitting checks, and packed-artifact consumer checks for ESM and CommonJS.
- Run package tests against React 18.2 and React 19 in CI; add browser accessibility and hydration checks in an appropriate separate job.
- Build and typecheck the docs against the local release candidate; verify a base-path build and that previews, metadata, counts, and SVG downloads all use that same candidate.
- Review contact sheets for all 300 additions at small sizes and correct crowded or ambiguous drawings.
- Obtain an independent code and specification review of the integrated implementation and address material findings.
- Report exactly what was implemented and verified, plus any manual accessibility checks that remain unavailable. Do not call the whole project WCAG-certified or imply that a package can guarantee consumer accessibility.

## Builder decisions

The controller may choose concrete filenames, exact category allocations, metadata structures, test-tool versions, internal component splits, and local-preview mechanics within these contracts. The 300-icon total, preservation guarantees, public entry names, accessibility behavior, dependency limits, and original drawing requirement are binding after approval. If visual review rejects a proposed icon, replace it with another useful original concept while retaining the agreed batch total.

## Execution after approval

Approval authorizes implementation and verification of this complete scope using agents, with no repeated confirmation for routine reversible implementation choices. Write the task-level implementation plan from this design, then assign disjoint icon-definition batches to agents while the controller implements the shared APIs and integration. Use isolated feature work where needed to preserve the concurrent shared-checkout changes. Run independent reviews and the stated verification before reporting completion. Leave publishing, deployment, merging, and pushing for a concrete release handoff.

The pre-implementation baseline is commit 8717e1a, with 253 icons. All eight package tests and the generated-file check passed during this design pass. Concurrent branding/documentation edits appeared after that baseline; they are not changes made by this design task.

## Design review

A fresh read-only builder review found the runtime, build, accessibility, and docs contracts sufficient for planning after clarifying that SoliteIconComponent is a TypeScript-only component type. Its coverage finding was resolved by assigning ruler to the application batch and adding the two text-direction controls to editing. A subsequent deterministic check confirmed 100 names per batch, matching table and JSON order, no collisions with the 253 existing names, and exactly 300 unique additions across all batches. All four design documents were formatted. SVG drawing, product implementation, and optical review begin after approval.
