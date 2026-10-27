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
var phone_exports = {};
__export(phone_exports, {
  PhoneIcon: () => PhoneIcon,
  default: () => phone_default
});
module.exports = __toCommonJS(phone_exports);
var import_create_icon = require("../create-icon.js");
const PhoneIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("phone", [["path", { "d": "m7.6 3.5 2 4a1.5 1.5 0 0 1-.3 1.7L7.6 11a14 14 0 0 0 5.4 5.4l1.8-1.7a1.5 1.5 0 0 1 1.7-.3l4 2a1.5 1.5 0 0 1 .7 1.8l-.6 1.7a2 2 0 0 1-2.1 1.3C10.3 20.2 3.8 13.7 2.8 5.5a2 2 0 0 1 1.3-2.1l1.7-.6a1.5 1.5 0 0 1 1.8.7Z" }]]);
var phone_default = PhoneIcon;
