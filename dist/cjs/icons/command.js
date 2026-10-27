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
var command_exports = {};
__export(command_exports, {
  CommandIcon: () => CommandIcon,
  default: () => command_default
});
module.exports = __toCommonJS(command_exports);
var import_create_icon = require("../create-icon.js");
const CommandIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("command", [["path", { "d": "M8.5 8.5H5.75A2.75 2.75 0 1 1 8.5 5.75v12.5A2.75 2.75 0 1 1 5.75 15.5h12.5a2.75 2.75 0 1 1-2.75 2.75V5.75a2.75 2.75 0 1 1 2.75 2.75H8.5Z" }]]);
var command_default = CommandIcon;
