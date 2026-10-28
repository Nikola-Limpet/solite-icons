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
var syringe_exports = {};
__export(syringe_exports, {
  SyringeIcon: () => SyringeIcon,
  default: () => syringe_default
});
module.exports = __toCommonJS(syringe_exports);
var import_create_icon = require("../create-icon.js");
const SyringeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("syringe", [["path", { "d": "m9 5 10 10m-9-9-6 6 8 8 6-6M5 13l-3 3m7 2-3 3m1-1-4 3m11-16 4-4m-2-2 6 6m-9 4 2 2" }]]);
var syringe_default = SyringeIcon;
