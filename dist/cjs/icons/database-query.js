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
var database_query_exports = {};
__export(database_query_exports, {
  DatabaseQueryIcon: () => DatabaseQueryIcon,
  default: () => database_query_default
});
module.exports = __toCommonJS(database_query_exports);
var import_create_icon = require("../create-icon.js");
const DatabaseQueryIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("database-query", [["ellipse", { "cx": 8.5, "cy": 5.5, "rx": 5.5, "ry": 2.5 }], ["path", { "d": "M3 5.5v12c0 1.4 2.5 2.5 5.5 2.5M14 5.5v4M3 11.5c1.5 1.5 4 2 6.5 2M6 17h3" }], ["circle", { "cx": 16, "cy": 15, "r": 4 }], ["line", { "x1": 19, "y1": 18, "x2": 22, "y2": 21 }]]);
var database_query_default = DatabaseQueryIcon;
