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
var magnet_exports = {};
__export(magnet_exports, {
  MagnetIcon: () => MagnetIcon,
  default: () => magnet_default
});
module.exports = __toCommonJS(magnet_exports);
var import_create_icon = require("../create-icon.js");
const MagnetIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("magnet", [["path", { "d": "M4 4h5v9a3 3 0 0 0 6 0V4h5v9a8 8 0 0 1-16 0V4Zm0 5h5m6 0h5" }]]);
var magnet_default = MagnetIcon;
