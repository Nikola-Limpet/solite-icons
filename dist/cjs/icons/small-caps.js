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
var small_caps_exports = {};
__export(small_caps_exports, {
  SmallCapsIcon: () => SmallCapsIcon,
  default: () => small_caps_default
});
module.exports = __toCommonJS(small_caps_exports);
var import_create_icon = require("../create-icon.js");
const SmallCapsIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("small-caps", [["path", { "d": "m2.5 20 6-16 6 16M5 14h7M16 20l3-9 3 9m-5-3h4" }]]);
var small_caps_default = SmallCapsIcon;
