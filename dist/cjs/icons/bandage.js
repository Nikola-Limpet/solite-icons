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
var bandage_exports = {};
__export(bandage_exports, {
  BandageIcon: () => BandageIcon,
  default: () => bandage_default
});
module.exports = __toCommonJS(bandage_exports);
var import_create_icon = require("../create-icon.js");
const BandageIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("bandage", [["path", { "d": "m4 12 8-8a5.7 5.7 0 0 1 8 8l-8 8a5.7 5.7 0 0 1-8-8Z" }], ["polyline", { "points": "7.5 11.5 11.5 7.5 16.5 12.5 12.5 16.5 7.5 11.5" }], ["path", { "d": "m6 16 .5.5m11-11 .5.5" }]]);
var bandage_default = BandageIcon;
