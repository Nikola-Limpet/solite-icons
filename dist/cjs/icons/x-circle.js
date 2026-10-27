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
var x_circle_exports = {};
__export(x_circle_exports, {
  XCircleIcon: () => XCircleIcon,
  default: () => x_circle_default
});
module.exports = __toCommonJS(x_circle_exports);
var import_create_icon = require("../create-icon.js");
const XCircleIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("x-circle", [["circle", { "cx": 12, "cy": 12, "r": 9 }], ["path", { "d": "m9 9 6 6m-6 0 6-6" }]]);
var x_circle_default = XCircleIcon;
