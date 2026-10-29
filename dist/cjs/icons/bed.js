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
var bed_exports = {};
__export(bed_exports, {
  BedIcon: () => BedIcon,
  default: () => bed_default
});
module.exports = __toCommonJS(bed_exports);
var import_create_icon = require("../create-icon.js");
const BedIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("bed", [["path", { "d": "M3 4v17m0-5h18v5M3 9h15a3 3 0 0 1 3 3v4M10 9v7" }], ["rect", { "x": 5, "y": 6, "width": 5, "height": 3, "rx": 1 }]]);
var bed_default = BedIcon;
