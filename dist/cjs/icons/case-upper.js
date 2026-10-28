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
var case_upper_exports = {};
__export(case_upper_exports, {
  CaseUpperIcon: () => CaseUpperIcon,
  default: () => case_upper_default
});
module.exports = __toCommonJS(case_upper_exports);
var import_create_icon = require("../create-icon.js");
const CaseUpperIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("case-upper", [["path", { "d": "m2.5 19 4-14 4 14m-6.8-4h5.6M14 5h3.5a3.5 3.5 0 0 1 0 7H14m3.5 0a3.5 3.5 0 0 1 0 7H14V5" }]]);
var case_upper_default = CaseUpperIcon;
