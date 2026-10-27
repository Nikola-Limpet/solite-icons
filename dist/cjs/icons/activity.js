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
var activity_exports = {};
__export(activity_exports, {
  ActivityIcon: () => ActivityIcon,
  default: () => activity_default
});
module.exports = __toCommonJS(activity_exports);
var import_create_icon = require("../create-icon.js");
const ActivityIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("activity", [["path", { "d": "M3 12h4l2.5-8 5 16 2.5-8h4" }]]);
var activity_default = ActivityIcon;
