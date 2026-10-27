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
var flag_exports = {};
__export(flag_exports, {
  FlagIcon: () => FlagIcon,
  default: () => flag_default
});
module.exports = __toCommonJS(flag_exports);
var import_create_icon = require("../create-icon.js");
const FlagIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("flag", [["path", { "d": "M5 21V3h7l2 2h6v10h-7l-2-2H5" }]]);
var flag_default = FlagIcon;
