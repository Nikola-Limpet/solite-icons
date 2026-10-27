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
var move_exports = {};
__export(move_exports, {
  MoveIcon: () => MoveIcon,
  default: () => move_default
});
module.exports = __toCommonJS(move_exports);
var import_create_icon = require("../create-icon.js");
const MoveIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("move", [["path", { "d": "M12 2.5V21.5M2.5 12H21.5" }], ["polyline", { "points": "8.5,6 12,2.5 15.5,6" }], ["polyline", { "points": "8.5,18 12,21.5 15.5,18" }], ["polyline", { "points": "6,8.5 2.5,12 6,15.5" }], ["polyline", { "points": "18,8.5 21.5,12 18,15.5" }]]);
var move_default = MoveIcon;
