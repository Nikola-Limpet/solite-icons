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
var phone_call_exports = {};
__export(phone_call_exports, {
  PhoneCallIcon: () => PhoneCallIcon,
  default: () => phone_call_default
});
module.exports = __toCommonJS(phone_call_exports);
var import_create_icon = require("../create-icon.js");
const PhoneCallIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("phone-call", [["path", { "d": "m7 3 2 4-2.2 2.2a14 14 0 0 0 8 8L17 15l4 2v2a2 2 0 0 1-2.3 2C10.6 19.9 4.1 13.4 3 5.3A2 2 0 0 1 5 3h2Z" }], ["path", { "d": "M14 3a7 7 0 0 1 7 7m-7-3a3 3 0 0 1 3 3" }]]);
var phone_call_default = PhoneCallIcon;
