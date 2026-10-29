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
var chevrons_up_down_exports = {};
__export(chevrons_up_down_exports, {
  ChevronsUpDownIcon: () => ChevronsUpDownIcon,
  default: () => chevrons_up_down_default
});
module.exports = __toCommonJS(chevrons_up_down_exports);
var import_create_icon = require("../create-icon.js");
const ChevronsUpDownIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("chevrons-up-down", [["polyline", { "points": "7 8 12 3.5 17 8" }], ["polyline", { "points": "7 16 12 20.5 17 16" }]]);
var chevrons_up_down_default = ChevronsUpDownIcon;
