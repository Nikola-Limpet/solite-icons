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
var chart_pie_exports = {};
__export(chart_pie_exports, {
  ChartPieIcon: () => ChartPieIcon,
  default: () => chart_pie_default
});
module.exports = __toCommonJS(chart_pie_exports);
var import_create_icon = require("../create-icon.js");
const ChartPieIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("chart-pie", [["path", { "d": "M10 3a9 9 0 1 0 11 11H10V3Z" }], ["path", { "d": "M14 3v7h7a9 9 0 0 0-7-7Z" }]]);
var chart_pie_default = ChartPieIcon;
