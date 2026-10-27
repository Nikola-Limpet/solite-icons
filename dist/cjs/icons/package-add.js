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
var package_add_exports = {};
__export(package_add_exports, {
  PackageAddIcon: () => PackageAddIcon,
  default: () => package_add_default
});
module.exports = __toCommonJS(package_add_exports);
var import_create_icon = require("../create-icon.js");
const PackageAddIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("package-add", [["path", { "d": "m11 3 8 4.5v4M11 3 3 7.5v9L11 21l3-1.7M3 7.5l8 4.5 8-4.5M11 12v9M7 5.2l8 4.5" }], ["path", { "d": "M18 14v7m-3.5-3.5h7" }]]);
var package_add_default = PackageAddIcon;
