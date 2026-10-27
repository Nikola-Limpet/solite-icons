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
var archive_exports = {};
__export(archive_exports, {
  ArchiveIcon: () => ArchiveIcon,
  default: () => archive_default
});
module.exports = __toCommonJS(archive_exports);
var import_create_icon = require("../create-icon.js");
const ArchiveIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("archive", [["rect", { "x": 3, "y": 4, "width": 18, "height": 5, "rx": 2 }], ["path", { "d": "M5 9v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9" }], ["line", { "x1": 9, "y1": 13, "x2": 15, "y2": 13 }]]);
var archive_default = ArchiveIcon;
