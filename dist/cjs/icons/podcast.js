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
var podcast_exports = {};
__export(podcast_exports, {
  PodcastIcon: () => PodcastIcon,
  default: () => podcast_default
});
module.exports = __toCommonJS(podcast_exports);
var import_create_icon = require("../create-icon.js");
const PodcastIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("podcast", [["circle", { "cx": 12, "cy": 8, "r": 2 }], ["path", { "d": "M9.5 20v-6a2.5 2.5 0 0 1 5 0v6M8 15c-3-3-3-7 0-10m8 0c3 3 3 7 0 10" }], ["path", { "d": "M5 18C.5 14 .5 7 5 3m14 0c4.5 4 4.5 11 0 15" }]]);
var podcast_default = PodcastIcon;
