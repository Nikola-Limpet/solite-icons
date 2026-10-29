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
var captions_exports = {};
__export(captions_exports, {
  CaptionsIcon: () => CaptionsIcon,
  default: () => captions_default
});
module.exports = __toCommonJS(captions_exports);
var import_create_icon = require("../create-icon.js");
const CaptionsIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("captions", [["rect", { "x": 2.5, "y": 5, "width": 19, "height": 14, "rx": 3 }], ["path", { "d": "M10 9.5a3 3 0 1 0 0 5M18 9.5a3 3 0 1 0 0 5" }]]);
var captions_default = CaptionsIcon;
