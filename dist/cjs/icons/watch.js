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
var watch_exports = {};
__export(watch_exports, {
  WatchIcon: () => WatchIcon,
  default: () => watch_default
});
module.exports = __toCommonJS(watch_exports);
var import_create_icon = require("../create-icon.js");
const WatchIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("watch", [["rect", { "x": 6.5, "y": 6.5, "width": 11, "height": 11, "rx": 3 }], ["path", { "d": "m9 6.5.5-4h5l.5 4m-6 11 .5 4h5l.5-4M12 9.5v3l2 1" }]]);
var watch_default = WatchIcon;
