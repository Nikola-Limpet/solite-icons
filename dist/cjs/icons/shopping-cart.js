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
var shopping_cart_exports = {};
__export(shopping_cart_exports, {
  ShoppingCartIcon: () => ShoppingCartIcon,
  default: () => shopping_cart_default
});
module.exports = __toCommonJS(shopping_cart_exports);
var import_create_icon = require("../create-icon.js");
const ShoppingCartIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("shopping-cart", [["path", { "d": "M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6H18" }], ["path", { "d": "M6 7h14l-1.5 6H7.1" }], ["circle", { "cx": 9, "cy": 20, "r": 1 }], ["circle", { "cx": 17, "cy": 20, "r": 1 }]]);
var shopping_cart_default = ShoppingCartIcon;
