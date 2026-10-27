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
var package_exports = {};
__export(package_exports, {
  PackageIcon: () => PackageIcon,
  default: () => package_default
});
module.exports = __toCommonJS(package_exports);
var import_create_icon = require("../create-icon.js");
const PackageIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("package", [["path", { "d": "M12 2.75L21 7.5V16.5L12 21.25L3 16.5V7.5Z" }], ["polyline", { "points": "3,7.5 12,12.25 21,7.5" }], ["line", { "x1": 12, "y1": 12.25, "x2": 12, "y2": 21.25 }], ["line", { "x1": 7.5, "y1": 5.1, "x2": 16.5, "y2": 9.85 }]]);
var package_default = PackageIcon;
