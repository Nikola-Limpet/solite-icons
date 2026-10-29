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
var track_changes_exports = {};
__export(track_changes_exports, {
  TrackChangesIcon: () => TrackChangesIcon,
  default: () => track_changes_default
});
module.exports = __toCommonJS(track_changes_exports);
var import_create_icon = require("../create-icon.js");
const TrackChangesIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("track-changes", [["path", { "d": "M3 4v16M7 6h13M7 11h8M7 16h4m3.5 2.5 5-5 2 2-5 5-3 1 1-3Z" }]]);
var track_changes_default = TrackChangesIcon;
