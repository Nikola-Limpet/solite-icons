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
var headphones_exports = {};
__export(headphones_exports, {
  HeadphonesIcon: () => HeadphonesIcon,
  default: () => headphones_default
});
module.exports = __toCommonJS(headphones_exports);
var import_create_icon = require("../create-icon.js");
const HeadphonesIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("headphones", [["path", { "d": "M4 14v-3a8 8 0 0 1 16 0v3" }], ["rect", { "x": 3, "y": 12, "width": 5, "height": 8, "rx": 2 }], ["rect", { "x": 16, "y": 12, "width": 5, "height": 8, "rx": 2 }]]);
var headphones_default = HeadphonesIcon;
