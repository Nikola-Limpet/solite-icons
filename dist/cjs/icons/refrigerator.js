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
var refrigerator_exports = {};
__export(refrigerator_exports, {
  RefrigeratorIcon: () => RefrigeratorIcon,
  default: () => refrigerator_default
});
module.exports = __toCommonJS(refrigerator_exports);
var import_create_icon = require("../create-icon.js");
const RefrigeratorIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("refrigerator", [["rect", { "x": 5, "y": 2, "width": 14, "height": 20, "rx": 2.5 }], ["path", { "d": "M5 10h14M8 5.5v2m0 6v4" }]]);
var refrigerator_default = RefrigeratorIcon;
