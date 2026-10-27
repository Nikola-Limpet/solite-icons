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
var wrench_exports = {};
__export(wrench_exports, {
  WrenchIcon: () => WrenchIcon,
  default: () => wrench_default
});
module.exports = __toCommonJS(wrench_exports);
var import_create_icon = require("../create-icon.js");
const WrenchIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("wrench", [["path", { "d": "M14.5 3a6 6 0 0 0-6.4 8L3.6 15.5a3.5 3.5 0 0 0 4.9 4.9l4.5-4.5A6 6 0 0 0 21 9.5l-4 3-4.5-4.5 3-4-.9-1Z" }]]);
var wrench_default = WrenchIcon;
