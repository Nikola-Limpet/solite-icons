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
var currency_exchange_exports = {};
__export(currency_exchange_exports, {
  CurrencyExchangeIcon: () => CurrencyExchangeIcon,
  default: () => currency_exchange_default
});
module.exports = __toCommonJS(currency_exchange_exports);
var import_create_icon = require("../create-icon.js");
const CurrencyExchangeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("currency-exchange", [["path", { "d": "M4 8a9 9 0 0 1 15-2l1 2m0-5v5h-5M20 16A9 9 0 0 1 5 18l-1-2m0 5v-5h5" }], ["path", { "d": "M14 10h-3a1.5 1.5 0 0 0 0 3h2a1.5 1.5 0 0 1 0 3h-3m2-7v8" }]]);
var currency_exchange_default = CurrencyExchangeIcon;
