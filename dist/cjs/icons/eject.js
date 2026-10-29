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
var eject_exports = {};
__export(eject_exports, {
  EjectIcon: () => EjectIcon,
  default: () => eject_default
});
module.exports = __toCommonJS(eject_exports);
var import_create_icon = require("../create-icon.js");
const EjectIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("eject", [["path", { "d": "m12 4 8 10H4l8-10Z" }], ["rect", { "x": 4, "y": 18, "width": 16, "height": 2.5, "rx": 0.5 }]]);
var eject_default = EjectIcon;
