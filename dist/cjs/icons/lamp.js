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
var lamp_exports = {};
__export(lamp_exports, {
  LampIcon: () => LampIcon,
  default: () => lamp_default
});
module.exports = __toCommonJS(lamp_exports);
var import_create_icon = require("../create-icon.js");
const LampIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("lamp", [["path", { "d": "M7 3h10l4 11H3L7 3ZM12 14v6" }], ["ellipse", { "cx": 12, "cy": 21, "rx": 5, "ry": 1 }]]);
var lamp_default = LampIcon;
