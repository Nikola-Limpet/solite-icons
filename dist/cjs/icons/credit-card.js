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
var credit_card_exports = {};
__export(credit_card_exports, {
  CreditCardIcon: () => CreditCardIcon,
  default: () => credit_card_default
});
module.exports = __toCommonJS(credit_card_exports);
var import_create_icon = require("../create-icon.js");
const CreditCardIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("credit-card", [["rect", { "x": 2.5, "y": 4.5, "width": 19, "height": 15, "rx": 2.5 }], ["line", { "x1": 2.5, "y1": 9, "x2": 21.5, "y2": 9 }], ["path", { "d": "M6 15h4m3 0h2" }]]);
var credit_card_default = CreditCardIcon;
