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
var bicycle_exports = {};
__export(bicycle_exports, {
  BicycleIcon: () => BicycleIcon,
  default: () => bicycle_default
});
module.exports = __toCommonJS(bicycle_exports);
var import_create_icon = require("../create-icon.js");
const BicycleIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("bicycle", [["circle", { "cx": 5.5, "cy": 16.5, "r": 4 }], ["circle", { "cx": 18.5, "cy": 16.5, "r": 4 }], ["path", { "d": "m5.5 16.5 4-9 5 9h-9Zm4-9h7l2 9m-3-13h2.5l1 2M7.5 5h4" }]]);
var bicycle_default = BicycleIcon;
