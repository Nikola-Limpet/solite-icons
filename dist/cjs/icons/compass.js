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
var compass_exports = {};
__export(compass_exports, {
  CompassIcon: () => CompassIcon,
  default: () => compass_default
});
module.exports = __toCommonJS(compass_exports);
var import_create_icon = require("../create-icon.js");
const CompassIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("compass", [["circle", { "cx": 12, "cy": 12, "r": 9 }], ["path", { "d": "M15.8 8.2L13.8 13.8L8.2 15.8L10.2 10.2Z" }], ["line", { "x1": 10.2, "y1": 10.2, "x2": 13.8, "y2": 13.8 }]]);
var compass_default = CompassIcon;
