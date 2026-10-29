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
var brain_exports = {};
__export(brain_exports, {
  BrainIcon: () => BrainIcon,
  default: () => brain_default
});
module.exports = __toCommonJS(brain_exports);
var import_create_icon = require("../create-icon.js");
const BrainIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("brain", [["path", { "d": "M10 3a3 3 0 0 0-5 2 4 4 0 0 0-2 7 4 4 0 0 0 2 6 3.5 3.5 0 0 0 5 3V3Zm4 0a3 3 0 0 1 5 2 4 4 0 0 1 2 7 4 4 0 0 1-2 6 3.5 3.5 0 0 1-5 3V3ZM6 8c0 2 2 3 4 2m-5 6c2-2 3-1 5 0m4-4c2 1 4 0 4-2" }]]);
var brain_default = BrainIcon;
