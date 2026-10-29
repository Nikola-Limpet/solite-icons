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
var signal_exports = {};
__export(signal_exports, {
  SignalIcon: () => SignalIcon,
  default: () => signal_default
});
module.exports = __toCommonJS(signal_exports);
var import_create_icon = require("../create-icon.js");
const SignalIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("signal", [["rect", { "x": 3, "y": 16, "width": 3, "height": 5, "rx": 0.5 }], ["rect", { "x": 8, "y": 12, "width": 3, "height": 9, "rx": 0.5 }], ["rect", { "x": 13, "y": 8, "width": 3, "height": 13, "rx": 0.5 }], ["rect", { "x": 18, "y": 3, "width": 3, "height": 18, "rx": 0.5 }]]);
var signal_default = SignalIcon;
