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
var wind_exports = {};
__export(wind_exports, {
  WindIcon: () => WindIcon,
  default: () => wind_default
});
module.exports = __toCommonJS(wind_exports);
var import_create_icon = require("../create-icon.js");
const WindIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("wind", [["path", { "d": "M3 7h11a2.5 2.5 0 1 0-2.5-2.5M3 12h16a2.5 2.5 0 1 0-2.5-2.5M3 17h9a2.5 2.5 0 1 1-2.5 2.5" }]]);
var wind_default = WindIcon;
