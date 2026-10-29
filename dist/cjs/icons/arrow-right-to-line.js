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
var arrow_right_to_line_exports = {};
__export(arrow_right_to_line_exports, {
  ArrowRightToLineIcon: () => ArrowRightToLineIcon,
  default: () => arrow_right_to_line_default
});
module.exports = __toCommonJS(arrow_right_to_line_exports);
var import_create_icon = require("../create-icon.js");
const ArrowRightToLineIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("arrow-right-to-line", [["path", { "d": "M20.5 4v16M3 12h13m-5-5 5 5-5 5" }]]);
var arrow_right_to_line_default = ArrowRightToLineIcon;
