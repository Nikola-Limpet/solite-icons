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
var receipt_check_exports = {};
__export(receipt_check_exports, {
  ReceiptCheckIcon: () => ReceiptCheckIcon,
  default: () => receipt_check_default
});
module.exports = __toCommonJS(receipt_check_exports);
var import_create_icon = require("../create-icon.js");
const ReceiptCheckIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("receipt-check", [["path", { "d": "M18 10V3H5v18l3-2 3 2 2-1.3" }], ["path", { "d": "M8 7h7m-7 4h3" }], ["circle", { "cx": 17, "cy": 17, "r": 5 }], ["path", { "d": "m14.5 17 1.5 1.5 3.5-3.5" }]]);
var receipt_check_default = ReceiptCheckIcon;
