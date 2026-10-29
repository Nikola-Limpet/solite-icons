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
var pill_exports = {};
__export(pill_exports, {
  PillIcon: () => PillIcon,
  default: () => pill_default
});
module.exports = __toCommonJS(pill_exports);
var import_create_icon = require("../create-icon.js");
const PillIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("pill", [["path", { "d": "M4 12.5 12.5 4a5.3 5.3 0 0 1 7.5 7.5L11.5 20A5.3 5.3 0 0 1 4 12.5Zm4-4 7.5 7.5" }]]);
var pill_default = PillIcon;
