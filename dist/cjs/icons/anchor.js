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
var anchor_exports = {};
__export(anchor_exports, {
  AnchorIcon: () => AnchorIcon,
  default: () => anchor_default
});
module.exports = __toCommonJS(anchor_exports);
var import_create_icon = require("../create-icon.js");
const AnchorIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("anchor", [["circle", { "cx": 12, "cy": 5, "r": 2.5 }], ["path", { "d": "M12 7.5V21M7 11h10M3 14a9 9 0 0 0 18 0M3 18v-4h4m10 0h4v4" }]]);
var anchor_default = AnchorIcon;
