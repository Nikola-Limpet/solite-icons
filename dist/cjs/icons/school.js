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
var school_exports = {};
__export(school_exports, {
  SchoolIcon: () => SchoolIcon,
  default: () => school_default
});
module.exports = __toCommonJS(school_exports);
var import_create_icon = require("../create-icon.js");
const SchoolIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("school", [["path", { "d": "M3 21V10h5V6l4-4 4 4v4h5v11H3Zm5-11v11m8-11v11M10 21v-6h4v6M5.5 14v2m13-2v2" }], ["circle", { "cx": 12, "cy": 8, "r": 1 }]]);
var school_default = SchoolIcon;
