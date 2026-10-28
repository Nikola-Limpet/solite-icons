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
var skip_forward_exports = {};
__export(skip_forward_exports, {
  SkipForwardIcon: () => SkipForwardIcon,
  default: () => skip_forward_default
});
module.exports = __toCommonJS(skip_forward_exports);
var import_create_icon = require("../create-icon.js");
const SkipForwardIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("skip-forward", [["path", { "d": "m5.5 5.5 10 6.5-10 6.5v-13Z" }], ["line", { "x1": 19, "y1": 5, "x2": 19, "y2": 19 }]]);
var skip_forward_default = SkipForwardIcon;
