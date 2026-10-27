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
var bread_exports = {};
__export(bread_exports, {
  BreadIcon: () => BreadIcon,
  default: () => bread_default
});
module.exports = __toCommonJS(bread_exports);
var import_create_icon = require("../create-icon.js");
const BreadIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("bread", [["path", { "d": "M7 7a5 5 0 0 1 10 0 4 4 0 0 1 2 7v5a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-5a4 4 0 0 1 2-7Z" }], ["path", { "d": "m9 9 1 3m4-3 1 3M8 17h8" }]]);
var bread_default = BreadIcon;
