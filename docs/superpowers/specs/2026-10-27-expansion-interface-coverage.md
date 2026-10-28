# Accessibility and interface icon coverage

Status: proposed coverage for maintainer approval. This document defines 100 new canonical names for the interface batch. It does not approve implementation.

The proposal follows the expansion design and the current definitions imported by `src/data.ts`. Each concept needs an original drawing on Solite's 24 by 24 outline grid, with 1.75 default stroke, rounded caps and joins, no fill, and `currentColor`. Small letters and numerals are editable paths, never SVG text or a font dependency. Drawing descriptions establish the distinguishing idea; builders still need to settle coordinates and review every result at 16, 20, and 24 pixels.

The batch favors familiar controls with distinct behavior over decorative variants. It includes the requested `type`, `list`, and `list-ordered` symbols for interface preferences and navigation. Text-formatting commands, developer tooling, weather, nature, health, and transport belong to the other batches. The existing `sort` drawing already covers `arrow-up-down`, so that requested search term is an alias rather than a new canonical icon.

## Proposed canonical icons

| Canonical name         | Category                  | Use case                                                       | Original drawing concept                                                                           |
| ---------------------- | ------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------- |
| `keyboard`             | Accessibility preferences | Keyboard shortcuts and keyboard navigation settings.           | Wide keybed with staggered short key strokes and a long open spacebar.                             |
| `keyboard-off`         | Accessibility preferences | Disable the on-screen keyboard or keyboard shortcuts.          | Interrupted keybed and a clear diagonal slash, retaining a readable spacebar.                      |
| `captions`             | Accessibility preferences | Enable captions for spoken media.                              | Wide caption frame containing two open, hand-drawn C loops.                                        |
| `captions-off`         | Accessibility preferences | Show that captions are disabled or unavailable.                | Caption frame and separated C fragments crossed by a diagonal slash.                               |
| `ear`                  | Accessibility preferences | Hearing preferences and hearing assistance.                    | Open outer ear curve with a nested inner fold and a short lower lobe.                              |
| `ear-off`              | Accessibility preferences | Unavailable hearing assistance or disabled listening.          | Interrupted ear outline and inner fold with a diagonal slash.                                      |
| `contrast`             | Accessibility preferences | Contrast preferences and high-contrast mode.                   | Circle bisected vertically, with three short hatch strokes confined to one half.                   |
| `type`                 | Accessibility preferences | Font and readable-text preferences.                            | Broad uppercase T with a centered stem and short baseline feet.                                    |
| `text-cursor`          | Accessibility preferences | Caret visibility, thickness, and text navigation.              | Tall I-beam with wide caps and a short center registration tick.                                   |
| `reading-guide`        | Accessibility preferences | Enable a guide that tracks the current reading line.           | Three unequal text strokes with open brackets enclosing the middle line.                           |
| `speech`               | Accessibility preferences | Read-aloud and spoken-feedback preferences.                    | Simple side-profile head with two short sound strokes leaving the mouth.                           |
| `focus`                | Accessibility preferences | Focus indicator and focus-following preferences.               | Four open corner brackets enclosing a small central outlined circle.                               |
| `mouse-pointer`        | Accessibility preferences | Cursor visibility and pointer preferences.                     | Asymmetric diagonal arrow cursor with a deep notch and short lower tail.                           |
| `keyboard-key`         | Accessibility preferences | Display a physical key or remap a shortcut.                    | Single broad keycap with a shallow lower inset and a small return hook.                            |
| `text-cursor-input`    | Forms                     | Enter or edit a single line of text.                           | Wide rounded input field interrupted at the right by a tall I-beam caret.                          |
| `textarea`             | Forms                     | Enter a multiline response.                                    | Tall rounded field with two unequal lines and a small lower-right resize notch.                    |
| `select`               | Forms                     | Choose one option from a dropdown.                             | Wide field with a short value stroke and a downward chevron at its trailing edge.                  |
| `combobox`             | Forms                     | Search a list of selectable options.                           | Wide input with a small magnifier at the leading edge and a trailing dropdown chevron.             |
| `toggle-left`          | Forms                     | Show the off state of a switch.                                | Horizontal capsule with an outlined knob seated at the left and open space at the right.           |
| `toggle-right`         | Forms                     | Show the on state of a switch.                                 | Horizontal capsule with an outlined knob seated at the right and open space at the left.           |
| `input-otp`            | Forms                     | Enter a short verification code.                               | Three separate narrow key cells, with a center caret and a small dot in the first cell.            |
| `input-password`       | Forms                     | Identify a masked password field.                              | Wide rounded input containing three evenly spaced hollow password dots.                            |
| `asterisk`             | Forms                     | Mark required fields.                                          | Six evenly angled spokes meeting at an open, uncluttered center.                                   |
| `form`                 | Forms                     | Create or open a structured form.                              | Plain rectangular form with two label-and-field pairs and a short bottom submit box.               |
| `signature`            | Forms                     | Sign a form or add a saved signature.                          | Single flowing signature stroke with one loop and a detached horizontal signing line.              |
| `input-number`         | Forms                     | Enter a numeric quantity with step controls.                   | Wide field with a simple path-drawn 1 and a divided trailing plus/minus stepper.                   |
| `input-clear`          | Forms                     | Clear the current text field.                                  | Wide field with a short value stroke and a small trailing X inside a detached end segment.         |
| `circle`               | Selection states          | Empty radio option, circular shape, or unselected step.        | Single centered circular outline with no internal mark.                                            |
| `square`               | Selection states          | Empty checkbox or basic square shape.                          | Single centered square outline with restrained corner rounding and no internal mark.               |
| `circle-dot`           | Selection states          | Selected radio option or active step.                          | Large circular outline enclosing a small centered hollow dot.                                      |
| `minus-square`         | Selection states          | Indeterminate checkbox state.                                  | Square outline containing one short centered horizontal stroke.                                    |
| `plus-square`          | Selection states          | Add an item within a collection or expand a tree node.         | Square outline containing a compact plus with equal arms.                                          |
| `square-dashed`        | Selection states          | Rectangular marquee selection.                                 | Square drawn as separated corner strokes and short mid-edge dashes.                                |
| `lasso`                | Selection states          | Select an irregular region freely.                             | Uneven closed loop with a small tied crossing and a loose curved tail.                             |
| `lasso-polygon`        | Selection states          | Select a region with straight-edge segments.                   | Angular five-sided selection loop with a tied corner and a short trailing handle.                  |
| `mouse-pointer-click`  | Selection states          | Click to select or inspect an item.                            | Short diagonal cursor with three detached click rays above its tip.                                |
| `hand`                 | Selection states          | Pan a canvas or drag the view.                                 | Upright open palm with a clear thumb and four separated rounded fingertips.                        |
| `table-row-add`        | Tables                    | Add a data-table row.                                          | Compact grid with an open lower row and a plus beside the row baseline.                            |
| `table-row-remove`     | Tables                    | Remove a data-table row.                                       | Compact grid with an open lower row and a minus beside the row baseline.                           |
| `table-column-add`     | Tables                    | Add a data-table column.                                       | Compact grid with an open trailing column and a plus below that column.                            |
| `table-column-remove`  | Tables                    | Remove a data-table column.                                    | Compact grid with an open trailing column and a minus below that column.                           |
| `table-row-select`     | Tables                    | Select an entire row.                                          | Three-row table with a second inset outline enclosing the middle horizontal band.                  |
| `table-column-select`  | Tables                    | Select an entire column.                                       | Three-column table with a second inset outline enclosing the middle vertical band.                 |
| `table-cells-merge`    | Tables                    | Merge neighboring cells.                                       | Two adjacent cells with a broken center divider and short arrows meeting across the gap.           |
| `table-cells-split`    | Tables                    | Divide one cell into two.                                      | One broad cell with a new center divider and short arrows pointing apart.                          |
| `table-row-freeze`     | Tables                    | Keep the header row visible while scrolling.                   | Sparse table with a double rule below its top band and a small pin on that fixed band.             |
| `table-column-freeze`  | Tables                    | Keep a leading column visible while scrolling.                 | Sparse table with a double rule after its leading band and a small pin on that fixed band.         |
| `chevrons-up-down`     | Lists and sorting         | Indicate a sortable control or vertically expandable selector. | Two open chevrons stacked with their tips pointing away from the center.                           |
| `sort-ascending`       | Lists and sorting         | Sort values in increasing order.                               | Three lines growing longer downward beside a slim downward arrow.                                  |
| `sort-descending`      | Lists and sorting         | Sort values in decreasing order.                               | Three lines growing shorter downward beside a slim downward arrow.                                 |
| `sort-alphabetical`    | Lists and sorting         | Sort text alphabetically.                                      | Small path-drawn A above Z beside a continuous downward arrow.                                     |
| `sort-numeric`         | Lists and sorting         | Sort numeric values by magnitude.                              | Small path-drawn 1 above 9 beside a continuous downward arrow.                                     |
| `list`                 | Lists and sorting         | Choose a bulleted list view or open a list of items.           | Three short open circular bullets beside three unequal horizontal lines.                           |
| `list-ordered`         | Lists and sorting         | Show numbered steps or an ordered list view.                   | Path-drawn 1, 2, and 3 beside three horizontal item lines.                                         |
| `list-checks`          | Lists and sorting         | Show a task list with completion marks.                        | Two compact checkmarks beside two aligned horizontal item lines.                                   |
| `list-tree`            | Lists and sorting         | Show nested navigation or a hierarchical list.                 | Short vertical guide with two right-angle branches leading to unequal item lines.                  |
| `chevrons-left`        | Pagination                | Move back several items or to the previous page group.         | Two separate open left-facing chevrons with matched angles and spacing.                            |
| `chevrons-right`       | Pagination                | Move ahead several items or to the next page group.            | Two separate open right-facing chevrons with matched angles and spacing.                           |
| `arrow-left-to-line`   | Pagination                | Jump to the first page or beginning of a range.                | Leftward horizontal arrow ending just before a separate vertical stop line.                        |
| `arrow-right-to-line`  | Pagination                | Jump to the last page or end of a range.                       | Rightward horizontal arrow ending just before a separate vertical stop line.                       |
| `panel-right`          | Panels                    | Choose a workspace with a right-side panel.                    | Screen frame split into a narrow right pane and a broad left pane, with a short right-pane detail. |
| `panel-top`            | Panels                    | Choose a workspace with a top panel.                           | Screen frame with a shallow full-width top pane and a short horizontal detail in that pane.        |
| `panel-bottom`         | Panels                    | Choose a workspace with a bottom panel.                        | Screen frame with a shallow full-width bottom pane and a short horizontal detail in that pane.     |
| `panel-left-open`      | Panels                    | Reveal the left-side drawer.                                   | Left-partitioned frame with a right-facing chevron moving away from the left pane.                 |
| `panel-left-close`     | Panels                    | Hide the left-side drawer.                                     | Left-partitioned frame with a left-facing chevron moving toward the left pane.                     |
| `panel-right-open`     | Panels                    | Reveal the right-side drawer.                                  | Right-partitioned frame with a left-facing chevron moving away from the right pane.                |
| `panel-right-close`    | Panels                    | Hide the right-side drawer.                                    | Right-partitioned frame with a right-facing chevron moving toward the right pane.                  |
| `panel-top-open`       | Panels                    | Reveal a top drawer or inspector.                              | Top-partitioned frame with a downward chevron moving away from the top band.                       |
| `panel-top-close`      | Panels                    | Hide a top drawer or inspector.                                | Top-partitioned frame with an upward chevron moving toward the top band.                           |
| `panel-bottom-open`    | Panels                    | Reveal a bottom drawer or inspector.                           | Bottom-partitioned frame with an upward chevron moving away from the bottom band.                  |
| `panel-bottom-close`   | Panels                    | Hide a bottom drawer or inspector.                             | Bottom-partitioned frame with a downward chevron moving toward the bottom band.                    |
| `panel-resize`         | Panels                    | Adjust a split pane's width.                                   | Screen frame with a central divider interrupted by a small horizontal two-headed resize arrow.     |
| `arrow-up-left`        | Directional arrows        | Move or navigate diagonally toward the upper left.             | Diagonal shaft with an open upper-left arrowhead and a long exposed lower-right tail.              |
| `arrow-up-right`       | Directional arrows        | Move or navigate diagonally toward the upper right.            | Diagonal shaft with an open upper-right arrowhead and a long exposed lower-left tail.              |
| `arrow-down-left`      | Directional arrows        | Move or navigate diagonally toward the lower left.             | Diagonal shaft with an open lower-left arrowhead and a long exposed upper-right tail.              |
| `arrow-down-right`     | Directional arrows        | Move or navigate diagonally toward the lower right.            | Diagonal shaft with an open lower-right arrowhead and a long exposed upper-left tail.              |
| `arrow-left-right`     | Directional arrows        | Exchange two items or move in opposite horizontal directions.  | Two parallel horizontal shafts, upper arrow facing left and lower arrow facing right.              |
| `arrow-up-to-line`     | Directional arrows        | Jump to the top edge or align an item against it.              | Upward vertical arrow stopping below a separate horizontal top rule.                               |
| `arrow-down-to-line`   | Directional arrows        | Jump to the bottom edge or align an item against it.           | Downward vertical arrow stopping above a separate horizontal bottom rule.                          |
| `corner-down-left`     | Directional arrows        | Continue down and then turn left.                              | Tall descending shaft with one rounded corner and a left-facing terminal arrowhead.                |
| `corner-down-right`    | Directional arrows        | Continue down and then turn right.                             | Tall descending shaft with one rounded corner and a right-facing terminal arrowhead.               |
| `corner-up-left`       | Directional arrows        | Continue up and then turn left.                                | Tall ascending shaft with one rounded corner and a left-facing terminal arrowhead.                 |
| `corner-up-right`      | Directional arrows        | Continue up and then turn right.                               | Tall ascending shaft with one rounded corner and a right-facing terminal arrowhead.                |
| `corner-left-up`       | Directional arrows        | Continue left and then turn up.                                | Long leftward shaft with one rounded corner and an upward terminal arrowhead.                      |
| `corner-left-down`     | Directional arrows        | Continue left and then turn down.                              | Long leftward shaft with one rounded corner and a downward terminal arrowhead.                     |
| `corner-right-up`      | Directional arrows        | Continue right and then turn up.                               | Long rightward shaft with one rounded corner and an upward terminal arrowhead.                     |
| `corner-right-down`    | Directional arrows        | Continue right and then turn down.                             | Long rightward shaft with one rounded corner and a downward terminal arrowhead.                    |
| `move-horizontal`      | Directional arrows        | Restrict dragging or resizing to the horizontal axis.          | Single horizontal shaft with open arrowheads at both ends.                                         |
| `move-vertical`        | Directional arrows        | Restrict dragging or resizing to the vertical axis.            | Single vertical shaft with open arrowheads at both ends.                                           |
| `layers`               | Layouts                   | Manage stacked visual layers.                                  | Three broad diamond planes, with the lower two shown as separated open lower edges.                |
| `columns-2`            | Layouts                   | Split content into two equally sized columns.                  | Screen frame with one centered full-height vertical divider.                                       |
| `columns-3`            | Layouts                   | Split content into three equally sized columns.                | Screen frame with two evenly spaced full-height vertical dividers.                                 |
| `rows-2`               | Layouts                   | Split content into two equally sized rows.                     | Screen frame with one centered full-width horizontal divider.                                      |
| `rows-3`               | Layouts                   | Split content into three equally sized rows.                   | Screen frame with two evenly spaced full-width horizontal dividers.                                |
| `panels-left-right`    | Layouts                   | Open side panels on both edges of a workspace.                 | Screen frame with two narrow edge panes and a broad uninterrupted center pane.                     |
| `layout-header-footer` | Layouts                   | Choose content framed by a header and footer.                  | Screen frame with shallow full-width bands at both the top and bottom.                             |
| `layout-centered`      | Layouts                   | Choose a centered reading-width content area.                  | Wide screen frame with a narrow centered content rectangle and equal empty side gutters.           |
| `layout-overlay`       | Layouts                   | Choose a modal or floating overlay arrangement.                | Broad background frame interrupted by a smaller centered floating dialog rectangle.                |
| `layout-tabs`          | Layouts                   | Choose a tabbed workspace.                                     | Screen body with two stepped tab outlines along the top and one short active-tab underline.        |
| `layout-responsive`    | Layouts                   | Preview a layout across wide and narrow widths.                | Wide frame with two content columns beside a separate narrow frame containing one content column.  |

