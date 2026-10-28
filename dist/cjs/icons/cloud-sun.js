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
var cloud_sun_exports = {};
__export(cloud_sun_exports, {
  CloudSunIcon: () => CloudSunIcon,
  default: () => cloud_sun_default
});
module.exports = __toCommonJS(cloud_sun_exports);
var import_create_icon = require("../create-icon.js");
const CloudSunIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("cloud-sun", [["path", { "d": "M12 8a4.5 4.5 0 1 1 7 5M16 3V2m5 5 1-.5M20.5 3.5l.5-1" }], ["path", { "d": "M6 21a4 4 0 1 1 1-7.9A5.5 5.5 0 0 1 17.5 15a3 3 0 0 1 .5 6H6Z" }]]);
var cloud_sun_default = CloudSunIcon;
