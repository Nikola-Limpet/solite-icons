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
var music_exports = {};
__export(music_exports, {
  MusicIcon: () => MusicIcon,
  default: () => music_default
});
module.exports = __toCommonJS(music_exports);
var import_create_icon = require("../create-icon.js");
const MusicIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("music", [["ellipse", { "cx": 6, "cy": 18, "rx": 3, "ry": 2.5 }], ["ellipse", { "cx": 17, "cy": 16, "rx": 3, "ry": 2.5 }], ["path", { "d": "M9 18V6l11-3v13M9 9l11-3" }]]);
var music_default = MusicIcon;
