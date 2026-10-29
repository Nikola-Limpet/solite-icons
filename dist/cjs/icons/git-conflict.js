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
var git_conflict_exports = {};
__export(git_conflict_exports, {
  GitConflictIcon: () => GitConflictIcon,
  default: () => git_conflict_default
});
module.exports = __toCommonJS(git_conflict_exports);
var import_create_icon = require("../create-icon.js");
const GitConflictIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("git-conflict", [["circle", { "cx": 5, "cy": 4.5, "r": 2 }], ["circle", { "cx": 19, "cy": 4.5, "r": 2 }], ["circle", { "cx": 12, "cy": 19.5, "r": 2 }], ["path", { "d": "M5 6.5v2c0 2 2 3.5 4 3.5m10-5.5v2c0 2-2 3.5-4 3.5M12 15v2.5m-2-9 4 4m0-4-4 4" }]]);
var git_conflict_default = GitConflictIcon;
