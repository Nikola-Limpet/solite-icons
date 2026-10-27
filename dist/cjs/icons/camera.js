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
var camera_exports = {};
__export(camera_exports, {
  CameraIcon: () => CameraIcon,
  default: () => camera_default
});
module.exports = __toCommonJS(camera_exports);
var import_create_icon = require("../create-icon.js");
const CameraIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("camera", [["rect", { "x": 3, "y": 7, "width": 18, "height": 13, "rx": 2 }], ["path", { "d": "m8 7 1.5-3h5L16 7" }], ["circle", { "cx": 12, "cy": 13.5, "r": 3.25 }], ["line", { "x1": 17.5, "y1": 10, "x2": 18, "y2": 10 }]]);
var camera_default = CameraIcon;
