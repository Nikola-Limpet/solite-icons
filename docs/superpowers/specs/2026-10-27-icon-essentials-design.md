# Solite essentials expansion

Add 24 real SVG icons to the npm library, increasing the collection from 229 to 253. Fix and publish the docs' npm install instructions. Preserve the existing documentation layout, Geist typography, blue accent, and light/dark themes.

## Approach

Use the ImageGen contact sheet at `assets/design/essentials-concepts-v1.png` as a visual reference, then draw original geometry in the library's existing TypeScript definitions. Generate React components, ESM/CommonJS exports, types, SVGs, sprite, manifest, and catalog through the existing build. Raster images alone cannot provide the library's SVG props or package exports, and importing another library would change the established icon family.

## New icons

- Developer tools: code, terminal, command, braces, git-branch, bot.
- Interface and discovery: sparkles, wand, lightbulb, rocket, accessibility, languages.
- Communication and media: share, volume, volume-off, microphone, microphone-off, video.
- More essentials: video-off, trophy, graduation-cap, wrench, puzzle, target.

## Drawing rules

Every icon uses the shared 24 by 24 viewBox, 1.75px outline, round caps and joins, no fill, and currentColor. Match the existing optical size and geometry helpers. Correct crowded details from the concept sheet for legibility at 16, 20, and 24 pixels. Keep the original 229 drawings unchanged. Use the Lucide screenshot only to identify useful categories.

## Release and docs

Release the additive collection as `solite-icons@0.2.0`. Update the changelog and icon counts, publish the package, and pin the documentation app to the new npm release. Preserve npm installation and usage examples. Deploy the docs to the existing Vercel project and domain. npm's staged release requires the owner's interactive 2FA approval if enforced.

## Verification

Check all 253 named/deep exports, safe SVG assets, category coverage, React rendering, ESM/CommonJS declarations, dynamic rendering, and tree shaking. Run generated-file verification, formatting, docs build and typecheck, clean npm installation, and inspect the new icons next to the existing drawings at small sizes.
