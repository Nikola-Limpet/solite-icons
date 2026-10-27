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
var languages_exports = {};
__export(languages_exports, {
  LanguagesIcon: () => LanguagesIcon,
  default: () => languages_default
});
module.exports = __toCommonJS(languages_exports);
var import_create_icon = require("../create-icon.js");
const LanguagesIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("languages", [["path", { "d": "M3 5.5h11M8.5 3v2.5M12 5.5c-.7 5-3.5 8.5-8.5 11M5 9c1.5 3.2 4 5.5 7 7M13 21l4-11 4 11m-6.8-3.5h5.6" }]]);
var languages_default = LanguagesIcon;
