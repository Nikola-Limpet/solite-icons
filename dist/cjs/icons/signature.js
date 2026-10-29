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
var signature_exports = {};
__export(signature_exports, {
  SignatureIcon: () => SignatureIcon,
  default: () => signature_default
});
module.exports = __toCommonJS(signature_exports);
var import_create_icon = require("../create-icon.js");
const SignatureIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("signature", [["path", { "d": "M3 15.5c5-2 10-12 6.5-12C6 3.5 5 17 9 16c2-.5 3.8-5 4.5-5 .8 0-1 4 0 4s2.3-2.5 3.5-2c.8.4.8 2 4 1M4 20h16" }]]);
var signature_default = SignatureIcon;
