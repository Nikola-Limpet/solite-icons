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
var edit_exports = {};
__export(edit_exports, {
  EditIcon: () => EditIcon,
  default: () => edit_default
});
module.exports = __toCommonJS(edit_exports);
var import_create_icon = require("../create-icon.js");
const EditIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("edit", [["path", { "d": "m4 15 11-11a2.8 2.8 0 0 1 4 4L8 19l-5 2 1-6Z" }], ["line", { "x1": 13, "y1": 6, "x2": 17, "y2": 10 }], ["line", { "x1": 4, "y1": 15, "x2": 8, "y2": 19 }]]);
var edit_default = EditIcon;
