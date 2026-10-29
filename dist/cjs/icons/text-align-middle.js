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
var text_align_middle_exports = {};
__export(text_align_middle_exports, {
  TextAlignMiddleIcon: () => TextAlignMiddleIcon,
  default: () => text_align_middle_default
});
module.exports = __toCommonJS(text_align_middle_exports);
var import_create_icon = require("../create-icon.js");
const TextAlignMiddleIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("text-align-middle", [["path", { "d": "M7 3.5h10M4 9.5h16M7 14.5h10M7 20.5h10" }]]);
var text_align_middle_default = TextAlignMiddleIcon;
