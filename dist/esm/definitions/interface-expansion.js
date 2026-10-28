import { p, r, c, l, poly } from "../geometry.js";
const panel = () => r(3, 3.5, 18, 17, 2);
const field = () => r(2.5, 6.5, 19, 11, 2.5);
const selection = () => r(3.5, 3.5, 17, 17, 2.5);
const interfaceExpansionIcons = {
  keyboard: [r(2.5, 5.5, 19, 13, 2.5), p("M6 9h1m4 0h1m4 0h2M6 12.5h1m4 0h1m4 0h2M8 16h8")],
  "keyboard-off": [
    p(
      "M8.5 5.5H19a2.5 2.5 0 0 1 2.5 2.5v7.5M15.5 18.5H5A2.5 2.5 0 0 1 2.5 16V8M12 9h1m4 0h1M6 12.5h1M8 16h3M3 3l18 18"
    )
  ],
  captions: [r(2.5, 5, 19, 14, 3), p("M10 9.5a3 3 0 1 0 0 5M18 9.5a3 3 0 1 0 0 5")],
  "captions-off": [
    p(
      "M8 5h10.5a3 3 0 0 1 3 3v7.5M16 19H5.5a3 3 0 0 1-3-3V8M6 10a3 3 0 0 0 2 5h1M15 9a3 3 0 0 1 3 .5M3 3l18 18"
    )
  ],
  ear: [
    p(
      "M5.5 9a7 7 0 1 1 12 5c-1.7 1.8-3.6 2.3-3.9 4.4-.5 3.5-5.8 3.8-6.7.6M9 9a3.5 3.5 0 0 1 7 0c0 2.6-3.7 2.5-3.7 5.2M9 10.5v2.3"
    )
  ],
  "ear-off": [
    p(
      "M8 3.6a7 7 0 0 1 11 7.6M5.5 8.5v1M17.6 15c-1.8 1.4-3.7 1.5-4 3.4-.5 3.5-5.8 3.8-6.7.6M11 6a3.5 3.5 0 0 1 5 3M9 11v1.8M3 3l18 18"
    )
  ],
  contrast: [c(12, 12, 9), l(12, 3, 12, 21), p("M12 7h5M12 12h7M12 17h5")],
  type: [p("M4 7V4.5h16V7M12 4.5v15M8 19.5h8")],
  "text-cursor": [p("M8 3.5h8M12 3.5v17M8 20.5h8M12 12h3")],
  "reading-guide": [p("M7 4.5h11M3.5 9v7H6m14.5-7v7H18M7.5 12.5h9M7 20h8")],
  speech: [p("M8 21v-4a6.7 6.7 0 1 1 7.5-6.7L17 13h-3v4H11M19.5 8.5l2-1M19.5 13.5l2 1")],
  focus: [p("M3 8V3h5m8 0h5v5M3 16v5h5m8 0h5v-5"), c(12, 12, 3)],
  "mouse-pointer": [p("M5 3.5 20 13l-6.3 1.5 3.2 6-3 1.5-3.2-6L6 20 5 3.5Z")],
  "keyboard-key": [r(4, 3.5, 16, 17, 3), p("M7 17h10M15.5 7.5v4H9m2.5-2.5L9 11.5l2.5 2.5")],
  "text-cursor-input": [
    p(
      "M13.5 6.5H5A2.5 2.5 0 0 0 2.5 9v6A2.5 2.5 0 0 0 5 17.5h8.5M16 3.5h5M18.5 3.5v17M16 20.5h5M6 12h5"
    )
  ],
  textarea: [r(3.5, 3.5, 17, 17, 2.5), p("M7.5 8h9M7.5 12h6M15.5 17.5l2-2")],
  select: [field(), l(6, 12, 10, 12), poly("15 10.5 17.5 13 20 10.5")],
  combobox: [field(), c(7, 11, 2), l(8.5, 12.5, 10.5, 14.5), poly("15 10.5 17.5 13 20 10.5")],
  "toggle-left": [r(2.5, 6.5, 19, 11, 5.5), c(8, 12, 2.5)],
  "toggle-right": [r(2.5, 6.5, 19, 11, 5.5), c(16, 12, 2.5)],
  "input-otp": [
    r(2, 6, 5, 12, 1.5),
    r(9.5, 6, 5, 12, 1.5),
    r(17, 6, 5, 12, 1.5),
    c(4.5, 12, 0.6),
    l(12, 9.5, 12, 14.5)
  ],
  "input-password": [field(), c(7, 12, 1), c(12, 12, 1), c(17, 12, 1)],
  asterisk: [p("M12 3.5v6m0 5v6M4.6 7.7l5.2 3m4.4 2.6 5.2 3M4.6 16.3l5.2-3m4.4-2.6 5.2-3")],
  form: [r(4, 2.5, 16, 19, 2), p("M7.5 6h3M7.5 9h9M7.5 13h3M7.5 16h9M13 19h3.5")],
  signature: [
    p(
      "M3 15.5c5-2 10-12 6.5-12C6 3.5 5 17 9 16c2-.5 3.8-5 4.5-5 .8 0-1 4 0 4s2.3-2.5 3.5-2c.8.4.8 2 4 1M4 20h16"
    )
  ],
  "input-number": [
    r(2.5, 4.5, 19, 15, 2.5),
    p("m6 9 2.5-1.5v9M6 16.5h5M14 4.5v15M14 12h7.5M16.5 8.5h3m-1.5-1.5v3M16.5 16h3")
  ],
  "input-clear": [field(), p("M6 12h4M13.5 6.5v11m3-7.5 3 3m0-3-3 3")],
  circle: [c(12, 12, 8.5)],
  square: [selection()],
  "circle-dot": [c(12, 12, 8.5), c(12, 12, 2.5)],
  "minus-square": [selection(), l(8, 12, 16, 12)],
  "plus-square": [selection(), p("M8 12h8M12 8v8")],
  "square-dashed": [
    p(
      "M7.5 3.5H5a1.5 1.5 0 0 0-1.5 1.5v2.5M11 3.5h2m3.5 0H19A1.5 1.5 0 0 1 20.5 5v2.5M20.5 11v2m0 3.5V19a1.5 1.5 0 0 1-1.5 1.5h-2.5M13 20.5h-2m-3.5 0H5A1.5 1.5 0 0 1 3.5 19v-2.5M3.5 13v-2"
    )
  ],
  lasso: [
    p(
      "M8 16.5C1 15 1.8 7.5 7.5 4.8 13 2 21 4.3 21 9.5c0 4.4-5.2 7.4-10.4 7.3M8.5 15.5c-4.7.5-2.4 4.9-.2 2.7 1.2-1.2-.2-3.7-1.4-4M7.5 19c1 3.3 5.5 3.4 7.5.8"
    )
  ],
  "lasso-polygon": [
    poly("7 4 18 4 21 13 12 18 4 13 7 4"),
    p("M4 13c-3 1-2.2 4.5 0 4 2.4-.5 1.6-4-.8-4.7M4 18c1 3 4.5 3.8 7 2.5")
  ],
  "mouse-pointer-click": [
    p("M7 8 20 15l-5.5 1 2.5 4.5-2.7 1.5-2.5-4.5L8 21 7 8ZM4 3l1.5 2M9 2v2m-7 5h2M13 4l-1.5 1.5")
  ],
  hand: [
    p(
      "M8 12V5a1.5 1.5 0 0 1 3 0v6M11 10V3.5a1.5 1.5 0 0 1 3 0V11m0-1V5a1.5 1.5 0 0 1 3 0v7m0-3.5a1.5 1.5 0 0 1 3 0V15a7 7 0 0 1-7 7h-1.5a5 5 0 0 1-4-2l-4-5.4c-1.4-1.9.9-3.7 2.4-2.2L8 15"
    )
  ],
  "table-row-add": [
    p(
      "M11 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 9h18M3 14h10M9 9v11M15 9v3M18 15v6m-3-3h6"
    )
  ],
  "table-row-remove": [
    p(
      "M11 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 9h18M3 14h10M9 9v11M15 9v3M15 18h6"
    )
  ],
  "table-column-add": [
    p(
      "M21 11V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7M9 4v16M15 4v8M3 10h18M3 15h9M18 15v6m-3-3h6"
    )
  ],
  "table-column-remove": [
    p(
      "M21 11V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7M9 4v16M15 4v8M3 10h18M3 15h9M15 18h6"
    )
  ],
  "table-row-select": [
    r(3, 3.5, 18, 17, 2),
    r(3, 9, 18, 6, 1),
    p("M9 3.5V9m0 6v5.5m6-17V9m0 6v5.5")
  ],
  "table-column-select": [
    r(3, 3.5, 18, 17, 2),
    r(9, 3.5, 6, 17, 1),
    p("M3 9h6m6 0h6M3 15h6m6 0h6")
  ],
  "table-cells-merge": [
    r(2.5, 5, 19, 14, 2),
    p("M12 5v3m0 8v3M5 12h5m-2-2 2 2-2 2m11-2h-5m2-2-2 2 2 2")
  ],
  "table-cells-split": [r(2.5, 5, 19, 14, 2), p("M12 5v14M9 12H5m2-2-2 2 2 2m8-2h4m-2-2 2 2-2 2")],
  "table-row-freeze": [
    p(
      "M15 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4M3 9h11M3 12h18M9 12v8M15 12v8M17.5 3h4l-1 4 1 1.5h-4l1-1.5-1-4ZM19.5 8.5V11"
    )
  ],
  "table-column-freeze": [
    r(2.5, 3.5, 19, 17, 2),
    p("M11 3.5v17m2.5-17v17M13.5 9h8m-8 5.5h8M4.5 6h4l-1 3.5 1 1.5h-4l1-1.5-1-3.5ZM6.5 11v3")
  ],
  "chevrons-up-down": [poly("7 8 12 3.5 17 8"), poly("7 16 12 20.5 17 16")],
  "sort-ascending": [p("M3.5 5h4M3.5 12h7M3.5 19h10M18 4v16m-3.5-3.5L18 20l3.5-3.5")],
  "sort-descending": [p("M3.5 5h10M3.5 12h7M3.5 19h4M18 4v16m-3.5-3.5L18 20l3.5-3.5")],
  "sort-alphabetical": [p("m3 10 3-7 3 7M4 8h4M3.5 14h5l-5 7h5M17.5 3.5v17M14 17l3.5 3.5L21 17")],
  "sort-numeric": [
    p(
      "m4 5 2.5-1.5V10m-2.5 0h5M8.5 17H5.8a2 2 0 0 1 0-4h.7a2 2 0 0 1 2 2v3.7A2.3 2.3 0 0 1 6.2 21H4M17.5 3.5v17M14 17l3.5 3.5L21 17"
    )
  ],
  list: [c(4.5, 5, 1), c(4.5, 12, 1), c(4.5, 19, 1), p("M9 5h11M9 12h8M9 19h10")],
  "list-ordered": [
    p(
      "m3 4 1.5-1V7m-1.5 3c0-1 3-1.5 3 .3 0 1.1-3 1.8-3 3.2h3m-3 3.7c1.5-1 3 .1 2 1.3 1.6 1.1.1 3-2 2M10 5h10M10 12h10M10 19h10"
    )
  ],
  "list-checks": [p("m3 7 2.5 2.5 4-4M13 7h8M3 17l2.5 2.5 4-4M13 17h8")],
  "list-tree": [p("M4 3.5v14h4M4 8h4M11 4h10M11 8h7M11 17.5h10M11 21h7")],
  "chevrons-left": [poly("10.5 5 3.5 12 10.5 19"), poly("20 5 13 12 20 19")],
  "chevrons-right": [poly("4 5 11 12 4 19"), poly("13.5 5 20.5 12 13.5 19")],
  "arrow-left-to-line": [p("M3.5 4v16M21 12H8m5-5-5 5 5 5")],
  "arrow-right-to-line": [p("M20.5 4v16M3 12h13m-5-5 5 5-5 5")],
  "panel-right": [panel(), l(15.5, 3.5, 15.5, 20.5), l(18.5, 7.5, 18.5, 10.5)],
  "panel-top": [panel(), l(3, 9, 21, 9), l(7.5, 6.25, 11, 6.25)],
  "panel-bottom": [panel(), l(3, 15, 21, 15), l(7.5, 17.75, 11, 17.75)],
  "panel-left-open": [panel(), l(8.5, 3.5, 8.5, 20.5), poly("13 8.5 16.5 12 13 15.5")],
  "panel-left-close": [panel(), l(8.5, 3.5, 8.5, 20.5), poly("17 8.5 13.5 12 17 15.5")],
  "panel-right-open": [panel(), l(15.5, 3.5, 15.5, 20.5), poly("11 8.5 7.5 12 11 15.5")],
  "panel-right-close": [panel(), l(15.5, 3.5, 15.5, 20.5), poly("7 8.5 10.5 12 7 15.5")],
  "panel-top-open": [panel(), l(3, 9, 21, 9), poly("8.5 13 12 16.5 15.5 13")],
  "panel-top-close": [panel(), l(3, 9, 21, 9), poly("8.5 17 12 13.5 15.5 17")],
  "panel-bottom-open": [panel(), l(3, 15, 21, 15), poly("8.5 11 12 7.5 15.5 11")],
  "panel-bottom-close": [panel(), l(3, 15, 21, 15), poly("8.5 7 12 10.5 15.5 7")],
  "panel-resize": [
    panel(),
    p("M12 3.5V7m0 10v3.5M6.5 12h11M9 9.5 6.5 12 9 14.5m6-5 2.5 2.5-2.5 2.5")
  ],
  "arrow-up-left": [p("m5 15V5h10M5 5l15 15")],
  "arrow-up-right": [p("M9 5h10v10M19 5 4 20")],
  "arrow-down-left": [p("M5 9v10h10M5 19 20 4")],
  "arrow-down-right": [p("M9 19h10V9M19 19 4 4")],
  "arrow-left-right": [p("M20.5 7H3.5m4-4-4 4 4 4M3.5 17h17m-4-4 4 4-4 4")],
  "arrow-up-to-line": [p("M4 3.5h16M12 21V8m-5 5 5-5 5 5")],
  "arrow-down-to-line": [p("M4 20.5h16M12 3v13m-5-5 5 5 5-5")],
  "corner-down-left": [p("M19 3.5V13a3 3 0 0 1-3 3H4m5-5-5 5 5 5")],
  "corner-down-right": [p("M5 3.5V13a3 3 0 0 0 3 3h12m-5-5 5 5-5 5")],
  "corner-up-left": [p("M19 20.5V11a3 3 0 0 0-3-3H4m5-5L4 8l5 5")],
  "corner-up-right": [p("M5 20.5V11a3 3 0 0 1 3-3h12m-5-5 5 5-5 5")],
  "corner-left-up": [p("M20.5 19H11a3 3 0 0 1-3-3V4M3 9l5-5 5 5")],
  "corner-left-down": [p("M20.5 5H11a3 3 0 0 0-3 3v12M3 15l5 5 5-5")],
  "corner-right-up": [p("M3.5 19H13a3 3 0 0 0 3-3V4m-5 5 5-5 5 5")],
  "corner-right-down": [p("M3.5 5H13a3 3 0 0 1 3 3v12m-5-5 5 5 5-5")],
  "move-horizontal": [p("M3 12h18M8 7l-5 5 5 5m8-10 5 5-5 5")],
  "move-vertical": [p("M12 3v18M7 8l5-5 5 5M7 16l5 5 5-5")],
  layers: [poly("12 2.5 22 8 12 13.5 2 8 12 2.5"), p("m3 12 9 5 9-5M3 16.5l9 5 9-5")],
  "columns-2": [panel(), l(12, 3.5, 12, 20.5)],
  "columns-3": [panel(), p("M9 3.5v17m6-17v17")],
  "rows-2": [panel(), l(3, 12, 21, 12)],
  "rows-3": [panel(), p("M3 9h18M3 15h18")],
  "panels-left-right": [panel(), p("M7.5 3.5v17m9-17v17")],
  "layout-header-footer": [panel(), p("M3 8h18M3 16h18")],
  "layout-centered": [panel(), r(8, 7, 8, 10, 1)],
  "layout-overlay": [
    p("M21 8V5.5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V16"),
    r(7, 8, 15, 8, 1.5)
  ],
  "layout-tabs": [
    p(
      "M3 9V5a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 11 5v1h7a2 2 0 0 1 2 2v1h1v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9ZM6 9h3m5 0h3"
    )
  ],
  "layout-responsive": [
    p("M13.5 19.5H4a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2V7M6 8v7m4-7v7"),
    r(16, 10, 6, 11, 1.5),
    l(19, 13.5, 19, 17.5)
  ]
};
export {
  interfaceExpansionIcons
};
