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
var map_pin_exports = {};
__export(map_pin_exports, {
  MapPinIcon: () => MapPinIcon,
  default: () => map_pin_default
});
module.exports = __toCommonJS(map_pin_exports);
var import_create_icon = require("../create-icon.js");
const MapPinIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("map-pin", [["path", { "d": "M19 9.5C19 15 12 21 12 21C12 21 5 15 5 9.5A7 7 0 0 1 19 9.5Z" }], ["circle", { "cx": 12, "cy": 9.5, "r": 2.5 }]]);
var map_pin_default = MapPinIcon;
