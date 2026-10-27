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
var braces_exports = {};
__export(braces_exports, {
  BracesIcon: () => BracesIcon,
  default: () => braces_default
});
module.exports = __toCommonJS(braces_exports);
var import_create_icon = require("../create-icon.js");
const BracesIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("braces", [["path", { "d": "M8.5 3.5h-1a2 2 0 0 0-2 2v3.25C5.5 10.5 4 12 2.5 12c1.5 0 3 1.5 3 3.25v3.25a2 2 0 0 0 2 2h1m7-17h1a2 2 0 0 1 2 2v3.25c0 1.75 1.5 3.25 3 3.25-1.5 0-3 1.5-3 3.25v3.25a2 2 0 0 1-2 2h-1" }]]);
var braces_default = BracesIcon;
