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
var boxes_exports = {};
__export(boxes_exports, {
  BoxesIcon: () => BoxesIcon,
  default: () => boxes_default
});
module.exports = __toCommonJS(boxes_exports);
var import_create_icon = require("../create-icon.js");
const BoxesIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("boxes", [["path", { "d": "m12 3 5 2.5v5L12 13l-5-2.5v-5L12 3Zm-5 2.5L12 8l5-2.5M12 8v5" }], ["path", { "d": "m7 10.5-5 3v5L7 21l5-2.5v-5m-10 0L7 16l5-2.5M7 16v5m10-10.5 5 3v5L17 21l-5-2.5m0-5 5 2.5 5-2.5M17 16v5" }]]);
var boxes_default = BoxesIcon;
