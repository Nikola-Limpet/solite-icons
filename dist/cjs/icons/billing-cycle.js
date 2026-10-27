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
var billing_cycle_exports = {};
__export(billing_cycle_exports, {
  BillingCycleIcon: () => BillingCycleIcon,
  default: () => billing_cycle_default
});
module.exports = __toCommonJS(billing_cycle_exports);
var import_create_icon = require("../create-icon.js");
const BillingCycleIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("billing-cycle", [["path", { "d": "M6 7V3h10v9l-2-1.5-3 1.5-3-1.5L6 12V7Zm3-1h4" }], ["path", { "d": "M3 14a9 9 0 0 0 16 5l2-3m-5 0h5v5M21 11a9 9 0 0 0-2-5" }]]);
var billing_cycle_default = BillingCycleIcon;
