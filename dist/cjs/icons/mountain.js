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
var mountain_exports = {};
__export(mountain_exports, {
  MountainIcon: () => MountainIcon,
  default: () => mountain_default
});
module.exports = __toCommonJS(mountain_exports);
var import_create_icon = require("../create-icon.js");
const MountainIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("mountain", [["polyline", { "points": "2 21 10 4 18 21 2 21" }], ["polyline", { "points": "14.5 13.5 18 8 23 21 18 21" }], ["polyline", { "points": "7.5 9.5 10 12 12.5 9.5" }]]);
var mountain_default = MountainIcon;
