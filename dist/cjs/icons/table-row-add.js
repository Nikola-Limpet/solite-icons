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
var table_row_add_exports = {};
__export(table_row_add_exports, {
  TableRowAddIcon: () => TableRowAddIcon,
  default: () => table_row_add_default
});
module.exports = __toCommonJS(table_row_add_exports);
var import_create_icon = require("../create-icon.js");
const TableRowAddIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("table-row-add", [["path", { "d": "M11 20H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6M3 9h18M3 14h10M9 9v11M15 9v3M18 15v6m-3-3h6" }]]);
var table_row_add_default = TableRowAddIcon;
