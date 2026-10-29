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
var first_aid_exports = {};
__export(first_aid_exports, {
  FirstAidIcon: () => FirstAidIcon,
  default: () => first_aid_default
});
module.exports = __toCommonJS(first_aid_exports);
var import_create_icon = require("../create-icon.js");
const FirstAidIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("first-aid", [["rect", { "x": 3, "y": 6, "width": 18, "height": 15, "rx": 2.5 }], ["path", { "d": "M8 6V3h8v3M10 10h4v2h2v4h-2v2h-4v-2H8v-4h2v-2Z" }]]);
var first_aid_default = FirstAidIcon;
