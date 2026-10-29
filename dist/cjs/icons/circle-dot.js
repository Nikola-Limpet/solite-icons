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
var circle_dot_exports = {};
__export(circle_dot_exports, {
  CircleDotIcon: () => CircleDotIcon,
  default: () => circle_dot_default
});
module.exports = __toCommonJS(circle_dot_exports);
var import_create_icon = require("../create-icon.js");
const CircleDotIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("circle-dot", [["circle", { "cx": 12, "cy": 12, "r": 8.5 }], ["circle", { "cx": 12, "cy": 12, "r": 2.5 }]]);
var circle_dot_default = CircleDotIcon;
