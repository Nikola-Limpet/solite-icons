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
var cake_exports = {};
__export(cake_exports, {
  CakeIcon: () => CakeIcon,
  default: () => cake_default
});
module.exports = __toCommonJS(cake_exports);
var import_create_icon = require("../create-icon.js");
const CakeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("cake", [["path", { "d": "M4 12h16v9H4v-9Zm0 3c2 3 4-3 6 0s4-3 6 0 4-3 4 0M7 12V8m5 4V8m5 4V8M7 4v1m5-2v2m5-1v1" }]]);
var cake_default = CakeIcon;
