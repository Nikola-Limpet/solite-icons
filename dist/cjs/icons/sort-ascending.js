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
var sort_ascending_exports = {};
__export(sort_ascending_exports, {
  SortAscendingIcon: () => SortAscendingIcon,
  default: () => sort_ascending_default
});
module.exports = __toCommonJS(sort_ascending_exports);
var import_create_icon = require("../create-icon.js");
const SortAscendingIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("sort-ascending", [["path", { "d": "M3.5 5h4M3.5 12h7M3.5 19h10M18 4v16m-3.5-3.5L18 20l3.5-3.5" }]]);
var sort_ascending_default = SortAscendingIcon;
