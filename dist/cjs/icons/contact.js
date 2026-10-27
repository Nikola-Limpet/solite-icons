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
var contact_exports = {};
__export(contact_exports, {
  ContactIcon: () => ContactIcon,
  default: () => contact_default
});
module.exports = __toCommonJS(contact_exports);
var import_create_icon = require("../create-icon.js");
const ContactIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("contact", [["rect", { "x": 5, "y": 3, "width": 15, "height": 18, "rx": 2 }], ["path", { "d": "M2.5 7H6.5M2.5 12H6.5M2.5 17H6.5" }], ["circle", { "cx": 12.5, "cy": 9, "r": 2.25 }], ["path", { "d": "M8.5 17V16C8.5 12.8 16.5 12.8 16.5 16V17" }]]);
var contact_default = ContactIcon;
