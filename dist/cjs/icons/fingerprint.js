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
var fingerprint_exports = {};
__export(fingerprint_exports, {
  FingerprintIcon: () => FingerprintIcon,
  default: () => fingerprint_default
});
module.exports = __toCommonJS(fingerprint_exports);
var import_create_icon = require("../create-icon.js");
const FingerprintIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("fingerprint", [["path", { "d": "M4 9C4 1 20 1 20 9V11" }], ["path", { "d": "M4 13V15C4 17.6 5 19.1 6.5 20.5M7.5 10C7.5 5 16.5 5 16.5 10V14.5C16.5 17.4 17.3 19 18.5 20" }], ["path", { "d": "M10.5 20.8C8.4 18.4 10.5 14.2 10.5 10.5A1.5 1.5 0 0 1 13.5 10.5V15.5C13.5 18.1 14 20 15 21" }], ["line", { "x1": 7.5, "y1": 13, "x2": 7.5, "y2": 15.5 }]]);
var fingerprint_default = FingerprintIcon;
