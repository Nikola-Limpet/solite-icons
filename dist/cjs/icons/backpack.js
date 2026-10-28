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
var backpack_exports = {};
__export(backpack_exports, {
  BackpackIcon: () => BackpackIcon,
  default: () => backpack_default
});
module.exports = __toCommonJS(backpack_exports);
var import_create_icon = require("../create-icon.js");
const BackpackIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("backpack", [["path", { "d": "M9 5V4a3 3 0 0 1 6 0v1M5 12H3v6a2 2 0 0 0 2 2m14-8h2v6a2 2 0 0 1-2 2" }], ["rect", { "x": 5, "y": 5, "width": 14, "height": 17, "rx": 5 }], ["rect", { "x": 8, "y": 13, "width": 8, "height": 6, "rx": 1.5 }], ["line", { "x1": 9, "y1": 9, "x2": 15, "y2": 9 }]]);
var backpack_default = BackpackIcon;
