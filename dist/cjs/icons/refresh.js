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
var refresh_exports = {};
__export(refresh_exports, {
  RefreshIcon: () => RefreshIcon,
  default: () => refresh_default
});
module.exports = __toCommonJS(refresh_exports);
var import_create_icon = require("../create-icon.js");
const RefreshIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("refresh", [["path", { "d": "M20.5 10A8.5 8.5 0 0 0 6 5.7L3 8.5M3.5 14A8.5 8.5 0 0 0 18 18.3L21 15.5" }], ["polyline", { "points": "3,3.5 3,8.5 8,8.5" }], ["polyline", { "points": "16,15.5 21,15.5 21,20.5" }]]);
var refresh_default = RefreshIcon;
