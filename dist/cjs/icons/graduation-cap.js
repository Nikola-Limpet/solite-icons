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
var graduation_cap_exports = {};
__export(graduation_cap_exports, {
  GraduationCapIcon: () => GraduationCapIcon,
  default: () => graduation_cap_default
});
module.exports = __toCommonJS(graduation_cap_exports);
var import_create_icon = require("../create-icon.js");
const GraduationCapIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("graduation-cap", [["polyline", { "points": "2.5 8.5 12 4 21.5 8.5 12 13 2.5 8.5" }], ["path", { "d": "M6 10.2v6c3.5 2.5 8.5 2.5 12 0v-6M21.5 8.5v9" }], ["rect", { "x": 20.5, "y": 17.5, "width": 2, "height": 3, "rx": 1 }]]);
var graduation_cap_default = GraduationCapIcon;
