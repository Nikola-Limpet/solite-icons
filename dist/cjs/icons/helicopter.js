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
var helicopter_exports = {};
__export(helicopter_exports, {
  HelicopterIcon: () => HelicopterIcon,
  default: () => helicopter_default
});
module.exports = __toCommonJS(helicopter_exports);
var import_create_icon = require("../create-icon.js");
const HelicopterIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("helicopter", [["path", { "d": "M5 3h15M12 3v4m-2 0h4a6 6 0 0 1 6 6v2h-8a5 5 0 0 1-4.8-3.5L3 10V7l7 2m6-1v7m-5 0v4m7-4v4M7 19h14l1-1" }]]);
var helicopter_default = HelicopterIcon;
