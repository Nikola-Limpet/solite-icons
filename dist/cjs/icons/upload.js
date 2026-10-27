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
var upload_exports = {};
__export(upload_exports, {
  UploadIcon: () => UploadIcon,
  default: () => upload_default
});
module.exports = __toCommonJS(upload_exports);
var import_create_icon = require("../create-icon.js");
const UploadIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("upload", [["path", { "d": "M4 14v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" }], ["path", { "d": "M12 15V3m-4 4 4-4 4 4" }]]);
var upload_default = UploadIcon;
