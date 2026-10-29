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
var bus_exports = {};
__export(bus_exports, {
  BusIcon: () => BusIcon,
  default: () => bus_default
});
module.exports = __toCommonJS(bus_exports);
var import_create_icon = require("../create-icon.js");
const BusIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("bus", [["rect", { "x": 5, "y": 2.5, "width": 14, "height": 17, "rx": 3 }], ["rect", { "x": 7.5, "y": 5, "width": 9, "height": 7, "rx": 1 }], ["path", { "d": "M8 16h1m6 0h1M6.5 19.5v2m11-2v2" }]]);
var bus_default = BusIcon;
