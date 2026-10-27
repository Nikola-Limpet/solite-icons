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
var plug_exports = {};
__export(plug_exports, {
  PlugIcon: () => PlugIcon,
  default: () => plug_default
});
module.exports = __toCommonJS(plug_exports);
var import_create_icon = require("../create-icon.js");
const PlugIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("plug", [["path", { "d": "M8 3v5m8-5v5M6 8h12v5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V8Zm6 10v3" }]]);
var plug_default = PlugIcon;
