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
var train_exports = {};
__export(train_exports, {
  TrainIcon: () => TrainIcon,
  default: () => train_default
});
module.exports = __toCommonJS(train_exports);
var import_create_icon = require("../create-icon.js");
const TrainIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("train", [["rect", { "x": 5, "y": 2.5, "width": 14, "height": 16, "rx": 4 }], ["path", { "d": "M5 10h14M12 3v7m-4 8.5L5 22m11-3.5 3 3.5M7 21h10" }], ["circle", { "cx": 12, "cy": 14.5, "r": 1.25 }]]);
var train_default = TrainIcon;
