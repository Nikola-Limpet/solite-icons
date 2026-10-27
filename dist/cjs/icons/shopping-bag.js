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
var shopping_bag_exports = {};
__export(shopping_bag_exports, {
  ShoppingBagIcon: () => ShoppingBagIcon,
  default: () => shopping_bag_default
});
module.exports = __toCommonJS(shopping_bag_exports);
var import_create_icon = require("../create-icon.js");
const ShoppingBagIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("shopping-bag", [["path", { "d": "M6 7h12l1.5 12a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2L6 7Z" }], ["path", { "d": "M9 9V6a3 3 0 0 1 6 0v3" }]]);
var shopping_bag_default = ShoppingBagIcon;
