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
var stop_circle_exports = {};
__export(stop_circle_exports, {
  StopCircleIcon: () => StopCircleIcon,
  default: () => stop_circle_default
});
module.exports = __toCommonJS(stop_circle_exports);
var import_create_icon = require("../create-icon.js");
const StopCircleIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("stop-circle", [["circle", { "cx": 12, "cy": 12, "r": 9 }], ["rect", { "x": 8.5, "y": 8.5, "width": 7, "height": 7, "rx": 1 }]]);
var stop_circle_default = StopCircleIcon;
