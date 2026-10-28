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
var page_number_exports = {};
__export(page_number_exports, {
  PageNumberIcon: () => PageNumberIcon,
  default: () => page_number_default
});
module.exports = __toCommonJS(page_number_exports);
var import_create_icon = require("../create-icon.js");
const PageNumberIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("page-number", [["path", { "d": "M19.5 12V5a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3M14 13l-1 9m6-9-1 9m-7-6h10m-10 3h10" }]]);
var page_number_default = PageNumberIcon;
