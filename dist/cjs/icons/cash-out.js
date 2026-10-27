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
var cash_out_exports = {};
__export(cash_out_exports, {
  CashOutIcon: () => CashOutIcon,
  default: () => cash_out_default
});
module.exports = __toCommonJS(cash_out_exports);
var import_create_icon = require("../create-icon.js");
const CashOutIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("cash-out", [["rect", { "x": 3, "y": 4, "width": 15, "height": 11, "rx": 1.5 }], ["circle", { "cx": 10.5, "cy": 9.5, "r": 2.5 }], ["path", { "d": "M5 19h14a2 2 0 0 0 2-2v-3M17 13V7m-3 3 3-3 3 3" }]]);
var cash_out_default = CashOutIcon;
