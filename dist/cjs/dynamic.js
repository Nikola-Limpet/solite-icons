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
var dynamic_exports = {};
__export(dynamic_exports, {
  SoliteIcon: () => SoliteIcon
});
module.exports = __toCommonJS(dynamic_exports);
var import_react = require("react");
var import_create_icon = require("./create-icon.js");
var import_data = require("./data.js");
const SoliteIcon = (0, import_react.forwardRef)(function SoliteIcon2({ name, ...props }, ref) {
  if (!Object.hasOwn(import_data.icons, name)) throw new Error(`Unknown solite icon: ${String(name)}`);
  return (0, import_react.createElement)(import_create_icon.IconDrawing, { ...props, ref, iconName: name, definition: import_data.icons[name] });
});
