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
var accessibility_exports = {};
__export(accessibility_exports, {
  AccessibilityIcon: () => AccessibilityIcon,
  default: () => accessibility_default
});
module.exports = __toCommonJS(accessibility_exports);
var import_create_icon = require("../create-icon.js");
const AccessibilityIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("accessibility", [["circle", { "cx": 12, "cy": 12, "r": 9 }], ["circle", { "cx": 12, "cy": 7, "r": 1.25 }], ["path", { "d": "m7 10 5 1.5 5-1.5M12 11.5V14m-3 4 3-4 3 4" }]]);
var accessibility_default = AccessibilityIcon;
