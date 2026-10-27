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
var shield_lock_exports = {};
__export(shield_lock_exports, {
  ShieldLockIcon: () => ShieldLockIcon,
  default: () => shield_lock_default
});
module.exports = __toCommonJS(shield_lock_exports);
var import_create_icon = require("../create-icon.js");
const ShieldLockIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("shield-lock", [["path", { "d": "M12 3L20 6V11.5C20 16 17 19.5 12 21.5C7 19.5 4 16 4 11.5V6Z" }], ["rect", { "x": 8.5, "y": 11, "width": 7, "height": 5.5, "rx": 1 }], ["path", { "d": "M10 11V9A2 2 0 0 1 14 9V11" }]]);
var shield_lock_default = ShieldLockIcon;
