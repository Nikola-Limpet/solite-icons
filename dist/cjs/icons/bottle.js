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
var bottle_exports = {};
__export(bottle_exports, {
  BottleIcon: () => BottleIcon,
  default: () => bottle_default
});
module.exports = __toCommonJS(bottle_exports);
var import_create_icon = require("../create-icon.js");
const BottleIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("bottle", [["rect", { "x": 10, "y": 2, "width": 4, "height": 3, "rx": 1 }], ["path", { "d": "M10 5v3l-3 4v7a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-7l-3-4V5M7 13h10m-10 5h10" }]]);
var bottle_default = BottleIcon;
