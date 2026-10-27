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
var cash_drawer_exports = {};
__export(cash_drawer_exports, {
  CashDrawerIcon: () => CashDrawerIcon,
  default: () => cash_drawer_default
});
module.exports = __toCommonJS(cash_drawer_exports);
var import_create_icon = require("../create-icon.js");
const CashDrawerIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("cash-drawer", [["rect", { "x": 3, "y": 5, "width": 18, "height": 15, "rx": 2 }], ["rect", { "x": 5.5, "y": 8, "width": 13, "height": 5.5, "rx": 1 }], ["path", { "d": "M3 16h18M9 17.8h6" }], ["circle", { "cx": 12, "cy": 10.5, "r": 0.6 }]]);
var cash_drawer_default = CashDrawerIcon;
