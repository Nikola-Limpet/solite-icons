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
var scan_exports = {};
__export(scan_exports, {
  ScanIcon: () => ScanIcon,
  default: () => scan_default
});
module.exports = __toCommonJS(scan_exports);
var import_create_icon = require("../create-icon.js");
const ScanIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("scan", [["path", { "d": "M4 9V5a1 1 0 0 1 1-1h4m6 0h4a1 1 0 0 1 1 1v4m0 6v4a1 1 0 0 1-1 1h-4m-6 0H5a1 1 0 0 1-1-1v-4" }], ["line", { "x1": 3, "y1": 12, "x2": 21, "y2": 12 }], ["line", { "x1": 8, "y1": 7, "x2": 8, "y2": 9 }], ["line", { "x1": 12, "y1": 6, "x2": 12, "y2": 9 }], ["line", { "x1": 16, "y1": 7, "x2": 16, "y2": 9 }], ["line", { "x1": 8, "y1": 15, "x2": 8, "y2": 17 }], ["line", { "x1": 12, "y1": 15, "x2": 12, "y2": 18 }], ["line", { "x1": 16, "y1": 15, "x2": 16, "y2": 17 }]]);
var scan_default = ScanIcon;
