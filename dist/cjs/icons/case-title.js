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
var case_title_exports = {};
__export(case_title_exports, {
  CaseTitleIcon: () => CaseTitleIcon,
  default: () => case_title_default
});
module.exports = __toCommonJS(case_title_exports);
var import_create_icon = require("../create-icon.js");
const CaseTitleIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("case-title", [["path", { "d": "M2.5 5h12M8.5 5v15M15 11h6m-4-3v9a3 3 0 0 0 3 3h1" }]]);
var case_title_default = CaseTitleIcon;
