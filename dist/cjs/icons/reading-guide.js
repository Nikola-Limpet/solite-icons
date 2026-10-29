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
var reading_guide_exports = {};
__export(reading_guide_exports, {
  ReadingGuideIcon: () => ReadingGuideIcon,
  default: () => reading_guide_default
});
module.exports = __toCommonJS(reading_guide_exports);
var import_create_icon = require("../create-icon.js");
const ReadingGuideIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("reading-guide", [["path", { "d": "M7 4.5h11M3.5 9v7H6m14.5-7v7H18M7.5 12.5h9M7 20h8" }]]);
var reading_guide_default = ReadingGuideIcon;
