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
var remote_control_exports = {};
__export(remote_control_exports, {
  RemoteControlIcon: () => RemoteControlIcon,
  default: () => remote_control_default
});
module.exports = __toCommonJS(remote_control_exports);
var import_create_icon = require("../create-icon.js");
const RemoteControlIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("remote-control", [["rect", { "x": 7, "y": 2.5, "width": 10, "height": 19, "rx": 4 }], ["circle", { "cx": 12, "cy": 10, "r": 2.5 }], ["path", { "d": "M10 17h.5m3 0h.5" }]]);
var remote_control_default = RemoteControlIcon;
