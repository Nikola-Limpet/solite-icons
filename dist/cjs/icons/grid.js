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
var grid_exports = {};
__export(grid_exports, {
  GridIcon: () => GridIcon,
  default: () => grid_default
});
module.exports = __toCommonJS(grid_exports);
var import_create_icon = require("../create-icon.js");
const GridIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("grid", [["rect", { "x": 3, "y": 3, "width": 6.5, "height": 6.5, "rx": 1.5 }], ["rect", { "x": 14.5, "y": 3, "width": 6.5, "height": 6.5, "rx": 1.5 }], ["rect", { "x": 3, "y": 14.5, "width": 6.5, "height": 6.5, "rx": 1.5 }], ["rect", { "x": 14.5, "y": 14.5, "width": 6.5, "height": 6.5, "rx": 1.5 }]]);
var grid_default = GridIcon;
