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
var shower_exports = {};
__export(shower_exports, {
  ShowerIcon: () => ShowerIcon,
  default: () => shower_default
});
module.exports = __toCommonJS(shower_exports);
var import_create_icon = require("../create-icon.js");
const ShowerIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("shower", [["path", { "d": "M4 21V7a4 4 0 0 1 7-2l2 2m-3 3 6-6 4 4-6 6-4-4Zm3 8 1 2m3-5 1 2m3-5 1 2" }]]);
var shower_default = ShowerIcon;
