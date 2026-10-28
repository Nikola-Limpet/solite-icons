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
var tree_exports = {};
__export(tree_exports, {
  TreeIcon: () => TreeIcon,
  default: () => tree_default
});
module.exports = __toCommonJS(tree_exports);
var import_create_icon = require("../create-icon.js");
const TreeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("tree", [["path", { "d": "M9 16H6a4 4 0 0 1-1-7.9A4 4 0 0 1 8.5 4a4 4 0 0 1 7 0A4 4 0 0 1 19 8.1 4 4 0 0 1 18 16h-3M12 12v9m0-4-3-3m3 7-3 1m3-1 3 1" }]]);
var tree_default = TreeIcon;
