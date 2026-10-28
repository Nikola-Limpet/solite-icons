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
var italic_exports = {};
__export(italic_exports, {
  ItalicIcon: () => ItalicIcon,
  default: () => italic_default
});
module.exports = __toCommonJS(italic_exports);
var import_create_icon = require("../create-icon.js");
const ItalicIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("italic", [["path", { "d": "M9 4h9M6 20h9M14.5 4l-5 16" }]]);
var italic_default = ItalicIcon;
