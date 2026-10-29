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
var corner_right_up_exports = {};
__export(corner_right_up_exports, {
  CornerRightUpIcon: () => CornerRightUpIcon,
  default: () => corner_right_up_default
});
module.exports = __toCommonJS(corner_right_up_exports);
var import_create_icon = require("../create-icon.js");
const CornerRightUpIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("corner-right-up", [["path", { "d": "M3.5 19H13a3 3 0 0 0 3-3V4m-5 5 5-5 5 5" }]]);
var corner_right_up_default = CornerRightUpIcon;
