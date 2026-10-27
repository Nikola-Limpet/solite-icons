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
var wifi_exports = {};
__export(wifi_exports, {
  WifiIcon: () => WifiIcon,
  default: () => wifi_default
});
module.exports = __toCommonJS(wifi_exports);
var import_create_icon = require("../create-icon.js");
const WifiIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("wifi", [["path", { "d": "M3.5 8.5c4.7-4.7 12.3-4.7 17 0M6.5 12c3-3 8-3 11 0m-8 3.5c1.4-1.4 3.6-1.4 5 0" }], ["circle", { "cx": 12, "cy": 19, "r": 0.6 }]]);
var wifi_default = WifiIcon;
