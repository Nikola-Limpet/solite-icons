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
var wifi_off_exports = {};
__export(wifi_off_exports, {
  WifiOffIcon: () => WifiOffIcon,
  default: () => wifi_off_default
});
module.exports = __toCommonJS(wifi_off_exports);
var import_create_icon = require("../create-icon.js");
const WifiOffIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("wifi-off", [["path", { "d": "M4 8.5a12 12 0 0 1 2-1.6m3.6-1.4A12 12 0 0 1 20.5 8.5M6.5 12a7.7 7.7 0 0 1 3.5-2m4 0a7.7 7.7 0 0 1 3.5 2m-8 3.5c1.4-1.4 3.6-1.4 5 0" }], ["circle", { "cx": 12, "cy": 19, "r": 0.6 }], ["line", { "x1": 3, "y1": 3, "x2": 21, "y2": 21 }]]);
var wifi_off_default = WifiOffIcon;
