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
var combobox_exports = {};
__export(combobox_exports, {
  ComboboxIcon: () => ComboboxIcon,
  default: () => combobox_default
});
module.exports = __toCommonJS(combobox_exports);
var import_create_icon = require("../create-icon.js");
const ComboboxIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("combobox", [["rect", { "x": 2.5, "y": 6.5, "width": 19, "height": 11, "rx": 2.5 }], ["circle", { "cx": 7, "cy": 11, "r": 2 }], ["line", { "x1": 8.5, "y1": 12.5, "x2": 10.5, "y2": 14.5 }], ["polyline", { "points": "15 10.5 17.5 13 20 10.5" }]]);
var combobox_default = ComboboxIcon;
