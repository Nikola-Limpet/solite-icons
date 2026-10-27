const p = (d) => ["path", { d }];
const r = (x, y, width, height, rx = 2) => [
  "rect",
  { x, y, width, height, rx }
];
const c = (cx, cy, radius) => [
  "circle",
  { cx, cy, r: radius }
];
const l = (x1, y1, x2, y2) => [
  "line",
  { x1, y1, x2, y2 }
];
const e = (cx, cy, rx, ry) => [
  "ellipse",
  { cx, cy, rx, ry }
];
const poly = (points) => ["polyline", { points }];
export {
  c,
  e,
  l,
  p,
  poly,
  r
};
