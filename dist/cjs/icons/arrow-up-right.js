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
var arrow_up_right_exports = {};
__export(arrow_up_right_exports, {
  ArrowUpRightIcon: () => ArrowUpRightIcon,
  default: () => arrow_up_right_default
});
module.exports = __toCommonJS(arrow_up_right_exports);
var import_create_icon = require("../create-icon.js");
const ArrowUpRightIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("arrow-up-right", [["path", { "d": "M9 5h10v10M19 5 4 20" }]]);
var arrow_up_right_default = ArrowUpRightIcon;
