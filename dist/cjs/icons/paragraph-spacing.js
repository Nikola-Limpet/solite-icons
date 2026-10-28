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
var paragraph_spacing_exports = {};
__export(paragraph_spacing_exports, {
  ParagraphSpacingIcon: () => ParagraphSpacingIcon,
  default: () => paragraph_spacing_default
});
module.exports = __toCommonJS(paragraph_spacing_exports);
var import_create_icon = require("../create-icon.js");
const ParagraphSpacingIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("paragraph-spacing", [["path", { "d": "M10 3h11M10 7h8M10 17h11M10 21h8M5 7v10m-2-7 2-3 2 3m-4 4 2 3 2-3" }]]);
var paragraph_spacing_default = ParagraphSpacingIcon;
