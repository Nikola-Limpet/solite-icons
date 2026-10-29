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
var text_color_exports = {};
__export(text_color_exports, {
  TextColorIcon: () => TextColorIcon,
  default: () => text_color_default
});
module.exports = __toCommonJS(text_color_exports);
var import_create_icon = require("../create-icon.js");
const TextColorIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("text-color", [["path", { "d": "m6.5 15 5.5-12 5.5 12m-9-4h7" }], ["rect", { "x": 3.5, "y": 19, "width": 17, "height": 2.5, "rx": 0.5 }]]);
var text_color_default = TextColorIcon;