## Machine-readable names

The array order matches the table. These are proposed canonical names only, with no aliases mixed into the count.

```json
[
  "keyboard",
  "keyboard-off",
  "captions",
  "captions-off",
  "ear",
  "ear-off",
  "contrast",
  "type",
  "text-cursor",
  "reading-guide",
  "speech",
  "focus",
  "mouse-pointer",
  "keyboard-key",
  "text-cursor-input",
  "textarea",
  "select",
  "combobox",
  "toggle-left",
  "toggle-right",
  "input-otp",
  "input-password",
  "asterisk",
  "form",
  "signature",
  "input-number",
  "input-clear",
  "circle",
  "square",
  "circle-dot",
  "minus-square",
  "plus-square",
  "square-dashed",
  "lasso",
  "lasso-polygon",
  "mouse-pointer-click",
  "hand",
  "table-row-add",
  "table-row-remove",
  "table-column-add",
  "table-column-remove",
  "table-row-select",
  "table-column-select",
  "table-cells-merge",
  "table-cells-split",
  "table-row-freeze",
  "table-column-freeze",
  "chevrons-up-down",
  "sort-ascending",
  "sort-descending",
  "sort-alphabetical",
  "sort-numeric",
  "list",
  "list-ordered",
  "list-checks",
  "list-tree",
  "chevrons-left",
  "chevrons-right",
  "arrow-left-to-line",
  "arrow-right-to-line",
  "panel-right",
  "panel-top",
  "panel-bottom",
  "panel-left-open",
  "panel-left-close",
  "panel-right-open",
  "panel-right-close",
  "panel-top-open",
  "panel-top-close",
  "panel-bottom-open",
  "panel-bottom-close",
  "panel-resize",
  "arrow-up-left",
  "arrow-up-right",
  "arrow-down-left",
  "arrow-down-right",
  "arrow-left-right",
  "arrow-up-to-line",
  "arrow-down-to-line",
  "corner-down-left",
  "corner-down-right",
  "corner-up-left",
  "corner-up-right",
  "corner-left-up",
  "corner-left-down",
  "corner-right-up",
  "corner-right-down",
  "move-horizontal",
  "move-vertical",
  "layers",
  "columns-2",
  "columns-3",
  "rows-2",
  "rows-3",
  "panels-left-right",
  "layout-header-footer",
  "layout-centered",
  "layout-overlay",
  "layout-tabs",
  "layout-responsive"
]
```

