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
var file_remove_exports = {};
__export(file_remove_exports, {
  FileRemoveIcon: () => FileRemoveIcon,
  default: () => file_remove_default
});
module.exports = __toCommonJS(file_remove_exports);
var import_create_icon = require("../create-icon.js");
const FileRemoveIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("file-remove", [["path", { "d": "M10 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l6 6v3" }], ["path", { "d": "M13 3v4a2 2 0 0 0 2 2h4" }], ["line", { "x1": 13, "y1": 17, "x2": 21, "y2": 17 }]]);
var file_remove_default = FileRemoveIcon;
