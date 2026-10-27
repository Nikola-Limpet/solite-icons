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
var navigation_exports = {};
__export(navigation_exports, {
  navigationIcons: () => navigationIcons
});
module.exports = __toCommonJS(navigation_exports);
var import_geometry = require("../geometry.js");
const navigationIcons = {
  home: [(0, import_geometry.poly)("2.75,11 12,3 21.25,11"), (0, import_geometry.p)("M5 9.1V21H9.5V14H14.5V21H19V9.1")],
  dashboard: [(0, import_geometry.r)(3, 3, 7, 8), (0, import_geometry.r)(14, 3, 7, 4.5), (0, import_geometry.r)(3, 15, 7, 6), (0, import_geometry.r)(14, 11.5, 7, 9.5)],
  shop: [
    (0, import_geometry.p)(
      "M3 9L5 3.5H19L21 9V10.5C21 13 17.4 13 17.4 10.5C17.4 13 13.8 13 13.8 10.5C13.8 13 10.2 13 10.2 10.5C10.2 13 6.6 13 6.6 10.5C6.6 13 3 13 3 10.5Z"
    ),
    (0, import_geometry.p)("M4.5 13V21H19.5V13"),
    (0, import_geometry.p)("M13.5 21V15H17V21"),
    (0, import_geometry.l)(7, 16, 10, 16)
  ],
  building: [
    (0, import_geometry.p)("M3 21H21M4 21V4C4 3.4 4.4 3 5 3H13V21M13 9H19.5V21"),
    (0, import_geometry.p)("M7.5 6.5H9.5M7.5 10.5H9.5M7.5 14.5H9.5M16 12.5H17M16 16H17"),
    (0, import_geometry.p)("M7.5 21V18H10V21")
  ],
  package: [
    (0, import_geometry.p)("M12 2.75L21 7.5V16.5L12 21.25L3 16.5V7.5Z"),
    (0, import_geometry.poly)("3,7.5 12,12.25 21,7.5"),
    (0, import_geometry.l)(12, 12.25, 12, 21.25),
    (0, import_geometry.l)(7.5, 5.1, 16.5, 9.85)
  ],
  grid: [
    (0, import_geometry.r)(3, 3, 6.5, 6.5, 1.5),
    (0, import_geometry.r)(14.5, 3, 6.5, 6.5, 1.5),
    (0, import_geometry.r)(3, 14.5, 6.5, 6.5, 1.5),
    (0, import_geometry.r)(14.5, 14.5, 6.5, 6.5, 1.5)
  ],
  menu: [(0, import_geometry.l)(3, 5.5, 21, 5.5), (0, import_geometry.l)(3, 12, 21, 12), (0, import_geometry.l)(3, 18.5, 21, 18.5)],
  search: [(0, import_geometry.c)(10.5, 10.5, 7), (0, import_geometry.l)(15.5, 15.5, 21, 21)],
  filter: [(0, import_geometry.p)("M3 4H21L14.5 11.75V19.5L9.5 21V11.75Z"), (0, import_geometry.l)(7, 7.5, 17, 7.5)],
  sliders: [
    (0, import_geometry.p)("M3 5H7M11 5H21M3 12H13M17 12H21M3 19H6M10 19H21"),
    (0, import_geometry.c)(9, 5, 2),
    (0, import_geometry.c)(15, 12, 2),
    (0, import_geometry.c)(8, 19, 2)
  ],
  settings: [
    (0, import_geometry.p)(
      "M9.5 3H14.5L15.2 5.65L17.2 6.8L19.85 6.1L22.1 10L20.15 12L20.1 14.2L21.95 16.15L19.65 20.1L17 19.4L15.1 20.5L14.5 22H9.5L8.9 20.5L7 19.4L4.35 20.1L2.05 16.15L3.9 14.2L3.85 12L1.9 10L4.15 6.1L6.8 6.8L8.8 5.65Z"
    ),
    (0, import_geometry.c)(12, 12.5, 3.25)
  ],
  globe: [
    (0, import_geometry.c)(12, 12, 9),
    (0, import_geometry.e)(12, 12, 4, 9),
    (0, import_geometry.l)(3, 12, 21, 12),
    (0, import_geometry.p)("M4.6 6.9C9 9 15 9 19.4 6.9M4.6 17.1C9 15 15 15 19.4 17.1")
  ],
  compass: [(0, import_geometry.c)(12, 12, 9), (0, import_geometry.p)("M15.8 8.2L13.8 13.8L8.2 15.8L10.2 10.2Z"), (0, import_geometry.l)(10.2, 10.2, 13.8, 13.8)],
  "map-pin": [(0, import_geometry.p)("M19 9.5C19 15 12 21 12 21C12 21 5 15 5 9.5A7 7 0 0 1 19 9.5Z"), (0, import_geometry.c)(12, 9.5, 2.5)],
  map: [
    (0, import_geometry.poly)("3,5.5 9,3 15,5.5 21,3 21,18.5 15,21 9,18.5 3,21 3,5.5"),
    (0, import_geometry.l)(9, 3, 9, 18.5),
    (0, import_geometry.l)(15, 5.5, 15, 21)
  ],
  route: [
    (0, import_geometry.c)(5, 18.5, 2.5),
    (0, import_geometry.c)(19, 5.5, 2.5),
    (0, import_geometry.p)("M7.5 18.5H16.5A3.5 3.5 0 0 0 16.5 11.5H7.5A3 3 0 0 1 7.5 5.5H16.5")
  ],
  link: [
    (0, import_geometry.p)("M9.25 8L11.75 5.5A4.75 4.75 0 0 1 18.5 12.25L16 14.75"),
    (0, import_geometry.p)("M14.75 16L12.25 18.5A4.75 4.75 0 0 1 5.5 11.75L8 9.25"),
    (0, import_geometry.l)(8.5, 15.5, 15.5, 8.5)
  ],
  "external-link": [
    (0, import_geometry.p)("M10 4H5A2 2 0 0 0 3 6V19A2 2 0 0 0 5 21H18A2 2 0 0 0 20 19V14"),
    (0, import_geometry.poly)("14,3 21,3 21,10"),
    (0, import_geometry.l)(11, 13, 21, 3)
  ],
  sidebar: [(0, import_geometry.r)(3, 3.5, 18, 17), (0, import_geometry.l)(8.5, 3.5, 8.5, 20.5), (0, import_geometry.l)(5.5, 7.5, 5.5, 10.5)],
  layout: [(0, import_geometry.r)(3, 3.5, 18, 17), (0, import_geometry.l)(3, 9, 21, 9), (0, import_geometry.l)(14.5, 9, 14.5, 20.5)]
};
