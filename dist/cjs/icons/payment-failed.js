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
var payment_failed_exports = {};
__export(payment_failed_exports, {
  PaymentFailedIcon: () => PaymentFailedIcon,
  default: () => payment_failed_default
});
module.exports = __toCommonJS(payment_failed_exports);
var import_create_icon = require("../create-icon.js");
const PaymentFailedIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("payment-failed", [["path", { "d": "M11 19H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5M3 9h18M6 15h3" }], ["path", { "d": "m15 14 6 6m0-6-6 6" }]]);
var payment_failed_default = PaymentFailedIcon;
