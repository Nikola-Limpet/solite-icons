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
var organization_chart_exports = {};
__export(organization_chart_exports, {
  OrganizationChartIcon: () => OrganizationChartIcon,
  default: () => organization_chart_default
});
module.exports = __toCommonJS(organization_chart_exports);
var import_create_icon = require("../create-icon.js");
const OrganizationChartIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("organization-chart", [["rect", { "x": 8.5, "y": 2.5, "width": 7, "height": 5, "rx": 1 }], ["path", { "d": "M12 7.5V12M5 16v-4h14v4M12 12v4" }], ["rect", { "x": 2.5, "y": 16, "width": 5, "height": 5, "rx": 1.5 }], ["rect", { "x": 9.5, "y": 16, "width": 5, "height": 5, "rx": 1.5 }], ["rect", { "x": 16.5, "y": 16, "width": 5, "height": 5, "rx": 1.5 }]]);
var organization_chart_default = OrganizationChartIcon;
