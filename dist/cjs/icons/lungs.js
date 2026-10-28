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
var lungs_exports = {};
__export(lungs_exports, {
  LungsIcon: () => LungsIcon,
  default: () => lungs_default
});
module.exports = __toCommonJS(lungs_exports);
var import_create_icon = require("../create-icon.js");
const LungsIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("lungs", [["path", { "d": "M12 3v7m0 0-4 3m4-3 4 3M9 7c-3 0-6 6-6 11 0 3 4 3 7 1V9a2 2 0 0 0-1-2Zm6 0c3 0 6 6 6 11 0 3-4 3-7 1V9a2 2 0 0 1 1-2Z" }]]);
var lungs_default = LungsIcon;
