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
var table_cells_split_exports = {};
__export(table_cells_split_exports, {
  TableCellsSplitIcon: () => TableCellsSplitIcon,
  default: () => table_cells_split_default
});
module.exports = __toCommonJS(table_cells_split_exports);
var import_create_icon = require("../create-icon.js");
const TableCellsSplitIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("table-cells-split", [["rect", { "x": 2.5, "y": 5, "width": 19, "height": 14, "rx": 2 }], ["path", { "d": "M12 5v14M9 12H5m2-2-2 2 2 2m8-2h4m-2-2 2 2-2 2" }]]);
var table_cells_split_default = TableCellsSplitIcon;
