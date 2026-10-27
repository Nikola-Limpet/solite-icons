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
var tags_exports = {};
__export(tags_exports, {
  TagsIcon: () => TagsIcon,
  default: () => tags_default
});
module.exports = __toCommonJS(tags_exports);
var import_create_icon = require("../create-icon.js");
const TagsIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("tags", [["path", { "d": "M11 3h5a2 2 0 0 1 2 2v5L9 19l-7-7 9-9Z" }], ["path", { "d": "M21 6v7l-8 8" }], ["circle", { "cx": 14, "cy": 7, "r": 1 }]]);
var tags_default = TagsIcon;
