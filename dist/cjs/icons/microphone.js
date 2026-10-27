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
var microphone_exports = {};
__export(microphone_exports, {
  MicrophoneIcon: () => MicrophoneIcon,
  default: () => microphone_default
});
module.exports = __toCommonJS(microphone_exports);
var import_create_icon = require("../create-icon.js");
const MicrophoneIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("microphone", [["rect", { "x": 8.5, "y": 3, "width": 7, "height": 13, "rx": 3.5 }], ["path", { "d": "M5.5 11.5v1a6.5 6.5 0 0 0 13 0v-1M12 19v2M8.5 21h7" }]]);
var microphone_default = MicrophoneIcon;
