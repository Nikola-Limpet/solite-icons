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
var table_data_exports = {};
__export(table_data_exports, {
  TableDataIcon: () => TableDataIcon,
  default: () => table_data_default
});
module.exports = __toCommonJS(table_data_exports);
var import_create_icon = require("../create-icon.js");
const TableDataIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("table-data", [["rect", { "x": 3, "y": 4, "width": 18, "height": 16, "rx": 2 }], ["path", { "d": "M3 9h18M3 14h18M9 9v11m6-11v11" }]]);
var table_data_default = TableDataIcon;
