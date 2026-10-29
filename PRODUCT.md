# Solite Icons

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Developers evaluating, finding, installing, and styling icons for applications. The documentation leads with React, with a clear standalone SVG path, as confirmed by the maintainer on 2026-10-27.

## Product Purpose

An open-source icon library with original rounded outline drawings and a browsable collection. Help a developer find a suitable icon and put it into a working interface.

## Capabilities and Constraints

- The npm package is `solite-icons`; the current published version is 0.2.1 and contains 253 icons.
- The local 0.3.0 candidate contains 553 icons, including 300 original additions. It has not been published. Preserve the distinction between the installed release and the candidate in install commands and product claims.
- Named React components, deep imports, a dynamic renderer, ESM, CommonJS, TypeScript declarations, standalone SVGs, and a sprite are available.
- The candidate adds a separate lazy renderer, visual-only provider defaults, non-scaling strokes, and a React-free metadata/search entry. The existing dynamic renderer remains eager; named imports are preferred for fixed names.
- React 18.2 and 19 are supported. React is an optional peer dependency for SVG-only consumers.
- Every icon uses a 24 × 24 grid, a 1.75px default stroke, rounded caps and joins, and currentColor.
- The project is MIT licensed. Source is public at `Nikola-Limpet/solite-icons`.
- The docs use Next.js, Fumadocs, and MDX, with static export, search, a playground, and an icon browser.
- The website manifest and lockfile pin the released npm package. `npm run docs:candidate` installs a packed local candidate without changing that registry lockfile; `npm run docs:restore` restores it with `npm ci`. Derive collection counts from the installed package so previews, search, and downloads agree. A docs rebrand must not change the library's icon geometry or public API.

## Brand Commitments

The name remains Solite Icons. The maintainer requested a new logo and explicitly chose a different visual identity rather than retaining the existing blue style on 2026-10-27. The maintainer subsequently requested a return to the original blue accent and neutral page backgrounds. Retain the new S logo, documentation layout, and open-source content. This supersedes the earlier teal palette.

## Evidence on Hand

The actual package exports, `svg/`, `manifest.json`, `LICENSE`, npm registry metadata, and the working React examples support product claims. The recorded benchmark in `docs/benchmarks/2026-10-27.md` measures Solite 0.2.1 and its stated comparison versions. It is historical size evidence, not a measurement of the 0.3.0 candidate. No adoption counts, testimonials, or customer claims have been supplied.

Browser tests use Playwright and axe for representative names, controls, refs, hydration, and lazy loading. Manual VoiceOver and NVDA checks must record operating system, browser, and assistive-technology versions and results separately. Do not describe the library or a consumer application as WCAG-certified.

## Product Principles

- Put installation and finding an icon ahead of promotional copy.
- Make the MIT license, public source, and contribution path easy to find.
- Demonstrate the actual package components and use only verified release information.
- Keep the SVG path accessible to projects without React.
