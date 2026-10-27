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
var check_circle_exports = {};
__export(check_circle_exports, {
  CheckCircleIcon: () => CheckCircleIcon,
  default: () => check_circle_default
});
module.exports = __toCommonJS(check_circle_exports);
var import_create_icon = require("../create-icon.js");
const CheckCircleIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("check-circle", [["circle", { "cx": 12, "cy": 12, "r": 9 }], ["path", { "d": "m7.5 12 3 3 6-6" }]]);
var check_circle_default = CheckCircleIcon;
