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
var page_margin_exports = {};
__export(page_margin_exports, {
  PageMarginIcon: () => PageMarginIcon,
  default: () => page_margin_default
});
module.exports = __toCommonJS(page_margin_exports);
var import_create_icon = require("../create-icon.js");
const PageMarginIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("page-margin", [["rect", { "x": 4.5, "y": 3, "width": 15, "height": 18, "rx": 1.5 }], ["path", { "d": "M8 6.5h3M8 6.5v3m8-3h-3m3 0v3M8 17.5h3m-3 0v-3m8 3h-3m3 0v-3" }]]);
var page_margin_default = PageMarginIcon;
