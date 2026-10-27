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
var invoice_exports = {};
__export(invoice_exports, {
  InvoiceIcon: () => InvoiceIcon,
  default: () => invoice_default
});
module.exports = __toCommonJS(invoice_exports);
var import_create_icon = require("../create-icon.js");
const InvoiceIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("invoice", [["path", { "d": "M6 3h9l4 4v14H5V4a1 1 0 0 1 1-1ZM15 3v5h4" }], ["path", { "d": "M8 11h3m-3 4h8m-8 3h5" }]]);
var invoice_default = InvoiceIcon;
