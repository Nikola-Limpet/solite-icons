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
var gamepad_exports = {};
__export(gamepad_exports, {
  GamepadIcon: () => GamepadIcon,
  default: () => gamepad_default
});
module.exports = __toCommonJS(gamepad_exports);
var import_create_icon = require("../create-icon.js");
const GamepadIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("gamepad", [["path", { "d": "M7.5 7h9a4 4 0 0 1 4 3.3l1.1 6.4c.4 2.7-2.2 4-3.9 2L15.5 16h-7l-2.2 2.7c-1.7 2-4.3.7-3.9-2l1.1-6.4A4 4 0 0 1 7.5 7Z" }], ["path", { "d": "M7.5 10v4m-2-2h4" }], ["circle", { "cx": 15.5, "cy": 11, "r": 0.6 }], ["circle", { "cx": 18, "cy": 13, "r": 0.6 }]]);
var gamepad_default = GamepadIcon;
