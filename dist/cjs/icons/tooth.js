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
var tooth_exports = {};
__export(tooth_exports, {
  ToothIcon: () => ToothIcon,
  default: () => tooth_default
});
module.exports = __toCommonJS(tooth_exports);
var import_create_icon = require("../create-icon.js");
const ToothIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("tooth", [["path", { "d": "M12 5C8 1 2 3 4 10c1 3 1 10 4 11 2 .5 1.5-7 4-7s2 7.5 4 7c3-1 3-8 4-11 2-7-4-9-8-5Zm-3-1 3 1 3-1" }]]);
var tooth_default = ToothIcon;
