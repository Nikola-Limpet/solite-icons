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
var layout_exports = {};
__export(layout_exports, {
  LayoutIcon: () => LayoutIcon,
  default: () => layout_default
});
module.exports = __toCommonJS(layout_exports);
var import_create_icon = require("../create-icon.js");
const LayoutIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("layout", [["rect", { "x": 3, "y": 3.5, "width": 18, "height": 17, "rx": 2 }], ["line", { "x1": 3, "y1": 9, "x2": 21, "y2": 9 }], ["line", { "x1": 14.5, "y1": 9, "x2": 14.5, "y2": 20.5 }]]);
var layout_default = LayoutIcon;
