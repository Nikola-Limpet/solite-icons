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
var panel_resize_exports = {};
__export(panel_resize_exports, {
  PanelResizeIcon: () => PanelResizeIcon,
  default: () => panel_resize_default
});
module.exports = __toCommonJS(panel_resize_exports);
var import_create_icon = require("../create-icon.js");
const PanelResizeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("panel-resize", [["rect", { "x": 3, "y": 3.5, "width": 18, "height": 17, "rx": 2 }], ["path", { "d": "M12 3.5V7m0 10v3.5M6.5 12h11M9 9.5 6.5 12 9 14.5m6-5 2.5 2.5-2.5 2.5" }]]);
var panel_resize_default = PanelResizeIcon;
