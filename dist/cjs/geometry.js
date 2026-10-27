"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var geometry_exports = {};
__export(geometry_exports, {
  c: () => c,
  e: () => e,
  l: () => l,
  p: () => p,
  poly: () => poly,
  r: () => r
});
module.exports = __toCommonJS(geometry_exports);
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
