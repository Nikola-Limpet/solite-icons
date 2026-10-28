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
var page_break_exports = {};
__export(page_break_exports, {
  PageBreakIcon: () => PageBreakIcon,
  default: () => page_break_default
});
module.exports = __toCommonJS(page_break_exports);
var import_create_icon = require("../create-icon.js");
const PageBreakIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("page-break", [["path", { "d": "M4.5 8V4a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v4M4.5 16v4a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-4M2.5 12h3m3 0h3m3 0h3m3 0h1" }]]);
var page_break_default = PageBreakIcon;
