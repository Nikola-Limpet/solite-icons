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
var notebook_exports = {};
__export(notebook_exports, {
  NotebookIcon: () => NotebookIcon,
  default: () => notebook_default
});
module.exports = __toCommonJS(notebook_exports);
var import_create_icon = require("../create-icon.js");
const NotebookIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("notebook", [["rect", { "x": 5, "y": 3, "width": 15, "height": 18, "rx": 2 }], ["line", { "x1": 9, "y1": 3, "x2": 9, "y2": 21 }], ["path", { "d": "M3 7h3m-3 5h3m-3 5h3M13 8h3m-3 4h3" }]]);
var notebook_default = NotebookIcon;
