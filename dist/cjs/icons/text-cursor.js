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
var text_cursor_exports = {};
__export(text_cursor_exports, {
  TextCursorIcon: () => TextCursorIcon,
  default: () => text_cursor_default
});
module.exports = __toCommonJS(text_cursor_exports);
var import_create_icon = require("../create-icon.js");
const TextCursorIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("text-cursor", [["path", { "d": "M8 3.5h8M12 3.5v17M8 20.5h8M12 12h3" }]]);
var text_cursor_default = TextCursorIcon;
