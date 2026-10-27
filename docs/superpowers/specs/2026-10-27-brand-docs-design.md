# Solite identity and documentation refresh

Status: proposed for review. The maintainer chose a different visual identity, the teal drawing-specimen direction, and React-first documentation with a clear SVG path.

## Intent

Give Solite Icons a recognizable logo and a coherent, modern documentation identity. A visitor should immediately understand that this is an open-source icon library, install it from npm, browse the actual collection, and find its license and contribution instructions.

## Approaches

- **Teal drawing specimen, selected by the maintainer.** A geometric S, deep teal, mint, large actual glyphs, and measured annotations make the drawings the focus. It adds a brand without turning the documentation into a marketing site.
- **Black-and-white type specimen.** Strong typography and a monochrome collection would reduce color and let the outlines lead. The maintainer selected the more distinctive teal direction.
- Retaining the incumbent blue identity was offered first and explicitly declined.

## Identity

The ImageGen concept is `assets/brand/solite-mark-concept.png`. Its exact prompt is stored beside it. The mark is an open geometric S with rounded corners and terminals, derived from the library's outline vocabulary. Implement a clean, editable SVG of this approved silhouette for sharp rendering, plus PNG versions for sharing. The generated PNG remains the concept provenance.

Use deep teal `#0b7668` as the light-theme action and logo color, pale mint `#edf7f3` for specimen backgrounds, charcoal `#142923` for primary text, and white for reading. Dark mode uses a deep green-black background and a light mint accent. Secondary copy must meet 4.5:1 contrast. Geist remains the reading and interface family. Headings become more spacious and decisive; code retains a monospace stack.

## First viewport and reading order

The docs keep Fumadocs navigation, search, table of contents, mobile menu, and theme switching. The navigation uses the new mark and Solite Icons wordmark, with visible paths to the icon browser, npm, and GitHub.

The introduction opens with the actual product name and a concise statement about original outline icons. It immediately shows the install command, a browse action, and an MIT/open-source link. An adjacent or following specimen uses real React components, including some of the new essentials, with the true 24 × 24 grid and 1.75px default stroke annotated. Avoid invented usage statistics, testimonials, and decorative illustrations.

Next come a working React import example, the existing live playground, and short routes into React, styling, accessibility, and plain SVG. A project section links to source, the MIT license, contributions, and releases. At narrow widths the composition stacks in reading order and retains every primary action.

## Documentation and repository

- Refresh README branding, a concise introduction, npm/version/license links, installation, and paths to the docs and contributions.
- Correct the stale contributor claim about installing from an initial Git commit. The docs pin the published npm version in `website/package.json`.
- Add explicit licensing and release information where it helps readers. Explain that npm publishing and GitHub Packages are separate, with npm as the installation source.
- Add the logo to site navigation and favicon, and metadata suitable for sharing. Public asset references must work at the root domain and with `DOCS_BASE_PATH=/solite-icons`.
- Use a stable absolute hosted logo URL in the README so it also resolves when a future npm release displays that README. The current package allowlist does not include `assets/brand/`.
- Keep all existing guide URLs, examples, search, the icon browser, SVG downloads, and API contracts working.

## Release handling

The GitHub release `v0.2.1` has already been published at the reviewed merge commit, with the byte-identical npm archive attached. The repository description and topics now state that Solite is an MIT-licensed icon library. This branding change does not need another npm library release. Deliver the docs changes through a new PR; merge and production deployment follow the user's existing request to ship the project when checks pass.

## Scope and validation

Do not change icon geometry, exports, the package version, or library runtime code. Add no new application dependencies. Preserve keyboard navigation, accessible names, dark mode, reduced-motion support, and responsive reading.

Verify the docs build and typecheck, formatting, package generation consistency, and existing tests. Inspect desktop and mobile renders with local rendering tools, check internal and external asset references, and build once with the GitHub Pages base path. Check the published release and deployment status before claiming they are live.

## Builder decisions

The exact component split, spacing, clean SVG path, dark-theme neutral values, metadata image composition, and copy edits are implementer decisions within this direction. Include base-path-aware favicon and sharing-image URLs and a canonical metadata base. No external adoption or performance claims may be invented.

A read-only builder check found no blocking gaps. Production deployment is provided by the connected Vercel project; it must be verified independently of the docs CI artifact build.
