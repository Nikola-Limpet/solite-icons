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
var trend_up_exports = {};
__export(trend_up_exports, {
  TrendUpIcon: () => TrendUpIcon,
  default: () => trend_up_default
});
module.exports = __toCommonJS(trend_up_exports);
var import_create_icon = require("../create-icon.js");
const TrendUpIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("trend-up", [["path", { "d": "m3 18 6-6 4 3 8-10m-6 0h6v6" }]]);
var trend_up_default = TrendUpIcon;
