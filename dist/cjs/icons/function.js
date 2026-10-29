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
var function_exports = {};
__export(function_exports, {
  FunctionIcon: () => FunctionIcon,
  default: () => function_default
});
module.exports = __toCommonJS(function_exports);
var import_create_icon = require("../create-icon.js");
const FunctionIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("function", [["path", { "d": "M12 4h-1a3 3 0 0 0-3 3v11a3 3 0 0 1-3 3H4M5 10h7m4.5-4c-2.5 3-2.5 9 0 12m4-12c2.5 3 2.5 9 0 12" }]]);
var function_default = FunctionIcon;
