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
var sparkles_exports = {};
__export(sparkles_exports, {
  SparklesIcon: () => SparklesIcon,
  default: () => sparkles_default
});
module.exports = __toCommonJS(sparkles_exports);
var import_create_icon = require("../create-icon.js");
const SparklesIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("sparkles", [["path", { "d": "M9 3c.9 5 2 6.1 7 7-5 .9-6.1 2-7 7-.9-5-2-6.1-7-7 5-.9 6.1-2 7-7Z" }], ["path", { "d": "M18 14c.5 2.5 1 3 3.5 3.5-2.5.5-3 1-3.5 3.5-.5-2.5-1-3-3.5-3.5 2.5-.5 3-1 3.5-3.5Z" }]]);
var sparkles_default = SparklesIcon;
