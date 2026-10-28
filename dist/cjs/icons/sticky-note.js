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
var sticky_note_exports = {};
__export(sticky_note_exports, {
  StickyNoteIcon: () => StickyNoteIcon,
  default: () => sticky_note_default
});
module.exports = __toCommonJS(sticky_note_exports);
var import_create_icon = require("../create-icon.js");
const StickyNoteIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("sticky-note", [["path", { "d": "M20.5 14V5a2 2 0 0 0-2-2h-13a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2H14l6.5-7Zm0 0H16a2 2 0 0 0-2 2v5M7.5 8h9M7.5 12h6" }]]);
var sticky_note_default = StickyNoteIcon;
