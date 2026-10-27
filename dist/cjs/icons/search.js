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
var search_exports = {};
__export(search_exports, {
  SearchIcon: () => SearchIcon,
  default: () => search_default
});
module.exports = __toCommonJS(search_exports);
var import_create_icon = require("../create-icon.js");
const SearchIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("search", [["circle", { "cx": 10.5, "cy": 10.5, "r": 7 }], ["line", { "x1": 15.5, "y1": 15.5, "x2": 21, "y2": 21 }]]);
var search_default = SearchIcon;
