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
var files_exports = {};
__export(files_exports, {
  FilesIcon: () => FilesIcon,
  default: () => files_default
});
module.exports = __toCommonJS(files_exports);
var import_create_icon = require("../create-icon.js");
const FilesIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("files", [["path", { "d": "M8 3H5a2 2 0 0 0-2 2v12" }], ["path", { "d": "M15 6H9a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7L15 6Z" }], ["path", { "d": "M15 6v4a2 2 0 0 0 2 2h4" }]]);
var files_default = FilesIcon;
