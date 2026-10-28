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
var speech_exports = {};
__export(speech_exports, {
  SpeechIcon: () => SpeechIcon,
  default: () => speech_default
});
module.exports = __toCommonJS(speech_exports);
var import_create_icon = require("../create-icon.js");
const SpeechIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("speech", [["path", { "d": "M8 21v-4a6.7 6.7 0 1 1 7.5-6.7L17 13h-3v4H11M19.5 8.5l2-1M19.5 13.5l2 1" }]]);
var speech_default = SpeechIcon;
