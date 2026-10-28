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
var unlink_exports = {};
__export(unlink_exports, {
  UnlinkIcon: () => UnlinkIcon,
  default: () => unlink_default
});
module.exports = __toCommonJS(unlink_exports);
var import_create_icon = require("../create-icon.js");
const UnlinkIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("unlink", [["path", { "d": "M9 14l-1 1a3.18 3.18 0 0 1-4.5-4.5l3-3a3.18 3.18 0 0 1 4.5 0m4 2.5 1-1a3.18 3.18 0 0 1 4.5 4.5l-3 3a3.18 3.18 0 0 1-4.5 0M11 3l.5 3m1 12 .5 3" }]]);
var unlink_default = UnlinkIcon;
