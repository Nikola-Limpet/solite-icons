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
var ampersand_exports = {};
__export(ampersand_exports, {
  AmpersandIcon: () => AmpersandIcon,
  default: () => ampersand_default
});
module.exports = __toCommonJS(ampersand_exports);
var import_create_icon = require("../create-icon.js");
const AmpersandIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("ampersand", [["path", { "d": "M19 13c-2 5-5 8-9 8a5.5 5.5 0 0 1-3-10l5-3c3-2 1.5-5-1-5S7 4.5 7 6.5c0 2 3 5 5 7l7 7" }]]);
var ampersand_default = AmpersandIcon;
