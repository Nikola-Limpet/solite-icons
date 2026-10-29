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
var apple_exports = {};
__export(apple_exports, {
  AppleIcon: () => AppleIcon,
  default: () => apple_default
});
module.exports = __toCommonJS(apple_exports);
var import_create_icon = require("../create-icon.js");
const AppleIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("apple", [["path", { "d": "M12 7C6 2 1 8 4 15c3 8 5 6 8 6s5 2 8-6c3-7-2-13-8-8ZM12 7c-1-2-1-4-3-5m4 3c0-3 3-4 6-3-1 3-3 4-6 3Z" }]]);
var apple_default = AppleIcon;