## Recommended aliases for existing icons

These recommendations add search vocabulary to existing drawings. None adds a component, changes an existing canonical name, or counts toward the 100.

- `arrow-up-down`, `arrows-up-down`, `vertical-swap` -> `sort`. Its existing drawing already has opposing vertical shafts and arrowheads.
- `panel-left`, `layout-sidebar-left`, `sidebar-left` -> `sidebar`. Its narrow left pane is already explicit.
- `layout-template`, `page-layout` -> `layout`. Its header and split content region already represent a page arrangement.
- `layout-dashboard`, `layout-masonry` -> `dashboard`. Its four unequal blocks already cover dashboard and masonry arrangement searches.
- `layout-grid`, `grid-2x2`, `apps-grid` -> `grid`. A second tiled-grid drawing would repeat existing coverage.
- `data-table`, `table-grid`, `spreadsheet-grid` -> `table-data`. The canonical `table` name remains the existing hospitality table.
- `checkbox-checked`, `square-check` -> `check-square`.
- `checkbox-rejected`, `square-x`, `deselect` -> `x-square`.
- `radio-accepted`, `circle-check` -> `check-circle`.
- `circle-x`, `clear-circle` -> `x-circle`.
- `circle-minus`, `remove-circle` -> `minus-circle`.
- `circle-plus`, `add-circle` -> `plus-circle`.
- `ellipsis`, `ellipsis-horizontal`, `more` -> `more-horizontal`.
- `ellipsis-vertical`, `kebab-menu` -> `more-vertical`.
- `grip`, `grip-vertical`, `reorder` -> `drag-handle`.
- `hamburger`, `navigation-menu` -> `menu`. Plain menu strokes do not replace the proposed bullet and numbered list drawings.
- `preferences`, `adjustments`, `range-controls` -> `sliders`.
- `gear`, `configuration` -> `settings`.
- `magnifier`, `find` -> `search`.
- `close`, `dismiss`, `clear` -> `x`.
- `delete`, `bin` -> `trash`.
- `visibility`, `show-password` -> `eye`.
- `visibility-off`, `hide-password` -> `eye-off`.
- `accessibility-settings`, `universal-access` -> `accessibility`.
- `translation`, `locale` -> `languages`.
- `fullscreen`, `maximize` -> `expand`.
- `exit-fullscreen`, `minimize` -> `collapse`.
- `popout`, `open-in-new-window` -> `external-link`.
- `spinner`, `busy` -> `loading`.
- `dark-mode` -> `moon`, and `light-mode` -> `sun`.

## Review notes

`square` is the plain shape and unchecked-selection drawing. A media stop search should reuse a stop-related drawing from the application batch rather than create another plain square. `arrow-left-right` has two parallel opposing shafts for exchange; `move-horizontal` has one double-ended shaft for constrained movement. Their difference must remain visible at 16 pixels.

The eight corner arrows encode different entry and exit directions for spatial navigation. They use angular routes rather than the existing curved `undo` and `redo` silhouettes. The panel action icons encode both the relevant edge and the direction of opening or closing. Their short chevrons should remain inside the large content area, away from the pane divider.

Table freeze icons, the combined input controls, `hand`, and `layout-responsive` need particular small-size review. Remove incidental detail before reducing their internal spacing. If a concept cannot stay legible at 16 pixels, replace the proposed concept with another useful interface gap before fixing the batch total for implementation.

Validation: 100 table rows, 100 unique names, table and JSON order match, and no canonical names collide with the 253 current names in `src/definitions`. This checks naming and document structure only; drawing quality remains an implementation review requirement.
