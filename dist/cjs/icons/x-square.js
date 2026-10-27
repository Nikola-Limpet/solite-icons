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
var x_square_exports = {};
__export(x_square_exports, {
  XSquareIcon: () => XSquareIcon,
  default: () => x_square_default
});
module.exports = __toCommonJS(x_square_exports);
var import_create_icon = require("../create-icon.js");
const XSquareIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("x-square", [["rect", { "x": 3.5, "y": 3.5, "width": 17, "height": 17, "rx": 2.5 }], ["path", { "d": "m8.5 8.5 7 7m0-7-7 7" }]]);
var x_square_default = XSquareIcon;
