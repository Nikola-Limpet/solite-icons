import { c, e, l, p, r, type IconGroup } from "../geometry.js";

/** Original payment and time glyphs, drawn on the shared 24px outline grid. */
export const paymentIcons = {
  wallet: [
    p(
      "M19 7V5a2 2 0 0 0-2-2L5 5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2M3 7h16a2 2 0 0 1 2 2v2",
    ),
    r(14, 11, 7, 6, 1.5),
    l(17, 14, 17.01, 14),
  ],
  "credit-card": [r(2.5, 4.5, 19, 15, 2.5), l(2.5, 9, 21.5, 9), p("M6 15h4m3 0h2")],
  cash: [r(3, 5, 18, 12, 1.5), c(12, 11, 3), p("M6 8h1m10 6h1M5 20h14")],
  coins: [
    e(9, 6, 6, 3),
    p("M3 6v4c0 1.7 2.7 3 6 3h1M3 10v4c0 1.7 2.7 3 6 3h1M3 14v4c0 1.7 2.7 3 6 3h1"),
    e(16, 13, 5, 2.5),
    p("M11 13v5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-5"),
  ],
  bank: [p("m3 8 9-5 9 5H3Zm1 13h16M5 18h14"), p("M7 8v10m5-10v10m5-10v10")],
  "bank-transfer": [
    p("m3 7 7-4 7 4H3Zm2 0v8m5-8v8m5-8v3M3 18h8"),
    p("M14 14h7l-2-2m2 2-2 2m2 4h-7l2-2m-2 2 2 2"),
  ],
  dollar: [
    c(12, 12, 9),
    p(
      "M15 8.5c-.8-.7-1.8-1-3-1-2 0-3 .9-3 2.3 0 3.2 6 1.3 6 4.5 0 1.4-1 2.2-3 2.2-1.2 0-2.3-.4-3-1M12 5.5v13",
    ),
  ],
  riel: [r(2.5, 5, 19, 14, 2), p("M7 15h10m-8-3h6l-3-3-3 3Zm1 0v3m4-3v3M12 9V7M5.5 9v6m13-6v6")],
  "currency-exchange": [
    p("M4 8a9 9 0 0 1 15-2l1 2m0-5v5h-5M20 16A9 9 0 0 1 5 18l-1-2m0 5v-5h5"),
    p("M14 10h-3a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3m2-7v8"),
  ],
  "payment-check": [
    p("M11 19H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5M3 9h18M6 15h3"),
    p("m14 17 2.5 2.5L21 14"),
  ],
  "payment-pending": [
    p("M10 19H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4M3 9h18M6 15h3"),
    c(17, 17, 5),
    p("M17 14v3l2 1"),
  ],
  "payment-failed": [
    p("M11 19H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5M3 9h18M6 15h3"),
    p("m15 14 6 6m0-6-6 6"),
  ],
  invoice: [p("M6 3h9l4 4v14H5V4a1 1 0 0 1 1-1ZM15 3v5h4"), p("M8 11h3m-3 4h8m-8 3h5")],
  "billing-cycle": [
    p("M6 7V3h10v9l-2-1.5-3 1.5-3-1.5L6 12V7Zm3-1h4"),
    p("M3 14a9 9 0 0 0 16 5l2-3m-5 0h5v5M21 11a9 9 0 0 0-2-5"),
  ],
  subscription: [
    r(6, 7, 12, 10, 2),
    p("M9 12h6M3 9V6a3 3 0 0 1 3-3h12l-2-2m2 2-2 2M21 15v3a3 3 0 0 1-3 3H6l2 2m-2-2 2-2"),
  ],
  calendar: [r(3, 5, 18, 16, 2), p("M7 3v4m10-4v4M3 10h18m-14 4h2m4 0h2m-8 4h2m4 0h2")],
  "calendar-check": [
    p("M10 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4M7 3v4m10-4v4M3 10h18"),
    p("m12 17 3 3 6-6"),
  ],
  "calendar-clock": [
    p("M9 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3M7 3v4m10-4v4M3 10h13"),
    c(17, 17, 5),
    p("M17 14v3l2 1"),
  ],
  clock: [c(12, 12, 9), p("M12 6v6l4 2")],
  alarm: [c(12, 13, 7.5), p("M12 9v4l3 1M3 6l3-3m12 0 3 3M7 19l-2 2m12-2 2 2")],
} as const satisfies IconGroup;
