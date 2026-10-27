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
var wand_exports = {};
__export(wand_exports, {
  WandIcon: () => WandIcon,
  default: () => wand_default
});
module.exports = __toCommonJS(wand_exports);
var import_create_icon = require("../create-icon.js");
const WandIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("wand", [["path", { "d": "m4 17 11-11a2.1 2.1 0 0 1 3 3L7 20a2.1 2.1 0 0 1-3-3Zm8-8 3 3M16 2v1.5m4 3H22M20 2.5l-1 1M10.5 3l1.5 1.5M20 11l1.5 1.5" }]]);
var wand_default = WandIcon;
