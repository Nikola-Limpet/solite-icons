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
var tent_exports = {};
__export(tent_exports, {
  TentIcon: () => TentIcon,
  default: () => tent_default
});
module.exports = __toCommonJS(tent_exports);
var import_create_icon = require("../create-icon.js");
const TentIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("tent", [["polyline", { "points": "3 21 12 4 21 21 3 21" }], ["path", { "d": "m10 2 2 2 2-2M8 21l4-8 4 8M1 20l2 1m18 0 2-1" }]]);
var tent_default = TentIcon;
