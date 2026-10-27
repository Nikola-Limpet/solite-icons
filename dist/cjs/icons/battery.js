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
var battery_exports = {};
__export(battery_exports, {
  BatteryIcon: () => BatteryIcon,
  default: () => battery_default
});
module.exports = __toCommonJS(battery_exports);
var import_create_icon = require("../create-icon.js");
const BatteryIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("battery", [["rect", { "x": 3, "y": 7, "width": 17, "height": 10, "rx": 2 }], ["path", { "d": "M20 10h1v4h-1" }], ["line", { "x1": 7, "y1": 10, "x2": 7, "y2": 14 }], ["line", { "x1": 10, "y1": 10, "x2": 10, "y2": 14 }], ["line", { "x1": 13, "y1": 10, "x2": 13, "y2": 14 }]]);
var battery_default = BatteryIcon;
