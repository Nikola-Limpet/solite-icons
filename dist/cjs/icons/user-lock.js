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
var user_lock_exports = {};
__export(user_lock_exports, {
  UserLockIcon: () => UserLockIcon,
  default: () => user_lock_default
});
module.exports = __toCommonJS(user_lock_exports);
var import_create_icon = require("../create-icon.js");
const UserLockIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("user-lock", [["circle", { "cx": 8, "cy": 6.5, "r": 3.5 }], ["path", { "d": "M2 21V18C2 14.5 5 12.5 8 12.5C9.6 12.5 11.1 12.9 12.3 13.7" }], ["rect", { "x": 14, "y": 14, "width": 8, "height": 7, "rx": 1.5 }], ["path", { "d": "M16 14V11.5A2 2 0 0 1 20 11.5V14" }], ["line", { "x1": 18, "y1": 17, "x2": 18, "y2": 18 }]]);
var user_lock_default = UserLockIcon;
