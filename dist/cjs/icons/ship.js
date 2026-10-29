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
var ship_exports = {};
__export(ship_exports, {
  ShipIcon: () => ShipIcon,
  default: () => ship_default
});
module.exports = __toCommonJS(ship_exports);
var import_create_icon = require("../create-icon.js");
const ShipIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("ship", [["path", { "d": "M6 12V6h12v6M9 6V3h6v3M3 14l9-4 9 4-3 5H6l-3-5Zm9-4v9M3 22c2 0 2-1 4-1s2 1 5 1 3-1 5-1 2 1 4 1" }]]);
var ship_default = ShipIcon;
