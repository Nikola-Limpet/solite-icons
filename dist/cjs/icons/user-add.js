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
var user_add_exports = {};
__export(user_add_exports, {
  UserAddIcon: () => UserAddIcon,
  default: () => user_add_default
});
module.exports = __toCommonJS(user_add_exports);
var import_create_icon = require("../create-icon.js");
const UserAddIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("user-add", [["circle", { "cx": 8.5, "cy": 7, "r": 3.5 }], ["path", { "d": "M2.5 21V18.5C2.5 12.5 14.5 12.5 14.5 18.5V21" }], ["line", { "x1": 18.5, "y1": 6, "x2": 18.5, "y2": 13 }], ["line", { "x1": 15, "y1": 9.5, "x2": 22, "y2": 9.5 }]]);
var user_add_default = UserAddIcon;
