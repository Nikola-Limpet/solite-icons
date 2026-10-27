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
var trash_exports = {};
__export(trash_exports, {
  TrashIcon: () => TrashIcon,
  default: () => trash_default
});
module.exports = __toCommonJS(trash_exports);
var import_create_icon = require("../create-icon.js");
const TrashIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("trash", [["path", { "d": "M4 6h16M9 6V3h6v3M6 6l1 15h10l1-15" }], ["line", { "x1": 10, "y1": 10, "x2": 10.5, "y2": 17 }], ["line", { "x1": 14, "y1": 10, "x2": 13.5, "y2": 17 }]]);
var trash_default = TrashIcon;
