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
var eye_exports = {};
__export(eye_exports, {
  EyeIcon: () => EyeIcon,
  default: () => eye_default
});
module.exports = __toCommonJS(eye_exports);
var import_create_icon = require("../create-icon.js");
const EyeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("eye", [["path", { "d": "M2.5 12C7 3.5 17 3.5 21.5 12C17 20.5 7 20.5 2.5 12Z" }], ["circle", { "cx": 12, "cy": 12, "r": 3 }]]);
var eye_default = EyeIcon;
