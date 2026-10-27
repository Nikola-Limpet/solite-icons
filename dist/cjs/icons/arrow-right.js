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
var arrow_right_exports = {};
__export(arrow_right_exports, {
  ArrowRightIcon: () => ArrowRightIcon,
  default: () => arrow_right_default
});
module.exports = __toCommonJS(arrow_right_exports);
var import_create_icon = require("../create-icon.js");
const ArrowRightIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("arrow-right", [["line", { "x1": 3.5, "y1": 12, "x2": 20.5, "y2": 12 }], ["polyline", { "points": "14.5,6 20.5,12 14.5,18" }]]);
var arrow_right_default = ArrowRightIcon;
