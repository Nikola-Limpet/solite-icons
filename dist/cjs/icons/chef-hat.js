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
var chef_hat_exports = {};
__export(chef_hat_exports, {
  ChefHatIcon: () => ChefHatIcon,
  default: () => chef_hat_default
});
module.exports = __toCommonJS(chef_hat_exports);
var import_create_icon = require("../create-icon.js");
const ChefHatIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("chef-hat", [["path", { "d": "M7 17v4h10v-4M7 17l-1-5a4 4 0 1 1 2-7 4.5 4.5 0 0 1 8 0 4 4 0 1 1 2 7l-1 5H7Z" }], ["path", { "d": "M9 13v4m6-4v4" }]]);
var chef_hat_default = ChefHatIcon;
