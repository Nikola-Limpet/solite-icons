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
var lock_exports = {};
__export(lock_exports, {
  LockIcon: () => LockIcon,
  default: () => lock_default
});
module.exports = __toCommonJS(lock_exports);
var import_create_icon = require("../create-icon.js");
const LockIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("lock", [["rect", { "x": 4.5, "y": 10.5, "width": 15, "height": 11, "rx": 2 }], ["path", { "d": "M7.5 10.5V7A4.5 4.5 0 0 1 16.5 7V10.5" }], ["line", { "x1": 12, "y1": 15, "x2": 12, "y2": 17.5 }]]);
var lock_default = LockIcon;
