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
var file_search_exports = {};
__export(file_search_exports, {
  FileSearchIcon: () => FileSearchIcon,
  default: () => file_search_default
});
module.exports = __toCommonJS(file_search_exports);
var import_create_icon = require("../create-icon.js");
const FileSearchIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("file-search", [["path", { "d": "M10 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l6 6v2" }], ["path", { "d": "M13 3v4a2 2 0 0 0 2 2h4" }], ["circle", { "cx": 15, "cy": 15.5, "r": 3.5 }], ["line", { "x1": 17.5, "y1": 18, "x2": 20.5, "y2": 21 }]]);
var file_search_default = FileSearchIcon;
