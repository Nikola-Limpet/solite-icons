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
var input_otp_exports = {};
__export(input_otp_exports, {
  InputOtpIcon: () => InputOtpIcon,
  default: () => input_otp_default
});
module.exports = __toCommonJS(input_otp_exports);
var import_create_icon = require("../create-icon.js");
const InputOtpIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("input-otp", [["rect", { "x": 2, "y": 6, "width": 5, "height": 12, "rx": 1.5 }], ["rect", { "x": 9.5, "y": 6, "width": 5, "height": 12, "rx": 1.5 }], ["rect", { "x": 17, "y": 6, "width": 5, "height": 12, "rx": 1.5 }], ["circle", { "cx": 4.5, "cy": 12, "r": 0.6 }], ["line", { "x1": 12, "y1": 9.5, "x2": 12, "y2": 14.5 }]]);
var input_otp_default = InputOtpIcon;
