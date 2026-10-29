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
var ruler_exports = {};
__export(ruler_exports, {
  RulerIcon: () => RulerIcon,
  default: () => ruler_default
});
module.exports = __toCommonJS(ruler_exports);
var import_create_icon = require("../create-icon.js");
const RulerIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("ruler", [["path", { "d": "m3 16 13-13 5 5L8 21l-5-5Zm10-10 2 2m-5 1 3 3m-6 0 2 2m-5 1 2 2" }]]);
var ruler_default = RulerIcon;
