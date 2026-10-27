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
var clock_exports = {};
__export(clock_exports, {
  ClockIcon: () => ClockIcon,
  default: () => clock_default
});
module.exports = __toCommonJS(clock_exports);
var import_create_icon = require("../create-icon.js");
const ClockIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("clock", [["circle", { "cx": 12, "cy": 12, "r": 9 }], ["path", { "d": "M12 6v6l4 2" }]]);
var clock_default = ClockIcon;
