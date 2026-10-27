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
var monitor_exports = {};
__export(monitor_exports, {
  MonitorIcon: () => MonitorIcon,
  default: () => monitor_default
});
module.exports = __toCommonJS(monitor_exports);
var import_create_icon = require("../create-icon.js");
const MonitorIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("monitor", [["rect", { "x": 3, "y": 4, "width": 18, "height": 13, "rx": 2 }], ["line", { "x1": 12, "y1": 17, "x2": 12, "y2": 21 }], ["line", { "x1": 8, "y1": 21, "x2": 16, "y2": 21 }]]);
var monitor_default = MonitorIcon;
