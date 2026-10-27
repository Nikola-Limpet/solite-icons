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
var calendar_exports = {};
__export(calendar_exports, {
  CalendarIcon: () => CalendarIcon,
  default: () => calendar_default
});
module.exports = __toCommonJS(calendar_exports);
var import_create_icon = require("../create-icon.js");
const CalendarIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("calendar", [["rect", { "x": 3, "y": 5, "width": 18, "height": 16, "rx": 2 }], ["path", { "d": "M7 3v4m10-4v4M3 10h18m-14 4h2m4 0h2m-8 4h2m4 0h2" }]]);
var calendar_default = CalendarIcon;
