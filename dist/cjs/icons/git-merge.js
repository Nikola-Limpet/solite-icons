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
var git_merge_exports = {};
__export(git_merge_exports, {
  GitMergeIcon: () => GitMergeIcon,
  default: () => git_merge_default
});
module.exports = __toCommonJS(git_merge_exports);
var import_create_icon = require("../create-icon.js");
const GitMergeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("git-merge", [["circle", { "cx": 6, "cy": 19, "r": 2 }], ["circle", { "cx": 18, "cy": 19, "r": 2 }], ["circle", { "cx": 12, "cy": 5, "r": 2 }], ["path", { "d": "M6 17v-3a4 4 0 0 1 4-4h2m6 7v-3a4 4 0 0 0-4-4h-2V7" }]]);
var git_merge_default = GitMergeIcon;
