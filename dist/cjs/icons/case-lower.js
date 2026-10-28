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
var case_lower_exports = {};
__export(case_lower_exports, {
  CaseLowerIcon: () => CaseLowerIcon,
  default: () => case_lower_default
});
module.exports = __toCommonJS(case_lower_exports);
var import_create_icon = require("../create-icon.js");
const CaseLowerIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("case-lower", [["path", { "d": "M10 11v8m0-6a3.5 3.5 0 0 0-7 0v2.5a3.5 3.5 0 0 0 7 0M14 5v14m0-5.5a3.5 3.5 0 0 1 7 0v2a3.5 3.5 0 0 1-7 0" }]]);
var case_lower_default = CaseLowerIcon;
