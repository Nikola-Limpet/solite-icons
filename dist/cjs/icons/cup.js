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
var cup_exports = {};
__export(cup_exports, {
  CupIcon: () => CupIcon,
  default: () => cup_default
});
module.exports = __toCommonJS(cup_exports);
var import_create_icon = require("../create-icon.js");
const CupIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("cup", [["path", { "d": "M6 7h12l-2 14H8L6 7ZM5 7h14M6 4h12M14 4l2-3" }], ["line", { "x1": 8, "y1": 13, "x2": 16, "y2": 13 }]]);
var cup_default = CupIcon;
