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
var alarm_exports = {};
__export(alarm_exports, {
  AlarmIcon: () => AlarmIcon,
  default: () => alarm_default
});
module.exports = __toCommonJS(alarm_exports);
var import_create_icon = require("../create-icon.js");
const AlarmIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("alarm", [["circle", { "cx": 12, "cy": 13, "r": 7.5 }], ["path", { "d": "M12 9v4l3 1M3 6l3-3m12 0 3 3M7 19l-2 2m12-2 2 2" }]]);
var alarm_default = AlarmIcon;
