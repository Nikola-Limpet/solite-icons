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
var zoom_in_exports = {};
__export(zoom_in_exports, {
  ZoomInIcon: () => ZoomInIcon,
  default: () => zoom_in_default
});
module.exports = __toCommonJS(zoom_in_exports);
var import_create_icon = require("../create-icon.js");
const ZoomInIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("zoom-in", [["circle", { "cx": 10.5, "cy": 10.5, "r": 6.5 }], ["line", { "x1": 15.5, "y1": 15.5, "x2": 21, "y2": 21 }], ["line", { "x1": 7.5, "y1": 10.5, "x2": 13.5, "y2": 10.5 }], ["line", { "x1": 10.5, "y1": 7.5, "x2": 10.5, "y2": 13.5 }]]);
var zoom_in_default = ZoomInIcon;
