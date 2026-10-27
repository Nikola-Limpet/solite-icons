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
var git_branch_exports = {};
__export(git_branch_exports, {
  GitBranchIcon: () => GitBranchIcon,
  default: () => git_branch_default
});
module.exports = __toCommonJS(git_branch_exports);
var import_create_icon = require("../create-icon.js");
const GitBranchIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("git-branch", [["circle", { "cx": 6.5, "cy": 5, "r": 2.5 }], ["circle", { "cx": 6.5, "cy": 19, "r": 2.5 }], ["circle", { "cx": 18, "cy": 8, "r": 2.5 }], ["line", { "x1": 6.5, "y1": 7.5, "x2": 6.5, "y2": 16.5 }], ["path", { "d": "M6.5 13.5H12a6 6 0 0 0 6-3" }]]);
var git_branch_default = GitBranchIcon;
