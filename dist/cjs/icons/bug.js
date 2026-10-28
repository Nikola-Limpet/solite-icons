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
var bug_exports = {};
__export(bug_exports, {
  BugIcon: () => BugIcon,
  default: () => bug_default
});
module.exports = __toCommonJS(bug_exports);
var import_create_icon = require("../create-icon.js");
const BugIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("bug", [["rect", { "x": 7, "y": 7, "width": 10, "height": 14, "rx": 5 }], ["path", { "d": "m9 7-2-3m8 3 2-3M7 11H3m4 5H3m5 3-3 2m12-10h4m-4 5h4m-5 3 3 2M12 8v12M7 13h10" }]]);
var bug_default = BugIcon;
