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
var video_exports = {};
__export(video_exports, {
  VideoIcon: () => VideoIcon,
  default: () => video_default
});
module.exports = __toCommonJS(video_exports);
var import_create_icon = require("../create-icon.js");
const VideoIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("video", [["rect", { "x": 3, "y": 6, "width": 13, "height": 12, "rx": 2.5 }], ["path", { "d": "m16 10 5-3v10l-5-3" }]]);
var video_default = VideoIcon;
