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
var globe_exports = {};
__export(globe_exports, {
  GlobeIcon: () => GlobeIcon,
  default: () => globe_default
});
module.exports = __toCommonJS(globe_exports);
var import_create_icon = require("../create-icon.js");
const GlobeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("globe", [["circle", { "cx": 12, "cy": 12, "r": 9 }], ["ellipse", { "cx": 12, "cy": 12, "rx": 4, "ry": 9 }], ["line", { "x1": 3, "y1": 12, "x2": 21, "y2": 12 }], ["path", { "d": "M4.6 6.9C9 9 15 9 19.4 6.9M4.6 17.1C9 15 15 15 19.4 17.1" }]]);
var globe_default = GlobeIcon;
