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
var basket_exports = {};
__export(basket_exports, {
  BasketIcon: () => BasketIcon,
  default: () => basket_default
});
module.exports = __toCommonJS(basket_exports);
var import_create_icon = require("../create-icon.js");
const BasketIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("basket", [["path", { "d": "M3 10h18l-2 9a2 2 0 0 1-2 1.5H7A2 2 0 0 1 5 19l-2-9Z" }], ["path", { "d": "m7 10 3-6m7 6-3-6M9 14l.5 3m5.5-3-.5 3" }]]);
var basket_default = BasketIcon;
