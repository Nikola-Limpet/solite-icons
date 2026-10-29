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
var message_reply_exports = {};
__export(message_reply_exports, {
  MessageReplyIcon: () => MessageReplyIcon,
  default: () => message_reply_default
});
module.exports = __toCommonJS(message_reply_exports);
var import_create_icon = require("../create-icon.js");
const MessageReplyIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("message-reply", [["path", { "d": "M21 12.5V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v15l6-3.5h3M20 20v-3a4 4 0 0 0-4-4h-6m3-3-3 3 3 3" }]]);
var message_reply_default = MessageReplyIcon;
