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
var star_exports = {};
__export(star_exports, {
  StarIcon: () => StarIcon,
  default: () => star_default
});
module.exports = __toCommonJS(star_exports);
var import_create_icon = require("../create-icon.js");
const StarIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("star", [["polyline", { "points": "12 3 14.8 8.8 21 9.7 16.5 14.1 17.6 20.4 12 17.4 6.4 20.4 7.5 14.1 3 9.7 9.2 8.8 12 3" }]]);
var star_default = StarIcon;
