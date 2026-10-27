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
var file_text_exports = {};
__export(file_text_exports, {
  FileTextIcon: () => FileTextIcon,
  default: () => file_text_default
});
module.exports = __toCommonJS(file_text_exports);
var import_create_icon = require("../create-icon.js");
const FileTextIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("file-text", [["path", { "d": "M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9L13 3Z" }], ["path", { "d": "M13 3v4a2 2 0 0 0 2 2h4" }], ["path", { "d": "M8 12h7m-7 4h5" }]]);
var file_text_default = FileTextIcon;
