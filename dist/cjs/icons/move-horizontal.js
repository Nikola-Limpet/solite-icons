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
var move_horizontal_exports = {};
__export(move_horizontal_exports, {
  MoveHorizontalIcon: () => MoveHorizontalIcon,
  default: () => move_horizontal_default
});
module.exports = __toCommonJS(move_horizontal_exports);
var import_create_icon = require("../create-icon.js");
const MoveHorizontalIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("move-horizontal", [["path", { "d": "M3 12h18M8 7l-5 5 5 5m8-10 5 5-5 5" }]]);
var move_horizontal_default = MoveHorizontalIcon;
