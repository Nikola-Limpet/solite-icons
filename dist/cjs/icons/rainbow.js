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
var rainbow_exports = {};
__export(rainbow_exports, {
  RainbowIcon: () => RainbowIcon,
  default: () => rainbow_default
});
module.exports = __toCommonJS(rainbow_exports);
var import_create_icon = require("../create-icon.js");
const RainbowIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("rainbow", [["path", { "d": "M2 20v-3a10 10 0 0 1 20 0v3M6 20v-3a6 6 0 0 1 12 0v3M10 20v-3a2 2 0 0 1 4 0v3" }]]);
var rainbow_default = RainbowIcon;
