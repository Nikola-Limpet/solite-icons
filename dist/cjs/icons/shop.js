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
var shop_exports = {};
__export(shop_exports, {
  ShopIcon: () => ShopIcon,
  default: () => shop_default
});
module.exports = __toCommonJS(shop_exports);
var import_create_icon = require("../create-icon.js");
const ShopIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("shop", [["path", { "d": "M3 9L5 3.5H19L21 9V10.5C21 13 17.4 13 17.4 10.5C17.4 13 13.8 13 13.8 10.5C13.8 13 10.2 13 10.2 10.5C10.2 13 6.6 13 6.6 10.5C6.6 13 3 13 3 10.5Z" }], ["path", { "d": "M4.5 13V21H19.5V13" }], ["path", { "d": "M13.5 21V15H17V21" }], ["line", { "x1": 7, "y1": 16, "x2": 10, "y2": 16 }]]);
var shop_default = ShopIcon;
