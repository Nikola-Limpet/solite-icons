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
var chart_line_exports = {};
__export(chart_line_exports, {
  ChartLineIcon: () => ChartLineIcon,
  default: () => chart_line_default
});
module.exports = __toCommonJS(chart_line_exports);
var import_create_icon = require("../create-icon.js");
const ChartLineIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("chart-line", [["path", { "d": "M3 4v15a2 2 0 0 0 2 2h16" }], ["path", { "d": "m6 15 4-5 4 3 6-8" }]]);
var chart_line_default = ChartLineIcon;
