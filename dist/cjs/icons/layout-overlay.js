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
var layout_overlay_exports = {};
__export(layout_overlay_exports, {
  LayoutOverlayIcon: () => LayoutOverlayIcon,
  default: () => layout_overlay_default
});
module.exports = __toCommonJS(layout_overlay_exports);
var import_create_icon = require("../create-icon.js");
const LayoutOverlayIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("layout-overlay", [["path", { "d": "M21 8V5.5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V16" }], ["rect", { "x": 7, "y": 8, "width": 15, "height": 8, "rx": 1.5 }]]);
var layout_overlay_default = LayoutOverlayIcon;
