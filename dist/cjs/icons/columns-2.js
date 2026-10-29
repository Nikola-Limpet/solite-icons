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
var columns_2_exports = {};
__export(columns_2_exports, {
  Columns2Icon: () => Columns2Icon,
  default: () => columns_2_default
});
module.exports = __toCommonJS(columns_2_exports);
var import_create_icon = require("../create-icon.js");
const Columns2Icon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("columns-2", [["rect", { "x": 3, "y": 3.5, "width": 18, "height": 17, "rx": 2 }], ["line", { "x1": 12, "y1": 3.5, "x2": 12, "y2": 20.5 }]]);
var columns_2_default = Columns2Icon;
