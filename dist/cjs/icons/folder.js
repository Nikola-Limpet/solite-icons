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
var folder_exports = {};
__export(folder_exports, {
  FolderIcon: () => FolderIcon,
  default: () => folder_default
});
module.exports = __toCommonJS(folder_exports);
var import_create_icon = require("../create-icon.js");
const FolderIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("folder", [["path", { "d": "M3 8V6a2 2 0 0 1 2-2h4l3 3h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z" }], ["line", { "x1": 3, "y1": 10, "x2": 21, "y2": 10 }]]);
var folder_default = FolderIcon;
