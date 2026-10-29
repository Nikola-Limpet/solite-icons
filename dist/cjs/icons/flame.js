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
var flame_exports = {};
__export(flame_exports, {
  FlameIcon: () => FlameIcon,
  default: () => flame_default
});
module.exports = __toCommonJS(flame_exports);
var import_create_icon = require("../create-icon.js");
const FlameIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("flame", [["path", { "d": "M13 2C14 8 7 9 7 14c-2-1-3-3-3-4-3 7 2 12 8 12 7 0 11-7 6-13 0 3-3 4-3 4 2-5 0-9-2-11Z" }], ["path", { "d": "M12 21c-3-2-3-5 0-8 0 3 4 4 2 7" }]]);
var flame_default = FlameIcon;
