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
var redo_exports = {};
__export(redo_exports, {
  RedoIcon: () => RedoIcon,
  default: () => redo_default
});
module.exports = __toCommonJS(redo_exports);
var import_create_icon = require("../create-icon.js");
const RedoIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("redo", [["polyline", { "points": "16,3.5 21,8.5 16,13.5" }], ["path", { "d": "M21 8.5H10.5A6.25 6.25 0 0 0 10.5 21H14" }]]);
var redo_default = RedoIcon;
