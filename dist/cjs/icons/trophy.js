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
var trophy_exports = {};
__export(trophy_exports, {
  TrophyIcon: () => TrophyIcon,
  default: () => trophy_default
});
module.exports = __toCommonJS(trophy_exports);
var import_create_icon = require("../create-icon.js");
const TrophyIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("trophy", [["path", { "d": "M6.5 3h11v7a5.5 5.5 0 0 1-11 0V3ZM6.5 5H3v3a4 4 0 0 0 4 4m10.5-7H21v3a4 4 0 0 1-4 4M12 15.5V19M7 21l1-2h8l1 2H7Z" }]]);
var trophy_default = TrophyIcon;
