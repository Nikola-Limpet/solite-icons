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
var shirt_exports = {};
__export(shirt_exports, {
  ShirtIcon: () => ShirtIcon,
  default: () => shirt_default
});
module.exports = __toCommonJS(shirt_exports);
var import_create_icon = require("../create-icon.js");
const ShirtIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("shirt", [["path", { "d": "m8 3-6 5 4 5 2-2v10h8V11l2 2 4-5-6-5c0 4-8 4-8 0Z" }]]);
var shirt_default = ShirtIcon;
