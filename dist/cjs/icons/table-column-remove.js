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
var table_column_remove_exports = {};
__export(table_column_remove_exports, {
  TableColumnRemoveIcon: () => TableColumnRemoveIcon,
  default: () => table_column_remove_default
});
module.exports = __toCommonJS(table_column_remove_exports);
var import_create_icon = require("../create-icon.js");
const TableColumnRemoveIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("table-column-remove", [["path", { "d": "M21 11V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h7M9 4v16M15 4v8M3 10h18M3 15h9M15 18h6" }]]);
var table_column_remove_default = TableColumnRemoveIcon;
