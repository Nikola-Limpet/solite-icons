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
var qr_code_exports = {};
__export(qr_code_exports, {
  QrCodeIcon: () => QrCodeIcon,
  default: () => qr_code_default
});
module.exports = __toCommonJS(qr_code_exports);
var import_create_icon = require("../create-icon.js");
const QrCodeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("qr-code", [["rect", { "x": 3, "y": 3, "width": 6, "height": 6, "rx": 1 }], ["rect", { "x": 15, "y": 3, "width": 6, "height": 6, "rx": 1 }], ["rect", { "x": 3, "y": 15, "width": 6, "height": 6, "rx": 1 }], ["path", { "d": "M15 15h3v3h3m-6 3v-3m6-3v-3m-9 0h3M6 6h.01M18 6h.01M6 18h.01" }]]);
var qr_code_default = QrCodeIcon;
