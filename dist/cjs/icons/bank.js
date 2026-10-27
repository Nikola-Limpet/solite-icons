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
var bank_exports = {};
__export(bank_exports, {
  BankIcon: () => BankIcon,
  default: () => bank_default
});
module.exports = __toCommonJS(bank_exports);
var import_create_icon = require("../create-icon.js");
const BankIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("bank", [["path", { "d": "m3 8 9-5 9 5H3Zm1 13h16M5 18h14" }], ["path", { "d": "M7 8v10m5-10v10m5-10v10" }]]);
var bank_default = BankIcon;
