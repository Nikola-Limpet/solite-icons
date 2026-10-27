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
var building_exports = {};
__export(building_exports, {
  BuildingIcon: () => BuildingIcon,
  default: () => building_default
});
module.exports = __toCommonJS(building_exports);
var import_create_icon = require("../create-icon.js");
const BuildingIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("building", [["path", { "d": "M3 21H21M4 21V4C4 3.4 4.4 3 5 3H13V21M13 9H19.5V21" }], ["path", { "d": "M7.5 6.5H9.5M7.5 10.5H9.5M7.5 14.5H9.5M16 12.5H17M16 16H17" }], ["path", { "d": "M7.5 21V18H10V21" }]]);
var building_default = BuildingIcon;
