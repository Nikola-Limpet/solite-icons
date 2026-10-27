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
var rocket_exports = {};
__export(rocket_exports, {
  RocketIcon: () => RocketIcon,
  default: () => rocket_default
});
module.exports = __toCommonJS(rocket_exports);
var import_create_icon = require("../create-icon.js");
const RocketIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("rocket", [["path", { "d": "M9 15 6.5 12.5C9 6.5 14.5 2.5 21 3c.5 6.5-3.5 12-9.5 14.5L9 15ZM7 11H4l-2 4h7m4 2v5l4-2v-5" }], ["circle", { "cx": 15.5, "cy": 8.5, "r": 2 }], ["path", { "d": "m5.5 18.5-3 3m6-2-2 2" }]]);
var rocket_default = RocketIcon;
