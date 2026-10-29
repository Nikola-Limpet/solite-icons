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
var string_exports = {};
__export(string_exports, {
  StringIcon: () => StringIcon,
  default: () => string_default
});
module.exports = __toCommonJS(string_exports);
var import_create_icon = require("../create-icon.js");
const StringIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("string", [["path", { "d": "M3 5v4m4-4v4M17 5v4m4-4v4M6 16c2-4 4 4 6 0s4 4 6 0" }]]);
var string_default = StringIcon;
