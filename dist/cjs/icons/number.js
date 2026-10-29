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
var number_exports = {};
__export(number_exports, {
  NumberIcon: () => NumberIcon,
  default: () => number_default
});
module.exports = __toCommonJS(number_exports);
var import_create_icon = require("../create-icon.js");
const NumberIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("number", [["path", { "d": "m3 7 4-3v16M3 20h8M14 7a3.5 3.5 0 0 1 7 0c0 4-7 7-7 13h7" }]]);
var number_default = NumberIcon;
