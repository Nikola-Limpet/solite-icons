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
var tea_exports = {};
__export(tea_exports, {
  TeaIcon: () => TeaIcon,
  default: () => tea_default
});
module.exports = __toCommonJS(tea_exports);
var import_create_icon = require("../create-icon.js");
const TeaIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("tea", [["path", { "d": "M4 11h13l-1 6a4 4 0 0 1-4 3H9a4 4 0 0 1-4-3l-1-6Zm13 1h1a3 3 0 0 1 0 6h-2M3 22h16" }], ["path", { "d": "M11 9c-4 0-5-3-4-6 4 0 6 2 4 6Zm0 0 2-3" }]]);
var tea_default = TeaIcon;
