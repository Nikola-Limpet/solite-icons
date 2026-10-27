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
var map_exports = {};
__export(map_exports, {
  MapIcon: () => MapIcon,
  default: () => map_default
});
module.exports = __toCommonJS(map_exports);
var import_create_icon = require("../create-icon.js");
const MapIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("map", [["polyline", { "points": "3,5.5 9,3 15,5.5 21,3 21,18.5 15,21 9,18.5 3,21 3,5.5" }], ["line", { "x1": 9, "y1": 3, "x2": 9, "y2": 18.5 }], ["line", { "x1": 15, "y1": 5.5, "x2": 15, "y2": 21 }]]);
var map_default = MapIcon;
