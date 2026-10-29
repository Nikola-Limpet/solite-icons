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
var speaker_exports = {};
__export(speaker_exports, {
  SpeakerIcon: () => SpeakerIcon,
  default: () => speaker_default
});
module.exports = __toCommonJS(speaker_exports);
var import_create_icon = require("../create-icon.js");
const SpeakerIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("speaker", [["rect", { "x": 5, "y": 2.5, "width": 14, "height": 19, "rx": 2 }], ["circle", { "cx": 12, "cy": 7, "r": 1.5 }], ["circle", { "cx": 12, "cy": 15, "r": 3.5 }]]);
var speaker_default = SpeakerIcon;
