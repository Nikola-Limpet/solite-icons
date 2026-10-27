"use strict";
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
var media_exports = {};
__export(media_exports, {
  mediaIcons: () => mediaIcons
});
module.exports = __toCommonJS(media_exports);
var import_geometry = require("../geometry.js");
const mediaIcons = {
  share: [(0, import_geometry.c)(5, 12, 2.5), (0, import_geometry.c)(18, 5, 2.5), (0, import_geometry.c)(18, 19, 2.5), (0, import_geometry.p)("m7.2 10.8 8.6-4.6m-8.6 7 8.6 4.6")],
  volume: [
    (0, import_geometry.p)("M4.5 9H8l5-5v16l-5-5H4.5A1.5 1.5 0 0 1 3 13.5v-3A1.5 1.5 0 0 1 4.5 9Z"),
    (0, import_geometry.p)("M16.5 8a6 6 0 0 1 0 8m2.5-11a10 10 0 0 1 0 14")
  ],
  "volume-off": [
    (0, import_geometry.p)("M6 9H4.5A1.5 1.5 0 0 0 3 10.5v3A1.5 1.5 0 0 0 4.5 15H8l5 5v-6M10 7l3-3v4"),
    (0, import_geometry.l)(3, 3, 21, 21)
  ],
  microphone: [(0, import_geometry.r)(8.5, 3, 7, 13, 3.5), (0, import_geometry.p)("M5.5 11.5v1a6.5 6.5 0 0 0 13 0v-1M12 19v2M8.5 21h7")],
  "microphone-off": [
    (0, import_geometry.p)(
      "M8.5 4.5A3.5 3.5 0 0 1 15.5 6v4M8.5 9v3.5a3.5 3.5 0 0 0 5.5 2.9M5.5 11.5v1a6.5 6.5 0 0 0 11.1 4.6m1.9-5.6v1a6.5 6.5 0 0 1-.1 1M12 19v2M8.5 21h7"
    ),
    (0, import_geometry.l)(3, 3, 21, 21)
  ],
  video: [(0, import_geometry.r)(3, 6, 13, 12, 2.5), (0, import_geometry.p)("m16 10 5-3v10l-5-3")],
  "video-off": [
    (0, import_geometry.p)(
      "M8 6h5.5A2.5 2.5 0 0 1 16 8.5V10l5-3v10l-3-1.8M3.5 7A2.5 2.5 0 0 0 3 8.5v7A2.5 2.5 0 0 0 5.5 18H14"
    ),
    (0, import_geometry.l)(3, 3, 21, 21)
  ]
};
