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
var calculator_exports = {};
__export(calculator_exports, {
  CalculatorIcon: () => CalculatorIcon,
  default: () => calculator_default
});
module.exports = __toCommonJS(calculator_exports);
var import_create_icon = require("../create-icon.js");
const CalculatorIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("calculator", [["rect", { "x": 5, "y": 2.5, "width": 14, "height": 19, "rx": 2 }], ["rect", { "x": 8, "y": 5.5, "width": 8, "height": 4, "rx": 1 }], ["path", { "d": "M8.5 13h.01m3.5 0h.01m3.5 0h.01m-7 4h.01m3.5 0h.01m3.5 0h.01" }]]);
var calculator_default = CalculatorIcon;
