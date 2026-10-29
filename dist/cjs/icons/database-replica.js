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
var database_replica_exports = {};
__export(database_replica_exports, {
  DatabaseReplicaIcon: () => DatabaseReplicaIcon,
  default: () => database_replica_default
});
module.exports = __toCommonJS(database_replica_exports);
var import_create_icon = require("../create-icon.js");
const DatabaseReplicaIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("database-replica", [["ellipse", { "cx": 6.5, "cy": 5, "rx": 4, "ry": 2 }], ["ellipse", { "cx": 17.5, "cy": 14, "rx": 4, "ry": 2 }], ["path", { "d": "M2.5 5v7c0 1.1 1.8 2 4 2s4-.9 4-2V5M13.5 14v6c0 1.1 1.8 2 4 2s4-.9 4-2v-6M10.5 8h7v4M6.5 14v4h7" }]]);
var database_replica_default = DatabaseReplicaIcon;
