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
var align_justify_exports = {};
__export(align_justify_exports, {
  AlignJustifyIcon: () => AlignJustifyIcon,
  default: () => align_justify_default
});
module.exports = __toCommonJS(align_justify_exports);
var import_create_icon = require("../create-icon.js");
const AlignJustifyIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("align-justify", [["path", { "d": "M4 4.5h16M4 9.5h16M4 14.5h16M4 19.5h12" }]]);
var align_justify_default = AlignJustifyIcon;
