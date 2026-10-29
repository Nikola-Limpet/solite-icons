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
var document_template_exports = {};
__export(document_template_exports, {
  DocumentTemplateIcon: () => DocumentTemplateIcon,
  default: () => document_template_default
});
module.exports = __toCommonJS(document_template_exports);
var import_create_icon = require("../create-icon.js");
const DocumentTemplateIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("document-template", [["rect", { "x": 4.5, "y": 3, "width": 15, "height": 18, "rx": 1.5 }], ["path", { "d": "M8 7h3m2 0h3M8 11v2m0 3v1h3m3 0h2v-2m0-3v-1h-3" }]]);
var document_template_default = DocumentTemplateIcon;
