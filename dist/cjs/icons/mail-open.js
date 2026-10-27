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
var mail_open_exports = {};
__export(mail_open_exports, {
  MailOpenIcon: () => MailOpenIcon,
  default: () => mail_open_default
});
module.exports = __toCommonJS(mail_open_exports);
var import_create_icon = require("../create-icon.js");
const MailOpenIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("mail-open", [["path", { "d": "m3 10 7.9-6.2a1.8 1.8 0 0 1 2.2 0L21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9Z" }], ["path", { "d": "m3 10 9 6 9-6M3 20l6-6m6 0 6 6" }]]);
var mail_open_default = MailOpenIcon;
