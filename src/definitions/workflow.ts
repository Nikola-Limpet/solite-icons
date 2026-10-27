import { p, r, c, l, type IconGroup } from "../geometry.js";

/** Original workflow glyphs for register, synchronization, and editing controls. */
export const workflowIcons = {
  "cash-drawer": [r(3, 5, 18, 15), r(5.5, 8, 13, 5.5, 1), p("M3 16h18M9 17.8h6"), c(12, 10.5, 0.6)],
  "cash-in": [
    r(3, 4, 15, 11, 1.5),
    c(10.5, 9.5, 2.5),
    p("M5 19h14a2 2 0 0 0 2-2v-5M17 7v6m-3-3 3 3 3-3"),
  ],
  "cash-out": [
    r(3, 4, 15, 11, 1.5),
    c(10.5, 9.5, 2.5),
    p("M5 19h14a2 2 0 0 0 2-2v-3M17 13V7m-3 3 3-3 3 3"),
  ],
  "cloud-sync": [
    p("M7 16H6a4 4 0 0 1-.6-8A6.5 6.5 0 0 1 18 7a4.5 4.5 0 0 1 2 8"),
    p("M10 15a4 4 0 0 1 7-2m0-3v3h-3M18 18a4 4 0 0 1-7 2m0 2v-2h3"),
  ],
  sunrise: [p("M3 17h18M5 21h14M7 17a5 5 0 0 1 10 0M12 3v4m-7 3 2 2m12-2-2 2"), p("m10 5 2-2 2 2")],
  "drag-handle": [
    c(9, 5, 0.65),
    c(15, 5, 0.65),
    c(9, 12, 0.65),
    c(15, 12, 0.65),
    c(9, 19, 0.65),
    c(15, 19, 0.65),
  ],
  "package-add": [
    p("m11 3 8 4.5v4M11 3 3 7.5v9L11 21l3-1.7M3 7.5l8 4.5 8-4.5M11 12v9M7 5.2l8 4.5"),
    p("M18 14v7m-3.5-3.5h7"),
  ],
  "archive-restore": [
    r(3, 3, 18, 4, 1),
    p("M5 7v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7M12 18v-7m-3 3 3-3 3 3"),
  ],
  palette: [
    p(
      "M12 3a9 9 0 1 0 0 18h1a2.3 2.3 0 0 0 1.8-3.7 1.5 1.5 0 0 1 1.2-2.4h1.5A3.5 3.5 0 0 0 21 11.4 8.5 8.5 0 0 0 12 3Z",
    ),
    c(7.5, 9, 0.7),
    c(12, 6.5, 0.7),
    c(16.5, 9, 0.7),
    l(6.5, 14, 7, 14),
  ],
} as const satisfies IconGroup;
