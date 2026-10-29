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
var table_column_freeze_exports = {};
__export(table_column_freeze_exports, {
  TableColumnFreezeIcon: () => TableColumnFreezeIcon,
  default: () => table_column_freeze_default
});
module.exports = __toCommonJS(table_column_freeze_exports);
var import_create_icon = require("../create-icon.js");
const TableColumnFreezeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("table-column-freeze", [["rect", { "x": 2.5, "y": 3.5, "width": 19, "height": 17, "rx": 2 }], ["path", { "d": "M11 3.5v17m2.5-17v17M13.5 9h8m-8 5.5h8M4.5 6h4l-1 3.5 1 1.5h-4l1-1.5-1-3.5ZM6.5 11v3" }]]);
var table_column_freeze_default = TableColumnFreezeIcon;
