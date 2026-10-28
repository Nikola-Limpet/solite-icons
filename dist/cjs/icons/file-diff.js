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
var file_diff_exports = {};
__export(file_diff_exports, {
  FileDiffIcon: () => FileDiffIcon,
  default: () => file_diff_default
});
module.exports = __toCommonJS(file_diff_exports);
var import_create_icon = require("../create-icon.js");
const FileDiffIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("file-diff", [["path", { "d": "M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10l-7-7Zm0 0v5a2 2 0 0 0 2 2h5M8 12h5m-2.5-2.5v5M8 18h7" }]]);
var file_diff_default = FileDiffIcon;
