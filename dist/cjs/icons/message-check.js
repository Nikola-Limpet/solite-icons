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
var message_check_exports = {};
__export(message_check_exports, {
  MessageCheckIcon: () => MessageCheckIcon,
  default: () => message_check_default
});
module.exports = __toCommonJS(message_check_exports);
var import_create_icon = require("../create-icon.js");
const MessageCheckIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("message-check", [["path", { "d": "M5 4h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9l-5 3v-3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" }], ["path", { "d": "m8 11 2.5 2.5L16 8" }]]);
var message_check_default = MessageCheckIcon;
