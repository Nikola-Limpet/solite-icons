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
var thumbs_up_exports = {};
__export(thumbs_up_exports, {
  ThumbsUpIcon: () => ThumbsUpIcon,
  default: () => thumbs_up_default
});
module.exports = __toCommonJS(thumbs_up_exports);
var import_create_icon = require("../create-icon.js");
const ThumbsUpIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("thumbs-up", [["rect", { "x": 2.5, "y": 10, "width": 4, "height": 11, "rx": 1 }], ["path", { "d": "M6.5 11 12 3c.5-.7 1.5-.4 1.7.4.5 2-.1 4.5-.7 6.1h6a2 2 0 0 1 2 2.4l-1.4 7.5a2 2 0 0 1-2 1.6h-7.1l-4-2" }]]);
var thumbs_up_default = ThumbsUpIcon;
