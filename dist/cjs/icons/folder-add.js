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
var folder_add_exports = {};
__export(folder_add_exports, {
  FolderAddIcon: () => FolderAddIcon,
  default: () => folder_add_default
});
module.exports = __toCommonJS(folder_add_exports);
var import_create_icon = require("../create-icon.js");
const FolderAddIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("folder-add", [["path", { "d": "M11 21H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4l3 3h7a2 2 0 0 1 2 2v3" }], ["line", { "x1": 3, "y1": 10, "x2": 21, "y2": 10 }], ["path", { "d": "M13 17h8m-4-4v8" }]]);
var folder_add_default = FolderAddIcon;
