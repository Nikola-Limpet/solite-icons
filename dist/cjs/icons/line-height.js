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
var line_height_exports = {};
__export(line_height_exports, {
  LineHeightIcon: () => LineHeightIcon,
  default: () => line_height_default
});
module.exports = __toCommonJS(line_height_exports);
var import_create_icon = require("../create-icon.js");
const LineHeightIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("line-height", [["path", { "d": "M11 5h10M11 19h10M5 4v16m-2-13 2-3 2 3m-4 10 2 3 2-3M11 12h7" }]]);
var line_height_default = LineHeightIcon;
