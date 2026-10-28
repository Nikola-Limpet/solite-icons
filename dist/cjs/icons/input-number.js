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
var input_number_exports = {};
__export(input_number_exports, {
  InputNumberIcon: () => InputNumberIcon,
  default: () => input_number_default
});
module.exports = __toCommonJS(input_number_exports);
var import_create_icon = require("../create-icon.js");
const InputNumberIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("input-number", [["rect", { "x": 2.5, "y": 4.5, "width": 19, "height": 15, "rx": 2.5 }], ["path", { "d": "m6 9 2.5-1.5v9M6 16.5h5M14 4.5v15M14 12h7.5M16.5 8.5h3m-1.5-1.5v3M16.5 16h3" }]]);
var input_number_default = InputNumberIcon;
