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
var discount_exports = {};
__export(discount_exports, {
  DiscountIcon: () => DiscountIcon,
  default: () => discount_default
});
module.exports = __toCommonJS(discount_exports);
var import_create_icon = require("../create-icon.js");
const DiscountIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("discount", [["path", { "d": "m12 2 3 2 3.5.5.5 3.5 2 4-2 3-.5 3.5-3.5.5-3 2-3-2-3.5-.5L5 15l-2-3 2-4 .5-3.5L9 4l3-2Z" }], ["line", { "x1": 9, "y1": 15, "x2": 15, "y2": 9 }], ["circle", { "cx": 9, "cy": 9, "r": 0.8 }], ["circle", { "cx": 15, "cy": 15, "r": 0.8 }]]);
var discount_default = DiscountIcon;
