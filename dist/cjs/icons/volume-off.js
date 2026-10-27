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
var volume_off_exports = {};
__export(volume_off_exports, {
  VolumeOffIcon: () => VolumeOffIcon,
  default: () => volume_off_default
});
module.exports = __toCommonJS(volume_off_exports);
var import_create_icon = require("../create-icon.js");
const VolumeOffIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("volume-off", [["path", { "d": "M6 9H4.5A1.5 1.5 0 0 0 3 10.5v3A1.5 1.5 0 0 0 4.5 15H8l5 5v-6M10 7l3-3v4" }], ["line", { "x1": 3, "y1": 3, "x2": 21, "y2": 21 }]]);
var volume_off_default = VolumeOffIcon;
