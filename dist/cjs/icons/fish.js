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
var fish_exports = {};
__export(fish_exports, {
  FishIcon: () => FishIcon,
  default: () => fish_default
});
module.exports = __toCommonJS(fish_exports);
var import_create_icon = require("../create-icon.js");
const FishIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("fish", [["path", { "d": "M3 12c4-8 10-8 15-2l4-4v12l-4-4C13 20 7 20 3 12ZM13 7c-2 3-2 7 0 10" }], ["circle", { "cx": 7, "cy": 11.5, "r": 0.5 }]]);
var fish_default = FishIcon;
