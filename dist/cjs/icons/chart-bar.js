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
var chart_bar_exports = {};
__export(chart_bar_exports, {
  ChartBarIcon: () => ChartBarIcon,
  default: () => chart_bar_default
});
module.exports = __toCommonJS(chart_bar_exports);
var import_create_icon = require("../create-icon.js");
const ChartBarIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("chart-bar", [["path", { "d": "M3 4v15a2 2 0 0 0 2 2h16" }], ["path", { "d": "M7 16v-5m5 5V7m5 9V3" }]]);
var chart_bar_default = ChartBarIcon;
