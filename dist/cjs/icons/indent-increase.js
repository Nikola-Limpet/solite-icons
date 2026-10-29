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
var indent_increase_exports = {};
__export(indent_increase_exports, {
  IndentIncreaseIcon: () => IndentIncreaseIcon,
  default: () => indent_increase_default
});
module.exports = __toCommonJS(indent_increase_exports);
var import_create_icon = require("../create-icon.js");
const IndentIncreaseIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("indent-increase", [["path", { "d": "M3 5h18M11 12h10M11 19h10M3 9l4 3-4 3M3 19h3" }]]);
var indent_increase_default = IndentIncreaseIcon;
