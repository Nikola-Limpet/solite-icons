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
var input_clear_exports = {};
__export(input_clear_exports, {
  InputClearIcon: () => InputClearIcon,
  default: () => input_clear_default
});
module.exports = __toCommonJS(input_clear_exports);
var import_create_icon = require("../create-icon.js");
const InputClearIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("input-clear", [["rect", { "x": 2.5, "y": 6.5, "width": 19, "height": 11, "rx": 2.5 }], ["path", { "d": "M6 12h4M13.5 6.5v11m3-7.5 3 3m0-3-3 3" }]]);
var input_clear_default = InputClearIcon;
