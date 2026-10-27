/** Original Solite icons geometry. All icons share a 24×24 outline drawing grid. */
export type IconNode = readonly [
  tag: "path" | "rect" | "circle" | "ellipse" | "line" | "polyline" | "polygon",
  attributes: Readonly<Record<string, string | number>>,
];
export type IconDefinition = readonly IconNode[];
export type IconGroup = Readonly<Record<string, IconDefinition>>;
export const p = (d: string): IconNode => ["path", { d }];
export const r = (x: number, y: number, width: number, height: number, rx = 2): IconNode => [
  "rect",
  { x, y, width, height, rx },
];
export const c = (cx: number, cy: number, radius: number): IconNode => [
  "circle",
  { cx, cy, r: radius },
];
export const l = (x1: number, y1: number, x2: number, y2: number): IconNode => [
  "line",
  { x1, y1, x2, y2 },
];
export const e = (cx: number, cy: number, rx: number, ry: number): IconNode => [
  "ellipse",
  { cx, cy, rx, ry },
];
export const poly = (points: string): IconNode => ["polyline", { points }];
