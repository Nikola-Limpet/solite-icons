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
var superscript_exports = {};
__export(superscript_exports, {
  SuperscriptIcon: () => SuperscriptIcon,
  default: () => superscript_default
});
module.exports = __toCommonJS(superscript_exports);
var import_create_icon = require("../create-icon.js");
const SuperscriptIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("superscript", [["path", { "d": "m3.5 9 9 12m0-12-9 12M16 5a2.5 2.5 0 0 1 5 0c0 1.7-5 3.2-5 6h5" }]]);
var superscript_default = SuperscriptIcon;
