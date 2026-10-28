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
var strikethrough_exports = {};
__export(strikethrough_exports, {
  StrikethroughIcon: () => StrikethroughIcon,
  default: () => strikethrough_default
});
module.exports = __toCommonJS(strikethrough_exports);
var import_create_icon = require("../create-icon.js");
const StrikethroughIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("strikethrough", [["path", { "d": "M17.5 6.5C16.6 4.8 14.7 4 12.4 4 9.4 4 7 5.6 7 8c0 1.7 1.2 2.8 3.1 3.5m3.7 1.2c2.1.7 3.2 1.8 3.2 3.5 0 2.3-2.3 3.8-5.3 3.8-2.6 0-4.6-1-5.7-2.8M3 12h18" }]]);
var strikethrough_default = StrikethroughIcon;
