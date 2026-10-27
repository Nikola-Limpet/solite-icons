# Solite Icons documentation site

**Goal:** Use the external documentation framework behind zod.dev, Fumadocs, to document Solite Icons with rendered React examples and a useful icon browser.

**Architecture:** A private Next.js/Fumadocs app in `website/` has its own dependencies and lockfile. The library remains independently installable. MDX guides cover installation, React, styling, accessibility, dynamic names, and SVG usage. Client components render the actual package icons with size/stroke/color controls and copyable snippets. A searchable gallery provides all 229 icons. Build as a static export with local search and optional GitHub Pages base path. Generate a README PNG from real React markup and show an inline preview in this conversation.

**Design:** Quiet documentation layout, Solite blue, high-contrast type, a grouped sidebar and in-page navigation. Blue preview canvas shows the rounded outline system. Keep forms, controls and phone layouts accessible. No fictional npm publish command; install from GitHub.

- [x] Set up the Fumadocs/Next app and its MDX guides.
- [x] Implement real React demos and searchable icon browser with copyable imports.
- [x] Add a rendered README preview and docs-site development/deployment instructions.
- [x] Build and check the site and package; exercise interactions and mobile layouts; review.
- [x] Push a feature branch and open a reviewable PR.

## Verification

The site builds as a static export at both the root and `/solite-icons/`. TypeScript, formatting, all six library tests and generated-asset checks pass. Root and docs dependency audits report zero vulnerabilities. Headless Chrome exercised real React hydration, icon/size/stroke/color/canvas changes, live snippets, all 229 gallery entries, search/categories, empty/reset states, clipboard copying, SVG paths, mobile overflow, and keyboard documentation search followed by base-path result navigation. A missing favicon was corrected. The final browser run reported no console/resource errors. A fresh review found no substantive issues. The README PNG is captured from actual React SSR markup, and an inline rendering was shown in the conversation.

Hosting is deliberately unconfigured: CI uploads a static-site artifact, and the docs explain root-domain and repository-subpath hosting.
