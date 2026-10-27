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
var code_exports = {};
__export(code_exports, {
  CodeIcon: () => CodeIcon,
  default: () => code_default
});
module.exports = __toCommonJS(code_exports);
var import_create_icon = require("../create-icon.js");
const CodeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("code", [["path", { "d": "m7.5 6.5-5 5.5 5 5.5m9-11 5 5.5-5 5.5M14.5 3.5l-5 17" }]]);
var code_default = CodeIcon;
