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
var at_sign_exports = {};
__export(at_sign_exports, {
  AtSignIcon: () => AtSignIcon,
  default: () => at_sign_default
});
module.exports = __toCommonJS(at_sign_exports);
var import_create_icon = require("../create-icon.js");
const AtSignIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("at-sign", [["path", { "d": "M16 8v6a2 2 0 0 0 4 0v-2a8 8 0 1 0-4 6.9M16 10.5a3.5 3.5 0 1 0 0 3v-3Z" }]]);
var at_sign_default = AtSignIcon;
