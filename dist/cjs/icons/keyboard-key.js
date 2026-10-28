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
var keyboard_key_exports = {};
__export(keyboard_key_exports, {
  KeyboardKeyIcon: () => KeyboardKeyIcon,
  default: () => keyboard_key_default
});
module.exports = __toCommonJS(keyboard_key_exports);
var import_create_icon = require("../create-icon.js");
const KeyboardKeyIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("keyboard-key", [["rect", { "x": 4, "y": 3.5, "width": 16, "height": 17, "rx": 3 }], ["path", { "d": "M7 17h10M15.5 7.5v4H9m2.5-2.5L9 11.5l2.5 2.5" }]]);
var keyboard_key_default = KeyboardKeyIcon;
