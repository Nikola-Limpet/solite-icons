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
var battery_charging_exports = {};
__export(battery_charging_exports, {
  BatteryChargingIcon: () => BatteryChargingIcon,
  default: () => battery_charging_default
});
module.exports = __toCommonJS(battery_charging_exports);
var import_create_icon = require("../create-icon.js");
const BatteryChargingIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("battery-charging", [["path", { "d": "M9 7H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4m6-10h3a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3m5-7h1v4h-1" }], ["polyline", { "points": "13 4 8 12 14 12 11 20" }]]);
var battery_charging_default = BatteryChargingIcon;
