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
var info_exports = {};
__export(info_exports, {
  InfoIcon: () => InfoIcon,
  default: () => info_default
});
module.exports = __toCommonJS(info_exports);
var import_create_icon = require("../create-icon.js");
const InfoIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("info", [["circle", { "cx": 12, "cy": 12, "r": 9 }], ["line", { "x1": 12, "y1": 11, "x2": 12, "y2": 17 }], ["line", { "x1": 12, "y1": 7, "x2": 12, "y2": 7.01 }]]);
var info_default = InfoIcon;
