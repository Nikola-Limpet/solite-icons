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
var fog_exports = {};
__export(fog_exports, {
  FogIcon: () => FogIcon,
  default: () => fog_default
});
module.exports = __toCommonJS(fog_exports);
var import_create_icon = require("../create-icon.js");
const FogIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("fog", [["path", { "d": "M4 9.5a3.5 3.5 0 0 1 3-5.2A5 5 0 0 1 16.5 5.5 3 3 0 0 1 21 8.5M3 12h18M5 16h14M3 20h15" }]]);
var fog_default = FogIcon;
