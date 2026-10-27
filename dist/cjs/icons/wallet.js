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
var wallet_exports = {};
__export(wallet_exports, {
  WalletIcon: () => WalletIcon,
  default: () => wallet_default
});
module.exports = __toCommonJS(wallet_exports);
var import_create_icon = require("../create-icon.js");
const WalletIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("wallet", [["path", { "d": "M19 7V5a2 2 0 0 0-2-2L5 5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2M3 7h16a2 2 0 0 1 2 2v2" }], ["rect", { "x": 14, "y": 11, "width": 7, "height": 6, "rx": 1.5 }], ["line", { "x1": 17, "y1": 14, "x2": 17.01, "y2": 14 }]]);
var wallet_default = WalletIcon;
