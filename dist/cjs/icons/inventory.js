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
var inventory_exports = {};
__export(inventory_exports, {
  InventoryIcon: () => InventoryIcon,
  default: () => inventory_default
});
module.exports = __toCommonJS(inventory_exports);
var import_create_icon = require("../create-icon.js");
const InventoryIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("inventory", [["rect", { "x": 3, "y": 3, "width": 18, "height": 18, "rx": 2 }], ["path", { "d": "M3 9h18m-12 0v12M6 6h.01M13 13h5m-5 4h3M6 13h.01M6 17h.01" }]]);
var inventory_default = InventoryIcon;
