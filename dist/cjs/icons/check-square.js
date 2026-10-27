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
var check_square_exports = {};
__export(check_square_exports, {
  CheckSquareIcon: () => CheckSquareIcon,
  default: () => check_square_default
});
module.exports = __toCommonJS(check_square_exports);
var import_create_icon = require("../create-icon.js");
const CheckSquareIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("check-square", [["rect", { "x": 3.5, "y": 3.5, "width": 17, "height": 17, "rx": 2.5 }], ["polyline", { "points": "7.5 12 10.5 15 16.5 9" }]]);
var check_square_default = CheckSquareIcon;
