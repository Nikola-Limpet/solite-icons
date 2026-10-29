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
var cast_exports = {};
__export(cast_exports, {
  CastIcon: () => CastIcon,
  default: () => cast_default
});
module.exports = __toCommonJS(cast_exports);
var import_create_icon = require("../create-icon.js");
const CastIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("cast", [["path", { "d": "M3 8V5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-7M3 11a10 10 0 0 1 10 10M3 16a5 5 0 0 1 5 5" }], ["circle", { "cx": 3.5, "cy": 20.5, "r": 0.5 }]]);
var cast_default = CastIcon;
