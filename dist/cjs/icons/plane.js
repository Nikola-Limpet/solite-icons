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
var plane_exports = {};
__export(plane_exports, {
  PlaneIcon: () => PlaneIcon,
  default: () => plane_default
});
module.exports = __toCommonJS(plane_exports);
var import_create_icon = require("../create-icon.js");
const PlaneIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("plane", [["path", { "d": "M10 9V4a2 2 0 0 1 4 0v5l7 5v3l-7-2v4l2 2v1l-4-1-4 1v-1l2-2v-4l-7 2v-3l7-5Z" }]]);
var plane_default = PlaneIcon;
