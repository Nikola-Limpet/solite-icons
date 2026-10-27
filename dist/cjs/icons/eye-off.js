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
var eye_off_exports = {};
__export(eye_off_exports, {
  EyeOffIcon: () => EyeOffIcon,
  default: () => eye_off_default
});
module.exports = __toCommonJS(eye_off_exports);
var import_create_icon = require("../create-icon.js");
const EyeOffIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("eye-off", [["path", { "d": "M9 5.8C14 4.2 18.8 7.1 21.5 12C20.5 13.8 19.3 15.2 17.8 16.2M14.5 18C9.8 19.1 5.1 16.5 2.5 12C3.5 10.2 4.8 8.7 6.3 7.7" }], ["path", { "d": "M10 9.8A3 3 0 0 0 14.2 14" }], ["line", { "x1": 3, "y1": 3, "x2": 21, "y2": 21 }]]);
var eye_off_default = EyeOffIcon;
