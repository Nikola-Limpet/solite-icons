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
var images_exports = {};
__export(images_exports, {
  ImagesIcon: () => ImagesIcon,
  default: () => images_default
});
module.exports = __toCommonJS(images_exports);
var import_create_icon = require("../create-icon.js");
const ImagesIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("images", [["rect", { "x": 3, "y": 7, "width": 14, "height": 14, "rx": 2 }], ["path", { "d": "M7 3h12a2 2 0 0 1 2 2v12" }], ["circle", { "cx": 7.5, "cy": 11.5, "r": 1 }], ["path", { "d": "m3 18 4-4 3 3 3-2 4 4" }]]);
var images_default = ImagesIcon;
