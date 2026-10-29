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
var bird_exports = {};
__export(bird_exports, {
  BirdIcon: () => BirdIcon,
  default: () => bird_default
});
module.exports = __toCommonJS(bird_exports);
var import_create_icon = require("../create-icon.js");
const BirdIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("bird", [["path", { "d": "M3 17c5 0 3-10 9-10 0-5 7-5 7 0l3 2-3 1c0 5-3 9-8 9H3v-2Zm4-2c4 0 6-2 7-5M9 19v3m5-3v3" }], ["circle", { "cx": 16, "cy": 6.5, "r": 0.4 }]]);
var bird_default = BirdIcon;
