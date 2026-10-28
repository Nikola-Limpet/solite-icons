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
var ear_exports = {};
__export(ear_exports, {
  EarIcon: () => EarIcon,
  default: () => ear_default
});
module.exports = __toCommonJS(ear_exports);
var import_create_icon = require("../create-icon.js");
const EarIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("ear", [["path", { "d": "M5.5 9a7 7 0 1 1 12 5c-1.7 1.8-3.6 2.3-3.9 4.4-.5 3.5-5.8 3.8-6.7.6M9 9a3.5 3.5 0 0 1 7 0c0 2.6-3.7 2.5-3.7 5.2M9 10.5v2.3" }]]);
var ear_default = EarIcon;
