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
var file_lock_exports = {};
__export(file_lock_exports, {
  FileLockIcon: () => FileLockIcon,
  default: () => file_lock_default
});
module.exports = __toCommonJS(file_lock_exports);
var import_create_icon = require("../create-icon.js");
const FileLockIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("file-lock", [["path", { "d": "M9 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l6 6v2" }], ["path", { "d": "M13 3v4a2 2 0 0 0 2 2h4" }], ["rect", { "x": 12, "y": 16, "width": 9, "height": 5, "rx": 2 }], ["path", { "d": "M14 16v-2a2.5 2.5 0 0 1 5 0v2" }]]);
var file_lock_default = FileLockIcon;
