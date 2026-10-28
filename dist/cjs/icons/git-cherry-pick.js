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
var git_cherry_pick_exports = {};
__export(git_cherry_pick_exports, {
  GitCherryPickIcon: () => GitCherryPickIcon,
  default: () => git_cherry_pick_default
});
module.exports = __toCommonJS(git_cherry_pick_exports);
var import_create_icon = require("../create-icon.js");
const GitCherryPickIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("git-cherry-pick", [["circle", { "cx": 5.5, "cy": 5, "r": 2 }], ["circle", { "cx": 5.5, "cy": 19, "r": 2 }], ["circle", { "cx": 18.5, "cy": 9, "r": 2.5 }], ["path", { "d": "M5.5 7v10M16 9h-3a4 4 0 0 0-4 4m-2-2 2 2 2-2M18.5 3v3.5" }]]);
var git_cherry_pick_default = GitCherryPickIcon;
