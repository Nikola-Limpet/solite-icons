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
var list_tree_exports = {};
__export(list_tree_exports, {
  ListTreeIcon: () => ListTreeIcon,
  default: () => list_tree_default
});
module.exports = __toCommonJS(list_tree_exports);
var import_create_icon = require("../create-icon.js");
const ListTreeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("list-tree", [["path", { "d": "M4 3.5v14h4M4 8h4M11 4h10M11 8h7M11 17.5h10M11 21h7" }]]);
var list_tree_default = ListTreeIcon;
