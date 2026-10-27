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
var calendar_clock_exports = {};
__export(calendar_clock_exports, {
  CalendarClockIcon: () => CalendarClockIcon,
  default: () => calendar_clock_default
});
module.exports = __toCommonJS(calendar_clock_exports);
var import_create_icon = require("../create-icon.js");
const CalendarClockIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("calendar-clock", [["path", { "d": "M9 21H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3M7 3v4m10-4v4M3 10h13" }], ["circle", { "cx": 17, "cy": 17, "r": 5 }], ["path", { "d": "M17 14v3l2 1" }]]);
var calendar_clock_default = CalendarClockIcon;
