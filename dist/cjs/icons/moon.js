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
var moon_exports = {};
__export(moon_exports, {
  MoonIcon: () => MoonIcon,
  default: () => moon_default
});
module.exports = __toCommonJS(moon_exports);
var import_create_icon = require("../create-icon.js");
const MoonIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("moon", [["path", { "d": "M20.5 13a8.6 8.6 0 1 1-9.5-9.5A7 7 0 0 0 20.5 13Z" }]]);
var moon_default = MoonIcon;
