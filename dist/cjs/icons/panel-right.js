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
var panel_right_exports = {};
__export(panel_right_exports, {
  PanelRightIcon: () => PanelRightIcon,
  default: () => panel_right_default
});
module.exports = __toCommonJS(panel_right_exports);
var import_create_icon = require("../create-icon.js");
const PanelRightIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("panel-right", [["rect", { "x": 3, "y": 3.5, "width": 18, "height": 17, "rx": 2 }], ["line", { "x1": 15.5, "y1": 3.5, "x2": 15.5, "y2": 20.5 }], ["line", { "x1": 18.5, "y1": 7.5, "x2": 18.5, "y2": 10.5 }]]);
var panel_right_default = PanelRightIcon;
