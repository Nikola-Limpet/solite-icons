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
var type_exports = {};
__export(type_exports, {
  TypeIcon: () => TypeIcon,
  default: () => type_default
});
module.exports = __toCommonJS(type_exports);
var import_create_icon = require("../create-icon.js");
const TypeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("type", [["path", { "d": "M4 7V4.5h16V7M12 4.5v15M8 19.5h8" }]]);
var type_default = TypeIcon;
