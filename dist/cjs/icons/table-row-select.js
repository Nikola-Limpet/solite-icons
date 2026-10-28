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
var table_row_select_exports = {};
__export(table_row_select_exports, {
  TableRowSelectIcon: () => TableRowSelectIcon,
  default: () => table_row_select_default
});
module.exports = __toCommonJS(table_row_select_exports);
var import_create_icon = require("../create-icon.js");
const TableRowSelectIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("table-row-select", [["rect", { "x": 3, "y": 3.5, "width": 18, "height": 17, "rx": 2 }], ["rect", { "x": 3, "y": 9, "width": 18, "height": 6, "rx": 1 }], ["path", { "d": "M9 3.5V9m0 6v5.5m6-17V9m0 6v5.5" }]]);
var table_row_select_default = TableRowSelectIcon;
