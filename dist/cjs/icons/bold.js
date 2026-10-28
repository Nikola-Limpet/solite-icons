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
var bold_exports = {};
__export(bold_exports, {
  BoldIcon: () => BoldIcon,
  default: () => bold_default
});
module.exports = __toCommonJS(bold_exports);
var import_create_icon = require("../create-icon.js");
const BoldIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("bold", [["path", { "d": "M7 4h5.5a4 4 0 0 1 0 8H7m5.5 0a4 4 0 0 1 0 8H7V4" }]]);
var bold_default = BoldIcon;
