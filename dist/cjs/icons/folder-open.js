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
var folder_open_exports = {};
__export(folder_open_exports, {
  FolderOpenIcon: () => FolderOpenIcon,
  default: () => folder_open_default
});
module.exports = __toCommonJS(folder_open_exports);
var import_create_icon = require("../create-icon.js");
const FolderOpenIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("folder-open", [["path", { "d": "M3 17V6a2 2 0 0 1 2-2h4l3 3h6a2 2 0 0 1 2 2" }], ["path", { "d": "M6 11h13.5a1.5 1.5 0 0 1 1.45 1.9l-1.7 6a1.5 1.5 0 0 1-1.45 1.1H5a2 2 0 0 1-1.94-2.48L4.5 12.2A1.5 1.5 0 0 1 6 11Z" }]]);
var folder_open_default = FolderOpenIcon;
