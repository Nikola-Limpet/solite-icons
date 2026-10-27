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
var puzzle_exports = {};
__export(puzzle_exports, {
  PuzzleIcon: () => PuzzleIcon,
  default: () => puzzle_default
});
module.exports = __toCommonJS(puzzle_exports);
var import_create_icon = require("../create-icon.js");
const PuzzleIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("puzzle", [["path", { "d": "M8 5.5V5a3 3 0 1 1 6 0v.5h4a1.5 1.5 0 0 1 1.5 1.5v4h.5a3 3 0 1 1 0 6h-.5v3A1.5 1.5 0 0 1 18 21.5h-4v-.5a3 3 0 1 0-6 0v.5H4A1.5 1.5 0 0 1 2.5 20v-4H3a3 3 0 1 0 0-6h-.5V7A1.5 1.5 0 0 1 4 5.5h4Z" }]]);
var puzzle_default = PuzzleIcon;
