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
var focus_exports = {};
__export(focus_exports, {
  FocusIcon: () => FocusIcon,
  default: () => focus_default
});
module.exports = __toCommonJS(focus_exports);
var import_create_icon = require("../create-icon.js");
const FocusIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("focus", [["path", { "d": "M3 8V3h5m8 0h5v5M3 16v5h5m8 0h5v-5" }], ["circle", { "cx": 12, "cy": 12, "r": 3 }]]);
var focus_default = FocusIcon;
