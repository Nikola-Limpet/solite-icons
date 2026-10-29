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
var rows_3_exports = {};
__export(rows_3_exports, {
  Rows3Icon: () => Rows3Icon,
  default: () => rows_3_default
});
module.exports = __toCommonJS(rows_3_exports);
var import_create_icon = require("../create-icon.js");
const Rows3Icon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("rows-3", [["rect", { "x": 3, "y": 3.5, "width": 18, "height": 17, "rx": 2 }], ["path", { "d": "M3 9h18M3 15h18" }]]);
var rows_3_default = Rows3Icon;
