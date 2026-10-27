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
var expand_exports = {};
__export(expand_exports, {
  ExpandIcon: () => ExpandIcon,
  default: () => expand_default
});
module.exports = __toCommonJS(expand_exports);
var import_create_icon = require("../create-icon.js");
const ExpandIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("expand", [["polyline", { "points": "3.5,9 3.5,3.5 9,3.5" }], ["polyline", { "points": "15,3.5 20.5,3.5 20.5,9" }], ["polyline", { "points": "20.5,15 20.5,20.5 15,20.5" }], ["polyline", { "points": "9,20.5 3.5,20.5 3.5,15" }]]);
var expand_default = ExpandIcon;
