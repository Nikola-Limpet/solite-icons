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
var lightbulb_exports = {};
__export(lightbulb_exports, {
  LightbulbIcon: () => LightbulbIcon,
  default: () => lightbulb_default
});
module.exports = __toCommonJS(lightbulb_exports);
var import_create_icon = require("../create-icon.js");
const LightbulbIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("lightbulb", [["path", { "d": "M8.5 17v-1.5c0-2-3-3.1-3-6.5a6.5 6.5 0 0 1 13 0c0 3.4-3 4.5-3 6.5V17h-7ZM9 20.5h6" }], ["path", { "d": "M9 8.5a3 3 0 0 1 3-3" }]]);
var lightbulb_default = LightbulbIcon;
