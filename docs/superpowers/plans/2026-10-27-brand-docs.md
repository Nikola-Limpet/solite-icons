# Solite identity and docs implementation plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox syntax for tracking.

**Goal:** Ship the approved teal S identity, clearer open-source docs, and a merged PR.

**Architecture:** Keep the existing Fumadocs shell, routes, search, playground, and icon browser. Add static brand assets and focused React presentation components. Replace the blue theme consistently while retaining the released npm package.

**Tech Stack:** Next.js 16, Fumadocs, React 19, MDX, CSS, SVG, PNG.

**Spec:** `docs/superpowers/specs/2026-10-27-brand-docs-design.md`

## Global constraints

- Preserve all 253 icon drawings, exports, API, and package version 0.2.1.
- Add no dependencies. React-first docs must have an obvious standalone SVG path.
- Keep existing URLs, accessibility, dark mode, search, and mobile navigation.
- Teal `#0b7668`, mint `#edf7f3`, charcoal `#142923`, white, Geist.
- Use the approved generated S silhouette and preserve generation provenance.

## Review focus

- Root and subdirectory builds must resolve logos, favicon, sharing artwork, links, search, and downloads.
- Readable light and dark themes; visible focus; no mobile horizontal overflow.
- Every sample uses a real exported icon, with decorative SVG accessibility defaults preserved.
- README imagery must also work on npm without relying on an unshipped relative asset.
- Open-source, compatibility, and release statements must match the repository and registry.

### Task 1: Implement the identity and docs

**Files:** `assets/brand/*`, `website/public/brand/*`, `website/components/{solite-logo,docs-intro,example-board,mdx}.tsx`, `website/lib/layout.tsx`, `website/app/{layout.tsx,global.css}`, `website/content/docs/*`, `README.md`, `website/README.md`, `DESIGN.md`.

**Interfaces:** `SoliteLogo({size?,className?})` is decorative beside a wordmark. `DocsIntro()` owns the introduction and npm actions. Public brand assets are prefixed with the existing `NEXT_PUBLIC_DOCS_BASE_PATH` in app references.

- [x] Refine the approved mark with ImageGen; preserve original concept and exact prompt. Create clean SVG and PNG brand assets and sharing artwork.
- [x] Add the logo to navigation, favicon, metadata, and README. Implement the teal light/dark system and updated specimen with real components.
- [x] Update the introduction, installation, contributor, license, release, and README content. Keep detailed API guides and existing controls.
- [x] Record the actual visual system in `DESIGN.md`. Run formatting, generation consistency, existing tests, docs build, and typecheck. Expected: all exit zero.
- [x] Inspect rendered desktop/mobile pages in both themes and fix material issues. Verify a subdirectory build and asset references. Expected: no overflow, missing assets, or broken internal links.
- [x] Commit the complete change.

### Task 2: Review, PR, and ship

**Files:** reviewed Task 1 branch and PR.

**Interfaces:** consumes the checked static export and branch; produces a PR and merged production deployment.

- [x] Obtain one fresh read-only whole-branch review. Fix material findings and rerun affected checks.
- [ ] Push the branch, create and immediately link the PR. Review checks and comments; if pending, watch the PR and end the turn.
- [ ] Merge only when checks pass and review has no blockers. Verify production assets and updated content, then stop watching before final handback.
