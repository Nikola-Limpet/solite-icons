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
var arrow_down_right_exports = {};
__export(arrow_down_right_exports, {
  ArrowDownRightIcon: () => ArrowDownRightIcon,
  default: () => arrow_down_right_default
});
module.exports = __toCommonJS(arrow_down_right_exports);
var import_create_icon = require("../create-icon.js");
const ArrowDownRightIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("arrow-down-right", [["path", { "d": "M9 19h10V9M19 19 4 4" }]]);
var arrow_down_right_default = ArrowDownRightIcon;
