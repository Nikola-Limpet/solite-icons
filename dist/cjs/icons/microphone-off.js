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
var microphone_off_exports = {};
__export(microphone_off_exports, {
  MicrophoneOffIcon: () => MicrophoneOffIcon,
  default: () => microphone_off_default
});
module.exports = __toCommonJS(microphone_off_exports);
var import_create_icon = require("../create-icon.js");
const MicrophoneOffIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("microphone-off", [["path", { "d": "M8.5 4.5A3.5 3.5 0 0 1 15.5 6v4M8.5 9v3.5a3.5 3.5 0 0 0 5.5 2.9M5.5 11.5v1a6.5 6.5 0 0 0 11.1 4.6m1.9-5.6v1a6.5 6.5 0 0 1-.1 1M12 19v2M8.5 21h7" }], ["line", { "x1": 3, "y1": 3, "x2": 21, "y2": 21 }]]);
var microphone_off_default = MicrophoneOffIcon;
