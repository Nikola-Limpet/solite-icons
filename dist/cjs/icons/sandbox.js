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
var sandbox_exports = {};
__export(sandbox_exports, {
  SandboxIcon: () => SandboxIcon,
  default: () => sandbox_default
});
module.exports = __toCommonJS(sandbox_exports);
var import_create_icon = require("../create-icon.js");
const SandboxIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("sandbox", [["path", { "d": "M3 7V4a1 1 0 0 1 1-1h3m4 0h2m4 0h3a1 1 0 0 1 1 1v3M3 11v2m18-2v2M3 17v3a1 1 0 0 0 1 1h3m4 0h2m4 0h3a1 1 0 0 0 1-1v-3m-12-7-2 2 2 2m6-4 2 2-2 2M7 17h10" }]]);
var sandbox_default = SandboxIcon;
