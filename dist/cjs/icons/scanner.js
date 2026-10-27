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
var scanner_exports = {};
__export(scanner_exports, {
  ScannerIcon: () => ScannerIcon,
  default: () => scanner_default
});
module.exports = __toCommonJS(scanner_exports);
var import_create_icon = require("../create-icon.js");
const ScannerIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("scanner", [["path", { "d": "M5 4h12l3 7-8 3-2 7H6l2-9H5L3 7l2-3Z" }], ["path", { "d": "m7 7 8 1m-7 5 4 1m-5 3h4" }]]);
var scanner_default = ScannerIcon;
