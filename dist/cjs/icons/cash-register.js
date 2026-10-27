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
var cash_register_exports = {};
__export(cash_register_exports, {
  CashRegisterIcon: () => CashRegisterIcon,
  default: () => cash_register_default
});
module.exports = __toCommonJS(cash_register_exports);
var import_create_icon = require("../create-icon.js");
const CashRegisterIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("cash-register", [["rect", { "x": 8, "y": 3, "width": 9, "height": 5, "rx": 1.5 }], ["line", { "x1": 12.5, "y1": 8, "x2": 12.5, "y2": 10 }], ["path", { "d": "M6 10h12l2 6H4l2-6Z" }], ["rect", { "x": 3, "y": 16, "width": 18, "height": 5, "rx": 1.5 }], ["path", { "d": "M8 13h.5m3.25 0h.5m3.25 0h.5M10 18.5h4" }]]);
var cash_register_default = CashRegisterIcon;
