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
var highlighter_exports = {};
__export(highlighter_exports, {
  HighlighterIcon: () => HighlighterIcon,
  default: () => highlighter_default
});
module.exports = __toCommonJS(highlighter_exports);
var import_create_icon = require("../create-icon.js");
const HighlighterIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("highlighter", [["path", { "d": "m7 14 8.5-10a1.5 1.5 0 0 1 2.1-.2l2.6 2.2a1.5 1.5 0 0 1 .2 2.1L12 18l-5-4Zm1.5 1.2-3 1.3L4 19h6l1.4-2.5M4 22h16" }]]);
var highlighter_default = HighlighterIcon;
