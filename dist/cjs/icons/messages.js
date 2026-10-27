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
var messages_exports = {};
__export(messages_exports, {
  MessagesIcon: () => MessagesIcon,
  default: () => messages_default
});
module.exports = __toCommonJS(messages_exports);
var import_create_icon = require("../create-icon.js");
const MessagesIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("messages", [["path", { "d": "M8 4h11a2 2 0 0 1 2 2v8l-3-2h-2" }], ["path", { "d": "M5 8h9a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8l-5 2V10a2 2 0 0 1 2-2Z" }]]);
var messages_default = MessagesIcon;
