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
var sofa_exports = {};
__export(sofa_exports, {
  SofaIcon: () => SofaIcon,
  default: () => sofa_default
});
module.exports = __toCommonJS(sofa_exports);
var import_create_icon = require("../create-icon.js");
const SofaIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("sofa", [["path", { "d": "M5 10V7a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v3M5 10a2.5 2.5 0 0 0-3 2.5V19h20v-6.5a2.5 2.5 0 0 0-5 0V15H7v-2.5A2.5 2.5 0 0 0 5 10ZM12 4v11M5 19v3m14-3v3" }]]);
var sofa_default = SofaIcon;
