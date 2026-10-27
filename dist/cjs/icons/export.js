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
var export_exports = {};
__export(export_exports, {
  ExportIcon: () => ExportIcon,
  default: () => export_default
});
module.exports = __toCommonJS(export_exports);
var import_create_icon = require("../create-icon.js");
const ExportIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("export", [["path", { "d": "M12 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6" }], ["path", { "d": "M9 12h12m-4-4 4 4-4 4" }]]);
var export_default = ExportIcon;
