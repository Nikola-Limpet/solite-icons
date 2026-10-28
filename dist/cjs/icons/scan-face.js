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
var scan_face_exports = {};
__export(scan_face_exports, {
  ScanFaceIcon: () => ScanFaceIcon,
  default: () => scan_face_default
});
module.exports = __toCommonJS(scan_face_exports);
var import_create_icon = require("../create-icon.js");
const ScanFaceIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("scan-face", [["path", { "d": "M3 8V4a1 1 0 0 1 1-1h4m8 0h4a1 1 0 0 1 1 1v4m0 8v4a1 1 0 0 1-1 1h-4m-8 0H4a1 1 0 0 1-1-1v-4M8 9v1m8-1v1m-8 5a5 5 0 0 0 8 0" }]]);
var scan_face_default = ScanFaceIcon;
