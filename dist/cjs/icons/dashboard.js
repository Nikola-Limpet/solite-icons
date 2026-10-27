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
var dashboard_exports = {};
__export(dashboard_exports, {
  DashboardIcon: () => DashboardIcon,
  default: () => dashboard_default
});
module.exports = __toCommonJS(dashboard_exports);
var import_create_icon = require("../create-icon.js");
const DashboardIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("dashboard", [["rect", { "x": 3, "y": 3, "width": 7, "height": 8, "rx": 2 }], ["rect", { "x": 14, "y": 3, "width": 7, "height": 4.5, "rx": 2 }], ["rect", { "x": 3, "y": 15, "width": 7, "height": 6, "rx": 2 }], ["rect", { "x": 14, "y": 11.5, "width": 7, "height": 9.5, "rx": 2 }]]);
var dashboard_default = DashboardIcon;
