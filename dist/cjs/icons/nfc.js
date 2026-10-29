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
var nfc_exports = {};
__export(nfc_exports, {
  NfcIcon: () => NfcIcon,
  default: () => nfc_default
});
module.exports = __toCommonJS(nfc_exports);
var import_create_icon = require("../create-icon.js");
const NfcIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("nfc", [["path", { "d": "M5 4a12 12 0 0 1 0 16m4-12a6.5 6.5 0 0 1 0 8m10-12a12 12 0 0 0 0 16m-4-12a6.5 6.5 0 0 0 0 8" }]]);
var nfc_default = NfcIcon;
