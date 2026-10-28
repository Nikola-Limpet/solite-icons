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
var hash_exports = {};
__export(hash_exports, {
  HashIcon: () => HashIcon,
  default: () => hash_default
});
module.exports = __toCommonJS(hash_exports);
var import_create_icon = require("../create-icon.js");
const HashIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("hash", [["path", { "d": "M9 3 7 21M17 3l-2 18M3.5 8.5h18M2.5 15.5h18" }]]);
var hash_default = HashIcon;
