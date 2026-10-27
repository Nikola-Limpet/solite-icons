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
var video_off_exports = {};
__export(video_off_exports, {
  VideoOffIcon: () => VideoOffIcon,
  default: () => video_off_default
});
module.exports = __toCommonJS(video_off_exports);
var import_create_icon = require("../create-icon.js");
const VideoOffIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("video-off", [["path", { "d": "M8 6h5.5A2.5 2.5 0 0 1 16 8.5V10l5-3v10l-3-1.8M3.5 7A2.5 2.5 0 0 0 3 8.5v7A2.5 2.5 0 0 0 5.5 18H14" }], ["line", { "x1": 3, "y1": 3, "x2": 21, "y2": 21 }]]);
var video_off_default = VideoOffIcon;
