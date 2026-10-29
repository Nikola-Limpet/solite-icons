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
var scissors_exports = {};
__export(scissors_exports, {
  ScissorsIcon: () => ScissorsIcon,
  default: () => scissors_default
});
module.exports = __toCommonJS(scissors_exports);
var import_create_icon = require("../create-icon.js");
const ScissorsIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("scissors", [["circle", { "cx": 5.5, "cy": 6, "r": 3 }], ["circle", { "cx": 5.5, "cy": 18, "r": 3 }], ["path", { "d": "m8 7.5 12.5 12M8 16.5l12.5-12M11 10.5l3 3" }]]);
var scissors_default = ScissorsIcon;
