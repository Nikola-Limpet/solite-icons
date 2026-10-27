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
var coins_exports = {};
__export(coins_exports, {
  CoinsIcon: () => CoinsIcon,
  default: () => coins_default
});
module.exports = __toCommonJS(coins_exports);
var import_create_icon = require("../create-icon.js");
const CoinsIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("coins", [["ellipse", { "cx": 9, "cy": 6, "rx": 6, "ry": 3 }], ["path", { "d": "M3 6v4c0 1.7 2.7 3 6 3h1M3 10v4c0 1.7 2.7 3 6 3h1M3 14v4c0 1.7 2.7 3 6 3h1" }], ["ellipse", { "cx": 16, "cy": 13, "rx": 5, "ry": 2.5 }], ["path", { "d": "M11 13v5c0 1.4 2.2 2.5 5 2.5s5-1.1 5-2.5v-5" }]]);
var coins_default = CoinsIcon;
