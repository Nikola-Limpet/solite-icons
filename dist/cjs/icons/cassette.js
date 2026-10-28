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
var cassette_exports = {};
__export(cassette_exports, {
  CassetteIcon: () => CassetteIcon,
  default: () => cassette_default
});
module.exports = __toCommonJS(cassette_exports);
var import_create_icon = require("../create-icon.js");
const CassetteIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("cassette", [["rect", { "x": 3, "y": 5, "width": 18, "height": 14, "rx": 2.5 }], ["circle", { "cx": 8, "cy": 10.5, "r": 1.75 }], ["circle", { "cx": 16, "cy": 10.5, "r": 1.75 }], ["line", { "x1": 9.75, "y1": 10.5, "x2": 14.25, "y2": 10.5 }], ["path", { "d": "m7 19 1.5-4h7L17 19" }]]);
var cassette_default = CassetteIcon;
