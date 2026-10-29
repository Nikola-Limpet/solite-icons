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
var umbrella_exports = {};
__export(umbrella_exports, {
  UmbrellaIcon: () => UmbrellaIcon,
  default: () => umbrella_default
});
module.exports = __toCommonJS(umbrella_exports);
var import_create_icon = require("../create-icon.js");
const UmbrellaIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("umbrella", [["path", { "d": "M2.5 11a9.5 9.5 0 0 1 19 0c-1.7-1.5-4-1.5-6.3 0-2-1.5-4.4-1.5-6.4 0-2.3-1.5-4.6-1.5-6.3 0ZM12 2v1m0 8v7a3 3 0 0 0 6 0" }]]);
var umbrella_default = UmbrellaIcon;
