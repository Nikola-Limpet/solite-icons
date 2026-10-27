import { p, r, c, l, type IconGroup } from "../geometry.js";

/** Original communication and media glyphs on the shared rounded outline grid. */
export const mediaIcons = {
  share: [c(5, 12, 2.5), c(18, 5, 2.5), c(18, 19, 2.5), p("m7.2 10.8 8.6-4.6m-8.6 7 8.6 4.6")],
  volume: [
    p("M4.5 9H8l5-5v16l-5-5H4.5A1.5 1.5 0 0 1 3 13.5v-3A1.5 1.5 0 0 1 4.5 9Z"),
    p("M16.5 8a6 6 0 0 1 0 8m2.5-11a10 10 0 0 1 0 14"),
  ],
  "volume-off": [
    p("M6 9H4.5A1.5 1.5 0 0 0 3 10.5v3A1.5 1.5 0 0 0 4.5 15H8l5 5v-6M10 7l3-3v4"),
    l(3, 3, 21, 21),
  ],
  microphone: [r(8.5, 3, 7, 13, 3.5), p("M5.5 11.5v1a6.5 6.5 0 0 0 13 0v-1M12 19v2M8.5 21h7")],
  "microphone-off": [
    p(
      "M8.5 4.5A3.5 3.5 0 0 1 15.5 6v4M8.5 9v3.5a3.5 3.5 0 0 0 5.5 2.9M5.5 11.5v1a6.5 6.5 0 0 0 11.1 4.6m1.9-5.6v1a6.5 6.5 0 0 1-.1 1M12 19v2M8.5 21h7",
    ),
    l(3, 3, 21, 21),
  ],
  video: [r(3, 6, 13, 12, 2.5), p("m16 10 5-3v10l-5-3")],
  "video-off": [
    p(
      "M8 6h5.5A2.5 2.5 0 0 1 16 8.5V10l5-3v10l-3-1.8M3.5 7A2.5 2.5 0 0 0 3 8.5v7A2.5 2.5 0 0 0 5.5 18H14",
    ),
    l(3, 3, 21, 21),
  ],
} as const satisfies IconGroup;
