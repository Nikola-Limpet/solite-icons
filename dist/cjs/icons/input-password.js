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
var input_password_exports = {};
__export(input_password_exports, {
  InputPasswordIcon: () => InputPasswordIcon,
  default: () => input_password_default
});
module.exports = __toCommonJS(input_password_exports);
var import_create_icon = require("../create-icon.js");
const InputPasswordIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("input-password", [["rect", { "x": 2.5, "y": 6.5, "width": 19, "height": 11, "rx": 2.5 }], ["circle", { "cx": 7, "cy": 12, "r": 1 }], ["circle", { "cx": 12, "cy": 12, "r": 1 }], ["circle", { "cx": 17, "cy": 12, "r": 1 }]]);
var input_password_default = InputPasswordIcon;
