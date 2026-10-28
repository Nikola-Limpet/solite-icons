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
var quote_exports = {};
__export(quote_exports, {
  QuoteIcon: () => QuoteIcon,
  default: () => quote_default
});
module.exports = __toCommonJS(quote_exports);
var import_create_icon = require("../create-icon.js");
const QuoteIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("quote", [["path", { "d": "M4 6a2 2 0 0 1 2-2h4v8c0 4-2 6-6 7v-3c2-.5 3-2 3-4H4V6Zm11 0a2 2 0 0 1 2-2h4v8c0 4-2 6-6 7v-3c2-.5 3-2 3-4h-3V6Z" }]]);
var quote_default = QuoteIcon;
