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
var charging_station_exports = {};
__export(charging_station_exports, {
  ChargingStationIcon: () => ChargingStationIcon,
  default: () => charging_station_default
});
module.exports = __toCommonJS(charging_station_exports);
var import_create_icon = require("../create-icon.js");
const ChargingStationIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("charging-station", [["rect", { "x": 3, "y": 3, "width": 11, "height": 18, "rx": 1.5 }], ["polyline", { "points": "9 6 6 11 11 11 8 16" }], ["path", { "d": "M14 15v1.5a3.5 3.5 0 0 0 7 0V10m-3-5h3v5h-3V5Zm.5-2v2m2-2v2M2 21h13" }]]);
var charging_station_default = ChargingStationIcon;
