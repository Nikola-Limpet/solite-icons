# Changelog

## 0.3.0 candidate, unpublished

- Added 300 original icons for a local total of 553. Preserved all 253 existing names and drawings, import paths, and rendering defaults.
- Added the opt-in `solite-icons/lazy` entry with `LazySoliteIcon`, per-icon imports, a decorative size-preserving fallback, and forwarded refs. The existing `solite-icons/dynamic` entry remains eager.
- Added `SoliteProvider` for nested visual defaults, the TypeScript-only `SoliteIconComponent` type, and `nonScalingStroke` on SVG drawing elements.
- Added React-free `solite-icons/metadata` exports: `iconMetadata`, `isIconName`, `searchIcons`, and the curated `lucideIconMap` migration aid. Catalog search uses categories, tags, and aliases.
- Added package, metadata, lazy-bundling, browser accessibility, and hydration checks. Expanded guidance for semantic controls, migration, and manual VoiceOver/NVDA verification. Manual checks remain a separate release task; automated checks do not establish application WCAG conformance.
- Added `npm run docs:candidate` to preview a packed local library and `npm run docs:restore` to reinstall the website's locked public dependency. The npm latest release remains 0.2.1. Historical 0.2.1 benchmark evidence does not measure this candidate.

## 0.2.1

- Added 24 original outline icons for developer tools, media, sharing, accessibility, learning, and utilities. The collection now has 253 icons.
- Added named and deep React exports, dynamic names, types, SVGs, sprite symbols, and catalog entries for every new icon.
- Kept all 229 original icon drawings unchanged and updated the docs to install from npm.

## 0.1.0

- Extracted 229 original rounded outline icons from Solite POS.
- Added named React imports, direct icon modules, a dynamic renderer, and framework-free geometry.
- Added ESM, CommonJS, TypeScript declarations, standalone SVGs, a sprite, and a searchable catalog.
