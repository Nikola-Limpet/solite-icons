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
var file_code_exports = {};
__export(file_code_exports, {
  FileCodeIcon: () => FileCodeIcon,
  default: () => file_code_default
});
module.exports = __toCommonJS(file_code_exports);
var import_create_icon = require("../create-icon.js");
const FileCodeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("file-code", [["path", { "d": "M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10l-7-7Zm0 0v5a2 2 0 0 0 2 2h5m-10 3-2.5 3 2.5 3m4-6 2.5 3-2.5 3" }]]);
var file_code_default = FileCodeIcon;
