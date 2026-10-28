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
var clapperboard_exports = {};
__export(clapperboard_exports, {
  ClapperboardIcon: () => ClapperboardIcon,
  default: () => clapperboard_default
});
module.exports = __toCommonJS(clapperboard_exports);
var import_create_icon = require("../create-icon.js");
const ClapperboardIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("clapperboard", [["path", { "d": "M3.5 9.5H21V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6.5M3.5 9.5l-1-4L19.5 2l1 4-17 3.5Z" }], ["path", { "d": "m7 4.6 3 3.5m3-4.7 3 3.5" }]]);
var clapperboard_default = ClapperboardIcon;
