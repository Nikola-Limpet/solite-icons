import { c, e, l, p, r, type IconGroup } from "../geometry.js";

/** Original hospitality, stock, and fulfilment glyphs. */
export const operationIcons = {
  coffee: [
    p("M5 9h12v7a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4V9Zm12 1h1.5a3 3 0 0 1 0 6H17M3 22h16M8 3v3m5-3v3"),
  ],
  tea: [
    p("M4 11h13l-1 6a4 4 0 0 1-4 3H9a4 4 0 0 1-4-3l-1-6Zm13 1h1a3 3 0 0 1 0 6h-2M3 22h16"),
    p("M11 9c-4 0-5-3-4-6 4 0 6 2 4 6Zm0 0 2-3"),
  ],
  cup: [p("M6 7h12l-2 14H8L6 7ZM5 7h14M6 4h12M14 4l2-3"), l(8, 13, 16, 13)],
  restaurant: [p("M3 12h18M5 12a7 7 0 0 1 14 0M12 5V3M3 15h18"), p("M5 21v-3h14v3M9 18v3m6-3v3")],
  utensils: [p("M5 3v5a3 3 0 0 0 6 0V3M8 3v18M18 3c-2 3-3 6-3 9h4M19 3v18")],
  "chef-hat": [
    p("M7 17v4h10v-4M7 17l-1-5a4 4 0 1 1 2-7 4.5 4.5 0 0 1 8 0 4 4 0 1 1 2 7l-1 5H7Z"),
    p("M9 13v4m6-4v4"),
  ],
  "cooking-pot": [
    p(
      "M5 10h14v8a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3v-8ZM3 10h18M5 13H2m17 0h3M7 7h10l-2-3H9L7 7ZM12 4V2",
    ),
  ],
  bakery: [
    p("M8 4c1-2 3-2 4 0 1-2 3-2 4 0 3 1 4 4 2 6H6C4 8 5 5 8 4ZM6 10l1 11h10l1-11M10 14v3m4-3v3"),
  ],
  bread: [
    p("M7 7a5 5 0 0 1 10 0 4 4 0 0 1 2 7v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5a4 4 0 0 1 2-7Z"),
    p("m9 9 1 3m4-3 1 3M8 17h8"),
  ],
  bottle: [
    r(10, 2, 4, 3, 1),
    p("M10 5v3l-3 4v7a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-7l-3-4V5M7 13h10m-10 5h10"),
  ],
  retail: [p("M3 14h18v7H3v-7ZM5 14V9h6v5m-3-5V6h3M15 14V7h5v7M14 7h7M6 18h5")],
  box: [p("m5 8 7 3 7-3M5 8l-3 4 7 3 3-4 3 4 7-3-3-4M5 8l7-3 7 3M5 13.3V19l7 3 7-3v-5.7M12 15v7")],
  boxes: [
    p("m12 3 5 2.5v5L12 13l-5-2.5v-5L12 3Zm-5 2.5L12 8l5-2.5M12 8v5"),
    p(
      "m7 10.5-5 3v5L7 21l5-2.5v-5m-10 0L7 16l5-2.5M7 16v5m10-10.5 5 3v5L17 21l-5-2.5m0-5 5 2.5 5-2.5M17 16v5",
    ),
  ],
  warehouse: [p("M3 21V8l9-5 9 5v13M3 9h18M7 21V12h10v9M7 16h10M5 21h14")],
  inventory: [r(3, 3, 18, 18, 2), p("M3 9h18m-12 0v12M6 6h.01M13 13h5m-5 4h3M6 13h.01M6 17h.01")],
  truck: [p("M3 5h11v13H3V5Zm11 5h4l3 4v4h-7m0-4h7"), c(7, 19, 2), c(18, 19, 2)],
  delivery: [p("M3 7h10v11H6m7-8h5l3 4v4h-8M3 11h5m-6 4h4m7-1h8"), c(8, 19, 2), c(18, 19, 2)],
  pickup: [p("M4 13h16v8H4v-8ZM8 13V9m8 4V9M12 3v9m-4-5 4-4 4 4"), l(9, 17, 15, 17)],
  table: [e(12, 6, 9, 3), p("M3 6v3c0 1.7 4 3 9 3s9-1.3 9-3V6M12 12v8m-5 1 5-1 5 1")],
  seating: [r(6, 3, 12, 9, 2), p("M4 10v7h16v-7M6 17v4m12-4v4M4 14h16")],
} as const satisfies IconGroup;
