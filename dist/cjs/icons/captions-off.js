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
var captions_off_exports = {};
__export(captions_off_exports, {
  CaptionsOffIcon: () => CaptionsOffIcon,
  default: () => captions_off_default
});
module.exports = __toCommonJS(captions_off_exports);
var import_create_icon = require("../create-icon.js");
const CaptionsOffIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("captions-off", [["path", { "d": "M8 5h10.5a3 3 0 0 1 3 3v7.5M16 19H5.5a3 3 0 0 1-3-3V8M6 10a3 3 0 0 0 2 5h1M15 9a3 3 0 0 1 3 .5M3 3l18 18" }]]);
var captions_off_default = CaptionsOffIcon;
