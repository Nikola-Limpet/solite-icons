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
var corner_right_down_exports = {};
__export(corner_right_down_exports, {
  CornerRightDownIcon: () => CornerRightDownIcon,
  default: () => corner_right_down_default
});
module.exports = __toCommonJS(corner_right_down_exports);
var import_create_icon = require("../create-icon.js");
const CornerRightDownIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("corner-right-down", [["path", { "d": "M3.5 5H13a3 3 0 0 1 3 3v12m-5-5 5 5 5-5" }]]);
var corner_right_down_default = CornerRightDownIcon;
