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
var boolean_exports = {};
__export(boolean_exports, {
  BooleanIcon: () => BooleanIcon,
  default: () => boolean_default
});
module.exports = __toCommonJS(boolean_exports);
var import_create_icon = require("../create-icon.js");
const BooleanIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("boolean", [["path", { "d": "M2.5 6h7M6 6v13M13 4v16M17 19V6h5M17 12h4" }]]);
var boolean_default = BooleanIcon;
