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
var volume_exports = {};
__export(volume_exports, {
  VolumeIcon: () => VolumeIcon,
  default: () => volume_default
});
module.exports = __toCommonJS(volume_exports);
var import_create_icon = require("../create-icon.js");
const VolumeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("volume", [["path", { "d": "M4.5 9H8l5-5v16l-5-5H4.5A1.5 1.5 0 0 1 3 13.5v-3A1.5 1.5 0 0 1 4.5 9Z" }], ["path", { "d": "M16.5 8a6 6 0 0 1 0 8m2.5-11a10 10 0 0 1 0 14" }]]);
var volume_default = VolumeIcon;
