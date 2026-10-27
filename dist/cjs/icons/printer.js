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
var printer_exports = {};
__export(printer_exports, {
  PrinterIcon: () => PrinterIcon,
  default: () => printer_default
});
module.exports = __toCommonJS(printer_exports);
var import_create_icon = require("../create-icon.js");
const PrinterIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("printer", [["path", { "d": "M6 8V3h12v5" }], ["rect", { "x": 3, "y": 8, "width": 18, "height": 9, "rx": 2 }], ["rect", { "x": 6, "y": 14, "width": 12, "height": 7, "rx": 1 }], ["circle", { "cx": 17.5, "cy": 11, "r": 0.6 }]]);
var printer_default = PrinterIcon;
