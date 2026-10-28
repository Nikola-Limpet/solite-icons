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
var luggage_exports = {};
__export(luggage_exports, {
  LuggageIcon: () => LuggageIcon,
  default: () => luggage_default
});
module.exports = __toCommonJS(luggage_exports);
var import_create_icon = require("../create-icon.js");
const LuggageIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("luggage", [["rect", { "x": 5, "y": 6, "width": 14, "height": 14, "rx": 2.5 }], ["path", { "d": "M9 6V2h6v4M9 10v6m6-6v6M7 20v2m10-2v2" }]]);
var luggage_default = LuggageIcon;
