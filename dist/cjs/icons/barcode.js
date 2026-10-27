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
var barcode_exports = {};
__export(barcode_exports, {
  BarcodeIcon: () => BarcodeIcon,
  default: () => barcode_default
});
module.exports = __toCommonJS(barcode_exports);
var import_create_icon = require("../create-icon.js");
const BarcodeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("barcode", [["path", { "d": "M6 3H3v4m15-4h3v4M3 17v4h3m15-4v4h-3" }], ["path", { "d": "M7 7v10m3-10v10m4-10v10m3-10v10" }]]);
var barcode_default = BarcodeIcon;
