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
var cash_exports = {};
__export(cash_exports, {
  CashIcon: () => CashIcon,
  default: () => cash_default
});
module.exports = __toCommonJS(cash_exports);
var import_create_icon = require("../create-icon.js");
const CashIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("cash", [["rect", { "x": 3, "y": 5, "width": 18, "height": 12, "rx": 1.5 }], ["circle", { "cx": 12, "cy": 11, "r": 3 }], ["path", { "d": "M6 8h1m10 6h1M5 20h14" }]]);
var cash_default = CashIcon;
