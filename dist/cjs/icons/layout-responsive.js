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
var layout_responsive_exports = {};
__export(layout_responsive_exports, {
  LayoutResponsiveIcon: () => LayoutResponsiveIcon,
  default: () => layout_responsive_default
});
module.exports = __toCommonJS(layout_responsive_exports);
var import_create_icon = require("../create-icon.js");
const LayoutResponsiveIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("layout-responsive", [["path", { "d": "M13.5 19.5H4a2 2 0 0 1-2-2v-12a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2V7M6 8v7m4-7v7" }], ["rect", { "x": 16, "y": 10, "width": 6, "height": 11, "rx": 1.5 }], ["line", { "x1": 19, "y1": 13.5, "x2": 19, "y2": 17.5 }]]);
var layout_responsive_default = LayoutResponsiveIcon;
