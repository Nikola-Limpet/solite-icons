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
var layout_centered_exports = {};
__export(layout_centered_exports, {
  LayoutCenteredIcon: () => LayoutCenteredIcon,
  default: () => layout_centered_default
});
module.exports = __toCommonJS(layout_centered_exports);
var import_create_icon = require("../create-icon.js");
const LayoutCenteredIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("layout-centered", [["rect", { "x": 3, "y": 3.5, "width": 18, "height": 17, "rx": 2 }], ["rect", { "x": 8, "y": 7, "width": 8, "height": 10, "rx": 1 }]]);
var layout_centered_default = LayoutCenteredIcon;
