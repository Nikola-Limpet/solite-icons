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
var filter_exports = {};
__export(filter_exports, {
  FilterIcon: () => FilterIcon,
  default: () => filter_default
});
module.exports = __toCommonJS(filter_exports);
var import_create_icon = require("../create-icon.js");
const FilterIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("filter", [["path", { "d": "M3 4H21L14.5 11.75V19.5L9.5 21V11.75Z" }], ["line", { "x1": 7, "y1": 7.5, "x2": 17, "y2": 7.5 }]]);
var filter_default = FilterIcon;
