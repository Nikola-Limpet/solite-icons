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
var box_exports = {};
__export(box_exports, {
  BoxIcon: () => BoxIcon,
  default: () => box_default
});
module.exports = __toCommonJS(box_exports);
var import_create_icon = require("../create-icon.js");
const BoxIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("box", [["path", { "d": "m5 8 7 3 7-3M5 8l-3 4 7 3 3-4 3 4 7-3-3-4M5 8l7-3 7 3M5 13.3V19l7 3 7-3v-5.7M12 15v7" }]]);
var box_default = BoxIcon;
