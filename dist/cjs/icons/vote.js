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
var vote_exports = {};
__export(vote_exports, {
  VoteIcon: () => VoteIcon,
  default: () => vote_default
});
module.exports = __toCommonJS(vote_exports);
var import_create_icon = require("../create-icon.js");
const VoteIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("vote", [["path", { "d": "m7 7 3-4 7 5-3 4-7-5ZM5 10H3.5v11h17V10H18M3.5 14h17M10 14h4" }]]);
var vote_default = VoteIcon;
