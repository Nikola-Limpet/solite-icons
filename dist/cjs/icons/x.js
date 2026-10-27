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
var x_exports = {};
__export(x_exports, {
  XIcon: () => XIcon,
  default: () => x_default
});
module.exports = __toCommonJS(x_exports);
var import_create_icon = require("../create-icon.js");
const XIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("x", [["line", { "x1": 5, "y1": 5, "x2": 19, "y2": 19 }], ["line", { "x1": 19, "y1": 5, "x2": 5, "y2": 19 }]]);
var x_default = XIcon;
