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
var text_direction_ltr_exports = {};
__export(text_direction_ltr_exports, {
  TextDirectionLtrIcon: () => TextDirectionLtrIcon,
  default: () => text_direction_ltr_default
});
module.exports = __toCommonJS(text_direction_ltr_exports);
var import_create_icon = require("../create-icon.js");
const TextDirectionLtrIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("text-direction-ltr", [["path", { "d": "M14 13V3.5h-3a3 3 0 0 0 0 6h3m3-6V13M3 18h18m-4-4 4 4-4 4" }]]);
var text_direction_ltr_default = TextDirectionLtrIcon;
