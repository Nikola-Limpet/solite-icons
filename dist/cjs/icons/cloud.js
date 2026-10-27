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
var cloud_exports = {};
__export(cloud_exports, {
  CloudIcon: () => CloudIcon,
  default: () => cloud_default
});
module.exports = __toCommonJS(cloud_exports);
var import_create_icon = require("../create-icon.js");
const CloudIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("cloud", [["path", { "d": "M7 19a4 4 0 0 1-1-7.9C6 7 8.5 4 12 4c3 0 5.4 2.1 5.9 5.1C22 9.5 22 19 17 19H7Z" }]]);
var cloud_default = CloudIcon;
