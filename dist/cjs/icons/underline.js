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
var underline_exports = {};
__export(underline_exports, {
  UnderlineIcon: () => UnderlineIcon,
  default: () => underline_default
});
module.exports = __toCommonJS(underline_exports);
var import_create_icon = require("../create-icon.js");
const UnderlineIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("underline", [["path", { "d": "M6 4v8a6 6 0 0 0 12 0V4M4 21h16" }]]);
var underline_default = UnderlineIcon;
