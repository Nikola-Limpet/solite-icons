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
var menu_exports = {};
__export(menu_exports, {
  MenuIcon: () => MenuIcon,
  default: () => menu_default
});
module.exports = __toCommonJS(menu_exports);
var import_create_icon = require("../create-icon.js");
const MenuIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("menu", [["line", { "x1": 3, "y1": 5.5, "x2": 21, "y2": 5.5 }], ["line", { "x1": 3, "y1": 12, "x2": 21, "y2": 12 }], ["line", { "x1": 3, "y1": 18.5, "x2": 21, "y2": 18.5 }]]);
var menu_default = MenuIcon;
