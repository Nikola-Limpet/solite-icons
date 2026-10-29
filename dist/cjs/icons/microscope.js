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
var microscope_exports = {};
__export(microscope_exports, {
  MicroscopeIcon: () => MicroscopeIcon,
  default: () => microscope_default
});
module.exports = __toCommonJS(microscope_exports);
var import_create_icon = require("../create-icon.js");
const MicroscopeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("microscope", [["path", { "d": "m10 3 5 3-4 7-5-3 4-7Zm-1-1 2 1m2 7a5.5 5.5 0 0 1 .5 10M5 15h9M4 21h16m-9-3v3" }]]);
var microscope_default = MicroscopeIcon;
