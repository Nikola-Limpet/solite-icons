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
var dependency_exports = {};
__export(dependency_exports, {
  DependencyIcon: () => DependencyIcon,
  default: () => dependency_default
});
module.exports = __toCommonJS(dependency_exports);
var import_create_icon = require("../create-icon.js");
const DependencyIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("dependency", [["rect", { "x": 3, "y": 3, "width": 8, "height": 7, "rx": 1.5 }], ["rect", { "x": 13, "y": 14, "width": 8, "height": 7, "rx": 1.5 }], ["path", { "d": "M7 10v7.5h6m-3-3 3 3-3 3M11 6.5h6V10" }]]);
var dependency_default = DependencyIcon;
