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
var bath_exports = {};
__export(bath_exports, {
  BathIcon: () => BathIcon,
  default: () => bath_default
});
module.exports = __toCommonJS(bath_exports);
var import_create_icon = require("../create-icon.js");
const BathIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("bath", [["path", { "d": "M3 12h18m-17 0 1 5a4 4 0 0 0 4 3h6a4 4 0 0 0 4-3l1-5M6 12V5a3 3 0 0 1 6 0M8 20l-1 2m9-2 1 2" }]]);
var bath_default = BathIcon;
