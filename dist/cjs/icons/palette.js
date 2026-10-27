"use strict";
"use client";
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
var palette_exports = {};
__export(palette_exports, {
  PaletteIcon: () => PaletteIcon,
  default: () => palette_default
});
module.exports = __toCommonJS(palette_exports);
var import_create_icon = require("../create-icon.js");
const PaletteIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("palette", [["path", { "d": "M12 3a9 9 0 1 0 0 18h1a2.3 2.3 0 0 0 1.8-3.7 1.5 1.5 0 0 1 1.2-2.4h1.5A3.5 3.5 0 0 0 21 11.4 8.5 8.5 0 0 0 12 3Z" }], ["circle", { "cx": 7.5, "cy": 9, "r": 0.7 }], ["circle", { "cx": 12, "cy": 6.5, "r": 0.7 }], ["circle", { "cx": 16.5, "cy": 9, "r": 0.7 }], ["line", { "x1": 6.5, "y1": 14, "x2": 7, "y2": 14 }]]);
var palette_default = PaletteIcon;
