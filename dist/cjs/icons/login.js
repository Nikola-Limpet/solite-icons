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
var login_exports = {};
__export(login_exports, {
  LoginIcon: () => LoginIcon,
  default: () => login_default
});
module.exports = __toCommonJS(login_exports);
var import_create_icon = require("../create-icon.js");
const LoginIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("login", [["path", { "d": "M12.5 3H19A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H12.5" }], ["line", { "x1": 2.5, "y1": 12, "x2": 15, "y2": 12 }], ["polyline", { "points": "10,7 15,12 10,17" }]]);
var login_default = LoginIcon;
