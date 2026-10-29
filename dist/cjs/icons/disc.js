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
var disc_exports = {};
__export(disc_exports, {
  DiscIcon: () => DiscIcon,
  default: () => disc_default
});
module.exports = __toCommonJS(disc_exports);
var import_create_icon = require("../create-icon.js");
const DiscIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("disc", [["circle", { "cx": 12, "cy": 12, "r": 9 }], ["circle", { "cx": 12, "cy": 12, "r": 1.5 }], ["path", { "d": "M6.5 10A6 6 0 0 1 10 6.5m4 11a6 6 0 0 0 3.5-3.5" }]]);
var disc_default = DiscIcon;
