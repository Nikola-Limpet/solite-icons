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
var keyboard_exports = {};
__export(keyboard_exports, {
  KeyboardIcon: () => KeyboardIcon,
  default: () => keyboard_default
});
module.exports = __toCommonJS(keyboard_exports);
var import_create_icon = require("../create-icon.js");
const KeyboardIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("keyboard", [["rect", { "x": 2.5, "y": 5.5, "width": 19, "height": 13, "rx": 2.5 }], ["path", { "d": "M6 9h1m4 0h1m4 0h2M6 12.5h1m4 0h1m4 0h2M8 16h8" }]]);
var keyboard_default = KeyboardIcon;
