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
var image_exports = {};
__export(image_exports, {
  ImageIcon: () => ImageIcon,
  default: () => image_default
});
module.exports = __toCommonJS(image_exports);
var import_create_icon = require("../create-icon.js");
const ImageIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("image", [["rect", { "x": 3, "y": 4, "width": 18, "height": 16, "rx": 2 }], ["circle", { "cx": 8, "cy": 9, "r": 1.25 }], ["path", { "d": "m3 17 5-5 4 4 3-3 6 6" }]]);
var image_default = ImageIcon;
