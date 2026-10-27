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
var users_exports = {};
__export(users_exports, {
  UsersIcon: () => UsersIcon,
  default: () => users_default
});
module.exports = __toCommonJS(users_exports);
var import_create_icon = require("../create-icon.js");
const UsersIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("users", [["circle", { "cx": 9, "cy": 7.5, "r": 3.5 }], ["path", { "d": "M2.5 21V18.5C2.5 12.5 15.5 12.5 15.5 18.5V21Z" }], ["path", { "d": "M15 4C19.5 3 21 9.5 17 11M18.5 14C21 14.8 22 16.5 22 19V21H19" }]]);
var users_default = UsersIcon;
