---
name: Solite Icons
description: Open-source outline icons, presented as a drawing specimen.
colors:
  primary: "#2563eb"
  primary-dark: "#82aaff"
  specimen: "#f1f6ff"
  ink: "#172133"
  muted-ink: "#596375"
  paper: "#ffffff"
  dark-paper: "#17181b"
  dark-panel: "#202226"
typography:
  display:
    fontFamily: "Geist Variable, Geist, Segoe UI, sans-serif"
    fontWeight: 600
    fontSize: "3.5rem"
    lineHeight: 1.06
    letterSpacing: "-0.035em"
  compact-display:
    fontSize: "2.5rem"
  specimen-heading:
    fontSize: "23px"
  compact-specimen-heading:
    fontSize: "21px"
  lead:
    fontSize: "17px"
  action:
    fontSize: "14px"
  code:
    fontSize: "13px"
  label:
    fontSize: "12px"
  caption:
    fontSize: "11px"
  body:
    fontFamily: "Geist Variable, Geist, Segoe UI, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.7
rounded:
  compact: "4px"
  field: "5px"
  secondary-control: "6px"
  tile: "7px"
  control: "8px"
  panel: "12px"
spacing:
  small: "8px"
  medium: "16px"
  large: "32px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "12px 16px"
---

# Solite Icons design system

## Overview

The collection is a drawing specimen. Real glyphs, their names, and their geometry carry the identity. Blue open geometry and an S mark give Solite a recognizable signature while the documentation remains a reading tool.

## Colors

Use the original blue accent for actions, selection, and icon specimens, with white reading space and neutral gray panels. Dark mode uses neutral charcoal surfaces and a light blue accent. Secondary copy must maintain 4.5:1 contrast. Selected controls need a border or shape cue as well as color.

## Typography

Geist carries both documentation and interface text. Display text is reserved for the introduction; guides keep a compact heading scale. Monospace is for commands, JSX, and geometry values. Reading measure stays close to 70 characters. On small screens the introduction heading uses 2.5rem.

## Layout

Retain the Fumadocs sidebar, search, table of contents, theme control, and mobile menu. Give the introduction breathing room and an immediate install action. Specimens show real icons in a regular grid; guides use a normal prose column. At narrow widths commands and controls wrap, and the icon detail view retains its existing stacked layout.

## Elevation & Depth

Use flat surfaces and one border for grouping. Avoid decorative shadows or glow. The drawings should remain the sharpest objects on the page.

## Shapes

The S mark uses rounded open geometry, with uniform strokes and generous negative space. Controls have modest rounding; panels have slightly larger corners. Library icons retain their original 24px grid and 1.75px stroke.

## Components

Primary buttons use blue with white text, or light blue with dark text in dark mode. Secondary buttons use the page background and a border. All controls have visible keyboard focus. The install command includes the existing clipboard control and its copied/error announcements. Icon tiles preserve names and pressed state. Navigation shows the decorative mark beside a text wordmark.

The playground canvas has its own light/dark control, independent of the page theme. Light canvas stays pale blue with dark text even when the surrounding documentation is dark.

## Do's and Don'ts

- Do show the actual package components, published version, and MIT license.
- Do provide React-first guidance and a plain SVG path.
- Do keep body copy and controls readable in both themes.
- Don't change the icon drawings to match a documentation rebrand.
- Don't add unverified adoption numbers or testimonials.
- Don't make decorative motion compete with reading.
