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
var seating_exports = {};
__export(seating_exports, {
  SeatingIcon: () => SeatingIcon,
  default: () => seating_default
});
module.exports = __toCommonJS(seating_exports);
var import_create_icon = require("../create-icon.js");
const SeatingIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("seating", [["rect", { "x": 6, "y": 3, "width": 12, "height": 9, "rx": 2 }], ["path", { "d": "M4 10v7h16v-7M6 17v4m12-4v4M4 14h16" }]]);
var seating_default = SeatingIcon;
