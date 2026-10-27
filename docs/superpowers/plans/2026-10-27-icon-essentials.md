# Solite essentials implementation plan

> For agentic workers: use superpowers:executing-plans to implement this plan in this session.

**Goal:** Ship 24 new SVG icons and current npm instructions on the existing docs site.
**Architecture:** Add three geometry groups to the existing library generator. Publish 0.2.0 before updating the website's pinned npm dependency and deploying its static build.
**Tech Stack:** TypeScript, esbuild, React, Node test runner, Next.js, Fumadocs, npm, Vercel.
**Spec:** docs/superpowers/specs/2026-10-27-icon-essentials-design.md

## Global constraints

- 24 by 24 viewBox, 1.75px outline, round caps and joins, no fill, currentColor.
- Preserve all 229 original drawings and the existing documentation layout and themes.
- Ship named and deep React exports, dynamic and data entries, ESM, CommonJS, types, SVGs, sprite, manifest, and catalog.
- Use the approved ImageGen sheet as a reference; produce original editable vector geometry.

## Review focus

- No original icon is removed or changed; compare to the installed 0.1.0 package.
- New names are available through named, deep, and dynamic imports and have real matching SVG files.
- Thin outlines and small details remain legible at 16px, 20px, and 24px.
- SVG downloads, rendered React previews, and website counts use the same published release.
- Default npm installation resolves 0.2.0, not a staged placeholder.

### Task 1: Implement and verify the new icons

**Files:** create src/definitions/developer.ts, media.ts, discovery.ts; modify src/data.ts, test/package.test.mjs, test/fixtures/react.ts, test/fixtures/require.cts, package.json, package-lock.json, CHANGELOG.md, README.md, docs/icons.md, scripts/render-preview.mjs, generated package assets, and the README preview PNG.
**Interfaces:** consume IconGroup and p/r/c/l/poly helpers; produce 24 new icons through existing public entry points.

- [x] Update the full-set test to 253 icons and add a named batch rendering/asset test. Extend the ESM/CommonJS type fixtures with new exports. Run npm test and verify expected missing-icon failures.
- [x] Draw the six developer, seven media, and eleven discovery icons in the approved list. Add non-overlapping categories to data.ts and build the package.
- [x] Run npm test, npm run check, npm run format:check; compare the original geometry to 0.1.0. Inspect a rendered 16/20/24/48px contact sheet.
- [x] Bump to 0.2.0, update changelog and current counts, list the new icons, and regenerate the actual React README preview.
- [ ] Commit the verified library, concepts, spec, and plan.

### Task 2: Publish and verify the npm release

**Files:** inspect the packed tarball; use temporary private npm credentials only.
**Interfaces:** consume the 0.2.0 artifact; produce a public npm release with latest=0.2.0.

- [x] Pack and audit export files and package contents; smoke-test the tarball in a clean consumer.
- [ ] Submit the artifact using private credentials; obtain maintainer 2FA approval if npm stages the release.
- [ ] Install solite-icons from the public registry in a clean project and check new React/deep/dynamic/CJS imports and SVG files, with artifact integrity matching.

### Task 3: Publish the documentation update

**Files:** website/package.json and lockfile, README.md, website/README.md, website/content/docs/index.mdx, installation.mdx, website/app/layout.tsx, website/lib/layout.tsx.
**Interfaces:** consume npm solite-icons@0.2.0; produce docs with 253 icons and npm install instructions.

- [x] Pin 0.2.0, update displayed counts and version, and preserve page structure and styling.
- [ ] Run docs build and typecheck, package formatting and generated checks. Verify exported install text, manifest counts, and new SVG downloads.
- [ ] Run one fresh whole-change review and fix substantive findings.
- [ ] Commit, push the branch, integrate the approved work, and deploy the existing Vercel project. Verify live install instructions and new assets.

## Execution notes

The docs were built against the packed 0.2.0 artifact before publication. Their lockfile records the expected public tarball URL and exact integrity; a fresh npm ci will verify it after publication. Generated manifests use deterministic generator output and are excluded from the formatter like the other generated assets.
