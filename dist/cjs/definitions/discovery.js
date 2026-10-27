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
var discovery_exports = {};
__export(discovery_exports, {
  discoveryIcons: () => discoveryIcons
});
module.exports = __toCommonJS(discovery_exports);
var import_geometry = require("../geometry.js");
const discoveryIcons = {
  sparkles: [
    (0, import_geometry.p)("M9 3c.9 5 2 6.1 7 7-5 .9-6.1 2-7 7-.9-5-2-6.1-7-7 5-.9 6.1-2 7-7Z"),
    (0, import_geometry.p)("M18 14c.5 2.5 1 3 3.5 3.5-2.5.5-3 1-3.5 3.5-.5-2.5-1-3-3.5-3.5 2.5-.5 3-1 3.5-3.5Z")
  ],
  wand: [
    (0, import_geometry.p)(
      "m4 17 11-11a2.1 2.1 0 0 1 3 3L7 20a2.1 2.1 0 0 1-3-3Zm8-8 3 3M16 2v1.5m4 3H22M20 2.5l-1 1M10.5 3l1.5 1.5M20 11l1.5 1.5"
    )
  ],
  lightbulb: [
    (0, import_geometry.p)("M8.5 17v-1.5c0-2-3-3.1-3-6.5a6.5 6.5 0 0 1 13 0c0 3.4-3 4.5-3 6.5V17h-7ZM9 20.5h6"),
    (0, import_geometry.p)("M9 8.5a3 3 0 0 1 3-3")
  ],
  rocket: [
    (0, import_geometry.p)("M9 15 6.5 12.5C9 6.5 14.5 2.5 21 3c.5 6.5-3.5 12-9.5 14.5L9 15ZM7 11H4l-2 4h7m4 2v5l4-2v-5"),
    (0, import_geometry.c)(15.5, 8.5, 2),
    (0, import_geometry.p)("m5.5 18.5-3 3m6-2-2 2")
  ],
  accessibility: [(0, import_geometry.c)(12, 12, 9), (0, import_geometry.c)(12, 7, 1.25), (0, import_geometry.p)("m7 10 5 1.5 5-1.5M12 11.5V14m-3 4 3-4 3 4")],
  languages: [
    (0, import_geometry.p)(
      "M3 5.5h11M8.5 3v2.5M12 5.5c-.7 5-3.5 8.5-8.5 11M5 9c1.5 3.2 4 5.5 7 7M13 21l4-11 4 11m-6.8-3.5h5.6"
    )
  ],
  trophy: [
    (0, import_geometry.p)(
      "M6.5 3h11v7a5.5 5.5 0 0 1-11 0V3ZM6.5 5H3v3a4 4 0 0 0 4 4m10.5-7H21v3a4 4 0 0 1-4 4M12 15.5V19M7 21l1-2h8l1 2H7Z"
    )
  ],
  "graduation-cap": [
    (0, import_geometry.poly)("2.5 8.5 12 4 21.5 8.5 12 13 2.5 8.5"),
    (0, import_geometry.p)("M6 10.2v6c3.5 2.5 8.5 2.5 12 0v-6M21.5 8.5v9"),
    (0, import_geometry.r)(20.5, 17.5, 2, 3, 1)
  ],
  wrench: [
    (0, import_geometry.p)(
      "M14.5 3a6 6 0 0 0-6.4 8L3.6 15.5a3.5 3.5 0 0 0 4.9 4.9l4.5-4.5A6 6 0 0 0 21 9.5l-4 3-4.5-4.5 3-4-.9-1Z"
    )
  ],
  puzzle: [
    (0, import_geometry.p)(
      "M8 5.5V5a3 3 0 1 1 6 0v.5h4a1.5 1.5 0 0 1 1.5 1.5v4h.5a3 3 0 1 1 0 6h-.5v3A1.5 1.5 0 0 1 18 21.5h-4v-.5a3 3 0 1 0-6 0v.5H4A1.5 1.5 0 0 1 2.5 20v-4H3a3 3 0 1 0 0-6h-.5V7A1.5 1.5 0 0 1 4 5.5h4Z"
    )
  ],
  target: [(0, import_geometry.c)(12, 12, 9), (0, import_geometry.c)(12, 12, 5.5), (0, import_geometry.c)(12, 12, 2)]
};
