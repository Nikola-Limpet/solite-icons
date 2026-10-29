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
var arrow_left_right_exports = {};
__export(arrow_left_right_exports, {
  ArrowLeftRightIcon: () => ArrowLeftRightIcon,
  default: () => arrow_left_right_default
});
module.exports = __toCommonJS(arrow_left_right_exports);
var import_create_icon = require("../create-icon.js");
const ArrowLeftRightIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("arrow-left-right", [["path", { "d": "M20.5 7H3.5m4-4-4 4 4 4M3.5 17h17m-4-4 4 4-4 4" }]]);
var arrow_left_right_default = ArrowLeftRightIcon;
