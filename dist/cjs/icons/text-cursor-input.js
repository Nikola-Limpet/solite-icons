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
var text_cursor_input_exports = {};
__export(text_cursor_input_exports, {
  TextCursorInputIcon: () => TextCursorInputIcon,
  default: () => text_cursor_input_default
});
module.exports = __toCommonJS(text_cursor_input_exports);
var import_create_icon = require("../create-icon.js");
const TextCursorInputIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("text-cursor-input", [["path", { "d": "M13.5 6.5H5A2.5 2.5 0 0 0 2.5 9v6A2.5 2.5 0 0 0 5 17.5h8.5M16 3.5h5M18.5 3.5v17M16 20.5h5M6 12h5" }]]);
var text_cursor_input_default = TextCursorInputIcon;
