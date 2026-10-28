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
var paragraph_exports = {};
__export(paragraph_exports, {
  ParagraphIcon: () => ParagraphIcon,
  default: () => paragraph_default
});
module.exports = __toCommonJS(paragraph_exports);
var import_create_icon = require("../create-icon.js");
const ParagraphIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("paragraph", [["path", { "d": "M13 21V3H9.5a5 5 0 0 0 0 10H13M17 3v18M10.5 3h9" }]]);
var paragraph_default = ParagraphIcon;
