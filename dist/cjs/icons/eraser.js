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
var eraser_exports = {};
__export(eraser_exports, {
  EraserIcon: () => EraserIcon,
  default: () => eraser_default
});
module.exports = __toCommonJS(eraser_exports);
var import_create_icon = require("../create-icon.js");
const EraserIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("eraser", [["path", { "d": "m4 13 8.5-9a1.5 1.5 0 0 1 2.1 0l6.1 5.7a1.5 1.5 0 0 1 0 2.2L13 20H8l-4-4.7a1.8 1.8 0 0 1 0-2.3Zm4-4 8.5 7.5M13 20h8" }]]);
var eraser_default = EraserIcon;
