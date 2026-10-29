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
var corner_down_right_exports = {};
__export(corner_down_right_exports, {
  CornerDownRightIcon: () => CornerDownRightIcon,
  default: () => corner_down_right_default
});
module.exports = __toCommonJS(corner_down_right_exports);
var import_create_icon = require("../create-icon.js");
const CornerDownRightIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("corner-down-right", [["path", { "d": "M5 3.5V13a3 3 0 0 0 3 3h12m-5-5 5 5-5 5" }]]);
var corner_down_right_default = CornerDownRightIcon;
