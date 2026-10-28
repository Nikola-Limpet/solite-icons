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
var recursion_exports = {};
__export(recursion_exports, {
  RecursionIcon: () => RecursionIcon,
  default: () => recursion_default
});
module.exports = __toCommonJS(recursion_exports);
var import_create_icon = require("../create-icon.js");
const RecursionIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("recursion", [["path", { "d": "M6 3H3v18h3M18 3h3v18h-3M9 7H7v10h2M17 10V7h-4a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h4m-2-2 2 2-2 2" }]]);
var recursion_default = RecursionIcon;
