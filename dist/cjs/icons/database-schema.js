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
var database_schema_exports = {};
__export(database_schema_exports, {
  DatabaseSchemaIcon: () => DatabaseSchemaIcon,
  default: () => database_schema_default
});
module.exports = __toCommonJS(database_schema_exports);
var import_create_icon = require("../create-icon.js");
const DatabaseSchemaIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("database-schema", [["rect", { "x": 3, "y": 3, "width": 7, "height": 6, "rx": 1 }], ["rect", { "x": 14, "y": 8, "width": 7, "height": 6, "rx": 1 }], ["rect", { "x": 3, "y": 15, "width": 7, "height": 6, "rx": 1 }], ["path", { "d": "M10 6h2v5h2M10 18h2v-7M5.5 6h2m9 5h2M5.5 18h2" }]]);
var database_schema_default = DatabaseSchemaIcon;
