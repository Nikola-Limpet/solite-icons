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
var retail_exports = {};
__export(retail_exports, {
  RetailIcon: () => RetailIcon,
  default: () => retail_default
});
module.exports = __toCommonJS(retail_exports);
var import_create_icon = require("../create-icon.js");
const RetailIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("retail", [["path", { "d": "M3 14h18v7H3v-7ZM5 14V9h6v5m-3-5V6h3M15 14V7h5v7M14 7h7M6 18h5" }]]);
var retail_default = RetailIcon;
