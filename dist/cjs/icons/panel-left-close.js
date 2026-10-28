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
var panel_left_close_exports = {};
__export(panel_left_close_exports, {
  PanelLeftCloseIcon: () => PanelLeftCloseIcon,
  default: () => panel_left_close_default
});
module.exports = __toCommonJS(panel_left_close_exports);
var import_create_icon = require("../create-icon.js");
const PanelLeftCloseIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("panel-left-close", [["rect", { "x": 3, "y": 3.5, "width": 18, "height": 17, "rx": 2 }], ["line", { "x1": 8.5, "y1": 3.5, "x2": 8.5, "y2": 20.5 }], ["polyline", { "points": "17 8.5 13.5 12 17 15.5" }]]);
var panel_left_close_default = PanelLeftCloseIcon;
