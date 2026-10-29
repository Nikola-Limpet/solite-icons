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
var cable_exports = {};
__export(cable_exports, {
  CableIcon: () => CableIcon,
  default: () => cable_default
});
module.exports = __toCommonJS(cable_exports);
var import_create_icon = require("../create-icon.js");
const CableIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("cable", [["path", { "d": "M6 9v5a5 5 0 0 0 10 0v-1M4 3v2m4-2v2M14 5h6v5h-6zM16 10v3h2v-3" }], ["rect", { "x": 3, "y": 5, "width": 6, "height": 4, "rx": 1 }]]);
var cable_default = CableIcon;
