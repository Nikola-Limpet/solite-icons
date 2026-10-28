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
var list_ordered_exports = {};
__export(list_ordered_exports, {
  ListOrderedIcon: () => ListOrderedIcon,
  default: () => list_ordered_default
});
module.exports = __toCommonJS(list_ordered_exports);
var import_create_icon = require("../create-icon.js");
const ListOrderedIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("list-ordered", [["path", { "d": "m3 4 1.5-1V7m-1.5 3c0-1 3-1.5 3 .3 0 1.1-3 1.8-3 3.2h3m-3 3.7c1.5-1 3 .1 2 1.3 1.6 1.1.1 3-2 2M10 5h10M10 12h10M10 19h10" }]]);
var list_ordered_default = ListOrderedIcon;
