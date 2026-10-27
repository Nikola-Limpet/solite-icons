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
var bank_transfer_exports = {};
__export(bank_transfer_exports, {
  BankTransferIcon: () => BankTransferIcon,
  default: () => bank_transfer_default
});
module.exports = __toCommonJS(bank_transfer_exports);
var import_create_icon = require("../create-icon.js");
const BankTransferIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("bank-transfer", [["path", { "d": "m3 7 7-4 7 4H3Zm2 0v8m5-8v8m5-8v3M3 18h8" }], ["path", { "d": "M14 14h7l-2-2m2 2-2 2m2 4h-7l2-2m-2 2 2 2" }]]);
var bank_transfer_default = BankTransferIcon;
