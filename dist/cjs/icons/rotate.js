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
var rotate_exports = {};
__export(rotate_exports, {
  RotateIcon: () => RotateIcon,
  default: () => rotate_default
});
module.exports = __toCommonJS(rotate_exports);
var import_create_icon = require("../create-icon.js");
const RotateIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("rotate", [["path", { "d": "M20.5 9A8.5 8.5 0 1 0 21 15" }], ["polyline", { "points": "20.5,3.5 20.5,9 15,9" }]]);
var rotate_default = RotateIcon;
