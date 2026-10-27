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
var check_exports = {};
__export(check_exports, {
  CheckIcon: () => CheckIcon,
  default: () => check_default
});
module.exports = __toCommonJS(check_exports);
var import_create_icon = require("../create-icon.js");
const CheckIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("check", [["polyline", { "points": "4,12 9.25,17.25 20,6.5" }]]);
var check_default = CheckIcon;
