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
var sort_alphabetical_exports = {};
__export(sort_alphabetical_exports, {
  SortAlphabeticalIcon: () => SortAlphabeticalIcon,
  default: () => sort_alphabetical_default
});
module.exports = __toCommonJS(sort_alphabetical_exports);
var import_create_icon = require("../create-icon.js");
const SortAlphabeticalIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("sort-alphabetical", [["path", { "d": "m3 10 3-7 3 7M4 8h4M3.5 14h5l-5 7h5M17.5 3.5v17M14 17l3.5 3.5L21 17" }]]);
var sort_alphabetical_default = SortAlphabeticalIcon;
