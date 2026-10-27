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
var interface_exports = {};
__export(interface_exports, {
  interfaceIcons: () => interfaceIcons
});
module.exports = __toCommonJS(interface_exports);
var import_geometry = require("../geometry.js");
const interfaceIcons = {
  sun: [
    (0, import_geometry.c)(12, 12, 4),
    (0, import_geometry.p)(
      "M12 2.5v2m0 15v2M2.5 12h2m15 0h2M5.3 5.3l1.4 1.4m10.6 10.6 1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4"
    )
  ],
  moon: [(0, import_geometry.p)("M20.5 13a8.6 8.6 0 1 1-9.5-9.5A7 7 0 0 0 20.5 13Z")],
  loading: [(0, import_geometry.p)("M20 12a8 8 0 1 1-8-8"), (0, import_geometry.l)(12, 2.5, 12, 5.5)],
  "more-horizontal": [(0, import_geometry.c)(5, 12, 0.8), (0, import_geometry.c)(12, 12, 0.8), (0, import_geometry.c)(19, 12, 0.8)],
  "more-vertical": [(0, import_geometry.c)(12, 5, 0.8), (0, import_geometry.c)(12, 12, 0.8), (0, import_geometry.c)(12, 19, 0.8)],
  trash: [(0, import_geometry.p)("M4 6h16M9 6V3h6v3M6 6l1 15h10l1-15"), (0, import_geometry.l)(10, 10, 10.5, 17), (0, import_geometry.l)(14, 10, 13.5, 17)],
  "trash-restore": [(0, import_geometry.p)("M4 6h16M9 6V3h6v3M6 6l1 15h10l1-15M12 17v-7m-3 3 3-3 3 3")],
  "edit-square": [
    (0, import_geometry.p)(
      "M11 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5M9 15l1-4 8-8 3 3-8 8-4 1Zm7-10 3 3"
    )
  ],
  "check-square": [(0, import_geometry.r)(3.5, 3.5, 17, 17, 2.5), (0, import_geometry.poly)("7.5 12 10.5 15 16.5 9")],
  "x-square": [(0, import_geometry.r)(3.5, 3.5, 17, 17, 2.5), (0, import_geometry.p)("m8.5 8.5 7 7m0-7-7 7")],
  heart: [(0, import_geometry.p)("M12 20 4.8 13a5.2 5.2 0 0 1 7.2-7.5 5.2 5.2 0 0 1 7.2 7.5L12 20Z")],
  star: [
    (0, import_geometry.poly)("12 3 14.8 8.8 21 9.7 16.5 14.1 17.6 20.4 12 17.4 6.4 20.4 7.5 14.1 3 9.7 9.2 8.8 12 3")
  ],
  flag: [(0, import_geometry.p)("M5 21V3h7l2 2h6v10h-7l-2-2H5")],
  pin: [(0, import_geometry.p)("m9 3 9 3-2 5 2 3-2 2-3-2-5 2-3-9 4-4Zm1 12-6 6")],
  bookmark: [(0, import_geometry.p)("M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16l-6-4-6 4Z")],
  history: [(0, import_geometry.p)("M3 11a9 9 0 1 1 2.6 7.4M3 5v6h6M12 7v5l3 2")],
  repeat: [(0, import_geometry.p)("m16 3 4 4-4 4M20 7H8a4 4 0 0 0-4 4m4 10-4-4 4-4M4 17h12a4 4 0 0 0 4-4")],
  shuffle: [
    (0, import_geometry.p)(
      "M3 6h3c4 0 8 12 12 12h3m-4-4 4 4-4 4M3 18h3c2 0 3.8-2.7 5.5-5.5M14 8c1.4-1.3 2.7-2 4-2h3m-4-4 4 4-4 4"
    )
  ],
  pause: [(0, import_geometry.r)(6, 4, 4, 16, 1), (0, import_geometry.r)(14, 4, 4, 16, 1)],
  play: [(0, import_geometry.p)("M7 4.5v15l13-7.5-13-7.5Z")]
};
