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
var regex_exports = {};
__export(regex_exports, {
  RegexIcon: () => RegexIcon,
  default: () => regex_default
});
module.exports = __toCommonJS(regex_exports);
var import_create_icon = require("../create-icon.js");
const RegexIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("regex", [["path", { "d": "M5.5 4 2.5 20M21.5 4l-3 16M12 5v8m-3.5-6 7 4m0-4-7 4" }], ["circle", { "cx": 9, "cy": 18, "r": 0.8 }]]);
var regex_default = RegexIcon;
