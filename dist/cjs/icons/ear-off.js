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
var ear_off_exports = {};
__export(ear_off_exports, {
  EarOffIcon: () => EarOffIcon,
  default: () => ear_off_default
});
module.exports = __toCommonJS(ear_off_exports);
var import_create_icon = require("../create-icon.js");
const EarOffIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("ear-off", [["path", { "d": "M8 3.6a7 7 0 0 1 11 7.6M5.5 8.5v1M17.6 15c-1.8 1.4-3.7 1.5-4 3.4-.5 3.5-5.8 3.8-6.7.6M11 6a3.5 3.5 0 0 1 5 3M9 11v1.8M3 3l18 18" }]]);
var ear_off_default = EarOffIcon;
