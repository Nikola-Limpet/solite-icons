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
var spell_check_exports = {};
__export(spell_check_exports, {
  SpellCheckIcon: () => SpellCheckIcon,
  default: () => spell_check_default
});
module.exports = __toCommonJS(spell_check_exports);
var import_create_icon = require("../create-icon.js");
const SpellCheckIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("spell-check", [["path", { "d": "m3 13 3-9 3 9m-5-3h4M13 3v10m0-3.5a3 3 0 0 1 6 0v.5a3 3 0 0 1-6 0m-4 8 4 3 8-7" }]]);
var spell_check_default = SpellCheckIcon;
