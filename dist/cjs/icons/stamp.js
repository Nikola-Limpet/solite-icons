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
var stamp_exports = {};
__export(stamp_exports, {
  StampIcon: () => StampIcon,
  default: () => stamp_default
});
module.exports = __toCommonJS(stamp_exports);
var import_create_icon = require("../create-icon.js");
const StampIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("stamp", [["path", { "d": "M8 15v-3.5C8 9 7.5 8 7.5 6a4.5 4.5 0 0 1 9 0c0 2-.5 3-.5 5.5V15M8 12h8" }], ["rect", { "x": 3.5, "y": 15, "width": 17, "height": 5, "rx": 1.2 }], ["line", { "x1": 5.5, "y1": 22, "x2": 18.5, "y2": 22 }]]);
var stamp_default = StampIcon;
