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
var letter_spacing_exports = {};
__export(letter_spacing_exports, {
  LetterSpacingIcon: () => LetterSpacingIcon,
  default: () => letter_spacing_default
});
module.exports = __toCommonJS(letter_spacing_exports);
var import_create_icon = require("../create-icon.js");
const LetterSpacingIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("letter-spacing", [["path", { "d": "m3 11 3-8 3 8m-5-3h4m7 3 3-8 3 8m-5-3h4M3 18h18m-15-3-3 3 3 3m12-6 3 3-3 3" }]]);
var letter_spacing_default = LetterSpacingIcon;
