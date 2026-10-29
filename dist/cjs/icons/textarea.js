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
var textarea_exports = {};
__export(textarea_exports, {
  TextareaIcon: () => TextareaIcon,
  default: () => textarea_default
});
module.exports = __toCommonJS(textarea_exports);
var import_create_icon = require("../create-icon.js");
const TextareaIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("textarea", [["rect", { "x": 3.5, "y": 3.5, "width": 17, "height": 17, "rx": 2.5 }], ["path", { "d": "M7.5 8h9M7.5 12h6M15.5 17.5l2-2" }]]);
var textarea_default = TextareaIcon;
