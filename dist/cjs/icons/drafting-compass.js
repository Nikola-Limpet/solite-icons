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
var drafting_compass_exports = {};
__export(drafting_compass_exports, {
  DraftingCompassIcon: () => DraftingCompassIcon,
  default: () => drafting_compass_default
});
module.exports = __toCommonJS(drafting_compass_exports);
var import_create_icon = require("../create-icon.js");
const DraftingCompassIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("drafting-compass", [["circle", { "cx": 12, "cy": 6, "r": 2.5 }], ["path", { "d": "M12 3.5V2m-1 6.3L5 21m8-12.7L19 21M9 13h6m-9 5 2 1m8-1 2-1" }]]);
var drafting_compass_default = DraftingCompassIcon;
