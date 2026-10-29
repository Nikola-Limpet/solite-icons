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
var security_camera_exports = {};
__export(security_camera_exports, {
  SecurityCameraIcon: () => SecurityCameraIcon,
  default: () => security_camera_default
});
module.exports = __toCommonJS(security_camera_exports);
var import_create_icon = require("../create-icon.js");
const SecurityCameraIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("security-camera", [["path", { "d": "m4 4 15 4-2.5 8L2 12l2-8Zm13.4 8.5 3.6 1 .8-3-3.6-1M8 14l-1 4h7v3m-2 0h4" }]]);
var security_camera_default = SecurityCameraIcon;
