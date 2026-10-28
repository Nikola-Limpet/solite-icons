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
var select_exports = {};
__export(select_exports, {
  SelectIcon: () => SelectIcon,
  default: () => select_default
});
module.exports = __toCommonJS(select_exports);
var import_create_icon = require("../create-icon.js");
const SelectIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("select", [["rect", { "x": 2.5, "y": 6.5, "width": 19, "height": 11, "rx": 2.5 }], ["line", { "x1": 6, "y1": 12, "x2": 10, "y2": 12 }], ["polyline", { "points": "15 10.5 17.5 13 20 10.5" }]]);
var select_default = SelectIcon;
