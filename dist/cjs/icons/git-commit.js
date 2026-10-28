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
var git_commit_exports = {};
__export(git_commit_exports, {
  GitCommitIcon: () => GitCommitIcon,
  default: () => git_commit_default
});
module.exports = __toCommonJS(git_commit_exports);
var import_create_icon = require("../create-icon.js");
const GitCommitIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("git-commit", [["circle", { "cx": 12, "cy": 12, "r": 4 }], ["line", { "x1": 2.5, "y1": 12, "x2": 8, "y2": 12 }], ["line", { "x1": 16, "y1": 12, "x2": 21.5, "y2": 12 }]]);
var git_commit_default = GitCommitIcon;
