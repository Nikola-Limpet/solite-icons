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
var fan_exports = {};
__export(fan_exports, {
  FanIcon: () => FanIcon,
  default: () => fan_default
});
module.exports = __toCommonJS(fan_exports);
var import_create_icon = require("../create-icon.js");
const FanIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("fan", [["circle", { "cx": 12, "cy": 12, "r": 9.5 }], ["circle", { "cx": 12, "cy": 12, "r": 1.5 }], ["path", { "d": "M11 10.8c-2-3-1-7.3 2-6.8 3 .6 3.5 4-.1 6.8m.5 2c3.6-1 6.8 1 5.2 3.7-1.6 2.5-4.9 1.7-5.8-2.8m-2.1-.1c-1 3.7-4.4 5.4-5.8 2.7-1.4-2.8 1-5.2 5-3.6" }]]);
var fan_default = FanIcon;
