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
var stethoscope_exports = {};
__export(stethoscope_exports, {
  StethoscopeIcon: () => StethoscopeIcon,
  default: () => stethoscope_default
});
module.exports = __toCommonJS(stethoscope_exports);
var import_create_icon = require("../create-icon.js");
const StethoscopeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("stethoscope", [["path", { "d": "M4 3v6a5 5 0 0 0 10 0V3M3 3h2m8 0h2M9 14v2.5a4.5 4.5 0 0 0 9 0V15" }], ["circle", { "cx": 18, "cy": 12, "r": 3 }]]);
var stethoscope_default = StethoscopeIcon;
