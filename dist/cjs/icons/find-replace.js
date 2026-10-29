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
var find_replace_exports = {};
__export(find_replace_exports, {
  FindReplaceIcon: () => FindReplaceIcon,
  default: () => find_replace_default
});
module.exports = __toCommonJS(find_replace_exports);
var import_create_icon = require("../create-icon.js");
const FindReplaceIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("find-replace", [["circle", { "cx": 7, "cy": 7, "r": 4 }], ["path", { "d": "m10 10 4 4M17 4h4m-2-2 2 2-2 2M3 19h4m-2-2-2 2 2 2M13 17h8v4h-8z" }]]);
var find_replace_default = FindReplaceIcon;
