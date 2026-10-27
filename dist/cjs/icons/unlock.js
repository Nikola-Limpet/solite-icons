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
var unlock_exports = {};
__export(unlock_exports, {
  UnlockIcon: () => UnlockIcon,
  default: () => unlock_default
});
module.exports = __toCommonJS(unlock_exports);
var import_create_icon = require("../create-icon.js");
const UnlockIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("unlock", [["rect", { "x": 4.5, "y": 10.5, "width": 15, "height": 11, "rx": 2 }], ["path", { "d": "M7.5 10.5V7A4.5 4.5 0 0 1 16.5 7" }], ["line", { "x1": 12, "y1": 15, "x2": 12, "y2": 17.5 }]]);
var unlock_default = UnlockIcon;
