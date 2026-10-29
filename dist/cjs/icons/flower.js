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
var flower_exports = {};
__export(flower_exports, {
  FlowerIcon: () => FlowerIcon,
  default: () => flower_default
});
module.exports = __toCommonJS(flower_exports);
var import_create_icon = require("../create-icon.js");
const FlowerIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("flower", [["path", { "d": "M10 8c-4-2-2-7 1-6 2-2 6 0 4 4 4 0 5 5 1 6 1 4-4 6-6 2-4 1-6-4-2-6h2Z" }], ["circle", { "cx": 12, "cy": 9, "r": 1.5 }], ["path", { "d": "M12 15v7m0-3c3 0 5-2 5-4-3 0-5 1-5 4Z" }]]);
var flower_default = FlowerIcon;
