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
var array_exports = {};
__export(array_exports, {
  ArrayIcon: () => ArrayIcon,
  default: () => array_default
});
module.exports = __toCommonJS(array_exports);
var import_create_icon = require("../create-icon.js");
const ArrayIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("array", [["path", { "d": "M6 4H3v16h3M18 4h3v16h-3M8 10v4m4-4v4m4-4v4" }]]);
var array_default = ArrayIcon;
