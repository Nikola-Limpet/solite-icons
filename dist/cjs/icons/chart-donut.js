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
var chart_donut_exports = {};
__export(chart_donut_exports, {
  ChartDonutIcon: () => ChartDonutIcon,
  default: () => chart_donut_default
});
module.exports = __toCommonJS(chart_donut_exports);
var import_create_icon = require("../create-icon.js");
const ChartDonutIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("chart-donut", [["path", { "d": "M10 3.2a9 9 0 1 0 10.8 10.8h-4.2a5 5 0 1 1-6.6-6.6V3.2Z" }], ["path", { "d": "M14 3.2v4.2a5 5 0 0 1 2.6 2.6h4.2A9 9 0 0 0 14 3.2Z" }]]);
var chart_donut_default = ChartDonutIcon;
