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
var page_size_exports = {};
__export(page_size_exports, {
  PageSizeIcon: () => PageSizeIcon,
  default: () => page_size_default
});
module.exports = __toCommonJS(page_size_exports);
var import_create_icon = require("../create-icon.js");
const PageSizeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("page-size", [["rect", { "x": 3, "y": 3, "width": 12, "height": 15, "rx": 1 }], ["path", { "d": "M20 3v15m-2-15h4m-4 15h4M3 21h12M3 20v2m12-2v2" }]]);
var page_size_default = PageSizeIcon;
