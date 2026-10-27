---
name: Solite Icons
description: Open-source outline icons, presented as a drawing specimen.
colors:
  primary: "#0b7668"
  primary-dark: "#8ee3c4"
  mint: "#edf7f3"
  ink: "#142923"
  muted-ink: "#53685f"
  paper: "#ffffff"
  dark-paper: "#101c18"
  dark-panel: "#172820"
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

The collection is a drawing specimen. Real glyphs, their names, and their geometry carry the identity. Teal open geometry and an S mark give Solite a recognizable signature while the documentation remains a reading tool.

## Colors

Use teal for actions and selection, mint for icon specimens, and white for reading. Dark mode uses green-black surfaces and a light mint accent. Secondary copy must maintain 4.5:1 contrast. Selected controls need a border or shape cue as well as color.

## Typography

Geist carries both documentation and interface text. Display text is reserved for the introduction; guides keep a compact heading scale. Monospace is for commands, JSX, and geometry values. Reading measure stays close to 70 characters. On small screens the introduction heading uses 2.5rem.

## Layout

Retain the Fumadocs sidebar, search, table of contents, theme control, and mobile menu. Give the introduction breathing room and an immediate install action. Specimens show real icons in a regular grid; guides use a normal prose column. At narrow widths commands and controls wrap, and the icon detail view retains its existing stacked layout.

## Elevation & Depth

Use flat surfaces and one border for grouping. Avoid decorative shadows or glow. The drawings should remain the sharpest objects on the page.

## Shapes

The S mark uses rounded open geometry, with uniform strokes and generous negative space. Controls have modest rounding; panels have slightly larger corners. Library icons retain their original 24px grid and 1.75px stroke.

## Components

Primary buttons use teal with white text, or mint with dark text in dark mode. Secondary buttons use the page background and a border. All controls have visible keyboard focus. The install command includes the existing clipboard control and its copied/error announcements. Icon tiles preserve names and pressed state. Navigation shows the decorative mark beside a text wordmark.

## Do's and Don'ts

- Do show the actual package components, published version, and MIT license.
- Do provide React-first guidance and a plain SVG path.
- Do keep body copy and controls readable in both themes.
- Don't change the icon drawings to match a documentation rebrand.
- Don't add unverified adoption numbers or testimonials.
- Don't make decorative motion compete with reading.
