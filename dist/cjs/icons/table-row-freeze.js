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
var table_row_freeze_exports = {};
__export(table_row_freeze_exports, {
  TableRowFreezeIcon: () => TableRowFreezeIcon,
  default: () => table_row_freeze_default
});
module.exports = __toCommonJS(table_row_freeze_exports);
var import_create_icon = require("../create-icon.js");
const TableRowFreezeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("table-row-freeze", [["path", { "d": "M15 4H5a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4M3 9h11M3 12h18M9 12v8M15 12v8M17.5 3h4l-1 4 1 1.5h-4l1-1.5-1-4ZM19.5 8.5V11" }]]);
var table_row_freeze_default = TableRowFreezeIcon;
