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
var settings_exports = {};
__export(settings_exports, {
  SettingsIcon: () => SettingsIcon,
  default: () => settings_default
});
module.exports = __toCommonJS(settings_exports);
var import_create_icon = require("../create-icon.js");
const SettingsIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("settings", [["path", { "d": "M9.5 3H14.5L15.2 5.65L17.2 6.8L19.85 6.1L22.1 10L20.15 12L20.1 14.2L21.95 16.15L19.65 20.1L17 19.4L15.1 20.5L14.5 22H9.5L8.9 20.5L7 19.4L4.35 20.1L2.05 16.15L3.9 14.2L3.85 12L1.9 10L4.15 6.1L6.8 6.8L8.8 5.65Z" }], ["circle", { "cx": 12, "cy": 12.5, "r": 3.25 }]]);
var settings_default = SettingsIcon;
