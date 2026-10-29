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
var leaf_exports = {};
__export(leaf_exports, {
  LeafIcon: () => LeafIcon,
  default: () => leaf_default
});
module.exports = __toCommonJS(leaf_exports);
var import_create_icon = require("../create-icon.js");
const LeafIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("leaf", [["path", { "d": "M20.5 3.5C14 2 7 4 5 9c-2 5 1 10 6 10 7 0 10-7 9.5-15.5ZM3 22l12-12m-6 6-.5-5m4 1.5 4 .5" }]]);
var leaf_default = LeafIcon;
