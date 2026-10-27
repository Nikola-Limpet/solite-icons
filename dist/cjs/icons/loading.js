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
var loading_exports = {};
__export(loading_exports, {
  LoadingIcon: () => LoadingIcon,
  default: () => loading_default
});
module.exports = __toCommonJS(loading_exports);
var import_create_icon = require("../create-icon.js");
const LoadingIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("loading", [["path", { "d": "M20 12a8 8 0 1 1-8-8" }], ["line", { "x1": 12, "y1": 2.5, "x2": 12, "y2": 5.5 }]]);
var loading_default = LoadingIcon;
