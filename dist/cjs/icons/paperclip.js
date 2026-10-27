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
var paperclip_exports = {};
__export(paperclip_exports, {
  PaperclipIcon: () => PaperclipIcon,
  default: () => paperclip_default
});
module.exports = __toCommonJS(paperclip_exports);
var import_create_icon = require("../create-icon.js");
const PaperclipIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("paperclip", [["path", { "d": "m8 14 7-7a2.12 2.12 0 0 1 3 3l-8 8a3.54 3.54 0 0 1-5-5l8-8a4.95 4.95 0 0 1 7 7l-8 8" }]]);
var paperclip_default = PaperclipIcon;
