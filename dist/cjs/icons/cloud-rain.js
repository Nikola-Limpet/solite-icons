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
var cloud_rain_exports = {};
__export(cloud_rain_exports, {
  CloudRainIcon: () => CloudRainIcon,
  default: () => cloud_rain_default
});
module.exports = __toCommonJS(cloud_rain_exports);
var import_create_icon = require("../create-icon.js");
const CloudRainIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("cloud-rain", [["path", { "d": "M6 14a4 4 0 1 1 .9-7.9A5.5 5.5 0 0 1 17.5 8a3 3 0 0 1 .5 6H6ZM8 18l-1 3m6-3-1 3m6-3-1 3" }]]);
var cloud_rain_default = CloudRainIcon;
