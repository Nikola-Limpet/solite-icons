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
var toggle_left_exports = {};
__export(toggle_left_exports, {
  ToggleLeftIcon: () => ToggleLeftIcon,
  default: () => toggle_left_default
});
module.exports = __toCommonJS(toggle_left_exports);
var import_create_icon = require("../create-icon.js");
const ToggleLeftIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("toggle-left", [["rect", { "x": 2.5, "y": 6.5, "width": 19, "height": 11, "rx": 5.5 }], ["circle", { "cx": 8, "cy": 12, "r": 2.5 }]]);
var toggle_left_default = ToggleLeftIcon;
