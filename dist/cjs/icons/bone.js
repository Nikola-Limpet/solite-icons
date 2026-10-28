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
var bone_exports = {};
__export(bone_exports, {
  BoneIcon: () => BoneIcon,
  default: () => bone_default
});
module.exports = __toCommonJS(bone_exports);
var import_create_icon = require("../create-icon.js");
const BoneIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("bone", [["path", { "d": "M4.3 15c-3.9-1.2-3.3-6.5.7-6.5.6-4.5 6.1-4.8 7.2-.8l3.5 3.5c4-1.1 6.9 3.6 3.5 5.8 1.1 4.3-4 6.2-6 2.7L9.7 16c-1.6 2-4.6 1.4-5.4-1Z" }]]);
var bone_default = BoneIcon;
