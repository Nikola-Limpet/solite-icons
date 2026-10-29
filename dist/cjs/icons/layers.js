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
var layers_exports = {};
__export(layers_exports, {
  LayersIcon: () => LayersIcon,
  default: () => layers_default
});
module.exports = __toCommonJS(layers_exports);
var import_create_icon = require("../create-icon.js");
const LayersIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("layers", [["polyline", { "points": "12 2.5 22 8 12 13.5 2 8 12 2.5" }], ["path", { "d": "m3 12 9 5 9-5M3 16.5l9 5 9-5" }]]);
var layers_default = LayersIcon;
