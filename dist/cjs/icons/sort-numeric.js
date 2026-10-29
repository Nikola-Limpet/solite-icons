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
var sort_numeric_exports = {};
__export(sort_numeric_exports, {
  SortNumericIcon: () => SortNumericIcon,
  default: () => sort_numeric_default
});
module.exports = __toCommonJS(sort_numeric_exports);
var import_create_icon = require("../create-icon.js");
const SortNumericIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("sort-numeric", [["path", { "d": "m4 5 2.5-1.5V10m-2.5 0h5M8.5 17H5.8a2 2 0 0 1 0-4h.7a2 2 0 0 1 2 2v3.7A2.3 2.3 0 0 1 6.2 21H4M17.5 3.5v17M14 17l3.5 3.5L21 17" }]]);
var sort_numeric_default = SortNumericIcon;
