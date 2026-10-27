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
var terminal_exports = {};
__export(terminal_exports, {
  TerminalIcon: () => TerminalIcon,
  default: () => terminal_default
});
module.exports = __toCommonJS(terminal_exports);
var import_create_icon = require("../create-icon.js");
const TerminalIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("terminal", [["rect", { "x": 3, "y": 4, "width": 18, "height": 16, "rx": 2.5 }], ["line", { "x1": 3, "y1": 8.5, "x2": 21, "y2": 8.5 }], ["path", { "d": "m7 12 3 3-3 3M14 18h3" }]]);
var terminal_default = TerminalIcon;
