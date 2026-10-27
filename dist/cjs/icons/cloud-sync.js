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
var cloud_sync_exports = {};
__export(cloud_sync_exports, {
  CloudSyncIcon: () => CloudSyncIcon,
  default: () => cloud_sync_default
});
module.exports = __toCommonJS(cloud_sync_exports);
var import_create_icon = require("../create-icon.js");
const CloudSyncIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("cloud-sync", [["path", { "d": "M7 16H6a4 4 0 0 1-.6-8A6.5 6.5 0 0 1 18 7a4.5 4.5 0 0 1 2 8" }], ["path", { "d": "M10 15a4 4 0 0 1 7-2m0-3v3h-3M18 18a4 4 0 0 1-7 2m0 2v-2h3" }]]);
var cloud_sync_default = CloudSyncIcon;
