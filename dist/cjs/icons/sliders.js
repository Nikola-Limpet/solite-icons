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
var sliders_exports = {};
__export(sliders_exports, {
  SlidersIcon: () => SlidersIcon,
  default: () => sliders_default
});
module.exports = __toCommonJS(sliders_exports);
var import_create_icon = require("../create-icon.js");
const SlidersIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("sliders", [["path", { "d": "M3 5H7M11 5H21M3 12H13M17 12H21M3 19H6M10 19H21" }], ["circle", { "cx": 9, "cy": 5, "r": 2 }], ["circle", { "cx": 15, "cy": 12, "r": 2 }], ["circle", { "cx": 8, "cy": 19, "r": 2 }]]);
var sliders_default = SlidersIcon;
