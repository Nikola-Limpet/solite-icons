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
var sunrise_exports = {};
__export(sunrise_exports, {
  SunriseIcon: () => SunriseIcon,
  default: () => sunrise_default
});
module.exports = __toCommonJS(sunrise_exports);
var import_create_icon = require("../create-icon.js");
const SunriseIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("sunrise", [["path", { "d": "M3 17h18M5 21h14M7 17a5 5 0 0 1 10 0M12 3v4m-7 3 2 2m12-2-2 2" }], ["path", { "d": "m10 5 2-2 2 2" }]]);
var sunrise_default = SunriseIcon;
