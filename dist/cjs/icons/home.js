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
var home_exports = {};
__export(home_exports, {
  HomeIcon: () => HomeIcon,
  default: () => home_default
});
module.exports = __toCommonJS(home_exports);
var import_create_icon = require("../create-icon.js");
const HomeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("home", [["polyline", { "points": "2.75,11 12,3 21.25,11" }], ["path", { "d": "M5 9.1V21H9.5V14H14.5V21H19V9.1" }]]);
var home_default = HomeIcon;
