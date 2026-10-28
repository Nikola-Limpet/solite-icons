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
var sort_descending_exports = {};
__export(sort_descending_exports, {
  SortDescendingIcon: () => SortDescendingIcon,
  default: () => sort_descending_default
});
module.exports = __toCommonJS(sort_descending_exports);
var import_create_icon = require("../create-icon.js");
const SortDescendingIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("sort-descending", [["path", { "d": "M3.5 5h10M3.5 12h7M3.5 19h4M18 4v16m-3.5-3.5L18 20l3.5-3.5" }]]);
var sort_descending_default = SortDescendingIcon;
