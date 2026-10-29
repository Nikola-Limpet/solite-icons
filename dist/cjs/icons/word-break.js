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
var word_break_exports = {};
__export(word_break_exports, {
  WordBreakIcon: () => WordBreakIcon,
  default: () => word_break_default
});
module.exports = __toCommonJS(word_break_exports);
var import_create_icon = require("../create-icon.js");
const WordBreakIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("word-break", [["path", { "d": "M3 5h12M3 10h18M3 15h6M3 20h12M17 3v3m0 3v3m0 3v3m0 3v.5M21 15l-3 3 3 3" }]]);
var word_break_default = WordBreakIcon;
