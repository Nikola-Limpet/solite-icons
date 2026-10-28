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
var vault_exports = {};
__export(vault_exports, {
  VaultIcon: () => VaultIcon,
  default: () => vault_default
});
module.exports = __toCommonJS(vault_exports);
var import_create_icon = require("../create-icon.js");
const VaultIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("vault", [["rect", { "x": 3, "y": 3, "width": 18, "height": 18, "rx": 2.5 }], ["rect", { "x": 7, "y": 6, "width": 11, "height": 12, "rx": 1 }], ["path", { "d": "M5 7h2m-2 10h2m5.5-5 2-3.5m-2 3.5h4m-4 0-2 3.5" }], ["circle", { "cx": 12.5, "cy": 12, "r": 1 }]]);
var vault_default = VaultIcon;
