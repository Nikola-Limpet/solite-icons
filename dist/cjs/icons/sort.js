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
var sort_exports = {};
__export(sort_exports, {
  SortIcon: () => SortIcon,
  default: () => sort_default
});
module.exports = __toCommonJS(sort_exports);
var import_create_icon = require("../create-icon.js");
const SortIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("sort", [["line", { "x1": 6.5, "y1": 3.5, "x2": 6.5, "y2": 20.5 }], ["polyline", { "points": "3,7 6.5,3.5 10,7" }], ["line", { "x1": 17.5, "y1": 3.5, "x2": 17.5, "y2": 20.5 }], ["polyline", { "points": "14,17 17.5,20.5 21,17" }]]);
var sort_default = SortIcon;
