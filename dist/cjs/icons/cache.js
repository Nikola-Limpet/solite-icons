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
var cache_exports = {};
__export(cache_exports, {
  CacheIcon: () => CacheIcon,
  default: () => cache_default
});
module.exports = __toCommonJS(cache_exports);
var import_create_icon = require("../create-icon.js");
const CacheIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("cache", [["path", { "d": "M19 8a8 8 0 1 0 1 7M19 3v5h-5" }], ["rect", { "x": 7.5, "y": 10, "width": 9, "height": 4, "rx": 1 }], ["line", { "x1": 10, "y1": 17, "x2": 14, "y2": 17 }]]);
var cache_default = CacheIcon;
