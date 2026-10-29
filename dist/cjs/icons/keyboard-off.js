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
var keyboard_off_exports = {};
__export(keyboard_off_exports, {
  KeyboardOffIcon: () => KeyboardOffIcon,
  default: () => keyboard_off_default
});
module.exports = __toCommonJS(keyboard_off_exports);
var import_create_icon = require("../create-icon.js");
const KeyboardOffIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("keyboard-off", [["path", { "d": "M8.5 5.5H19a2.5 2.5 0 0 1 2.5 2.5v7.5M15.5 18.5H5A2.5 2.5 0 0 1 2.5 16V8M12 9h1m4 0h1M6 12.5h1M8 16h3M3 3l18 18" }]]);
var keyboard_off_default = KeyboardOffIcon;
