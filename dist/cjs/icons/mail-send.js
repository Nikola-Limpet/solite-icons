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
var mail_send_exports = {};
__export(mail_send_exports, {
  MailSendIcon: () => MailSendIcon,
  default: () => mail_send_default
});
module.exports = __toCommonJS(mail_send_exports);
var import_create_icon = require("../create-icon.js");
const MailSendIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("mail-send", [["path", { "d": "M11 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3" }], ["path", { "d": "m3 7 9 6 9-6M14 17h7m-3-3 3 3-3 3" }]]);
var mail_send_default = MailSendIcon;
