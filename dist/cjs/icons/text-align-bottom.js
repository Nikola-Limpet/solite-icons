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
var text_align_bottom_exports = {};
__export(text_align_bottom_exports, {
  TextAlignBottomIcon: () => TextAlignBottomIcon,
  default: () => text_align_bottom_default
});
module.exports = __toCommonJS(text_align_bottom_exports);
var import_create_icon = require("../create-icon.js");
const TextAlignBottomIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("text-align-bottom", [["path", { "d": "M6 5.5h6M6 10.5h9M6 15.5h12M3 20.5h18" }]]);
var text_align_bottom_default = TextAlignBottomIcon;
