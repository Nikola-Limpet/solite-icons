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
var git_graph_exports = {};
__export(git_graph_exports, {
  GitGraphIcon: () => GitGraphIcon,
  default: () => git_graph_default
});
module.exports = __toCommonJS(git_graph_exports);
var import_create_icon = require("../create-icon.js");
const GitGraphIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("git-graph", [["circle", { "cx": 5, "cy": 4.5, "r": 1.8 }], ["circle", { "cx": 5, "cy": 19.5, "r": 1.8 }], ["circle", { "cx": 18.5, "cy": 7, "r": 1.8 }], ["circle", { "cx": 18.5, "cy": 17, "r": 1.8 }], ["path", { "d": "M5 6.3v11.4M5 11h6a7.5 7.5 0 0 0 7.5-2.2M5 14h6a7.5 7.5 0 0 1 7.5 1.2M18.5 8.8v6.4" }]]);
var git_graph_default = GitGraphIcon;
