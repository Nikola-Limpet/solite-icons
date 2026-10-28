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
var git_pull_request_exports = {};
__export(git_pull_request_exports, {
  GitPullRequestIcon: () => GitPullRequestIcon,
  default: () => git_pull_request_default
});
module.exports = __toCommonJS(git_pull_request_exports);
var import_create_icon = require("../create-icon.js");
const GitPullRequestIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("git-pull-request", [["circle", { "cx": 5.5, "cy": 5, "r": 2 }], ["circle", { "cx": 5.5, "cy": 19, "r": 2 }], ["circle", { "cx": 18, "cy": 18, "r": 2 }], ["path", { "d": "M5.5 7v10M18 16V9a4 4 0 0 0-4-4h-3m3-3-3 3 3 3" }]]);
var git_pull_request_default = GitPullRequestIcon;
