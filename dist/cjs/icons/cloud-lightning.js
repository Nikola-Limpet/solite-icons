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
var cloud_lightning_exports = {};
__export(cloud_lightning_exports, {
  CloudLightningIcon: () => CloudLightningIcon,
  default: () => cloud_lightning_default
});
module.exports = __toCommonJS(cloud_lightning_exports);
var import_create_icon = require("../create-icon.js");
const CloudLightningIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("cloud-lightning", [["path", { "d": "M7 15H6a4 4 0 1 1 .9-7.9A5.5 5.5 0 0 1 17.5 9a3 3 0 0 1 .5 6h-1" }], ["polyline", { "points": "13 11 9 17 14 17 11 22" }]]);
var cloud_lightning_default = CloudLightningIcon;
