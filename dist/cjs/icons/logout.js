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
var logout_exports = {};
__export(logout_exports, {
  LogoutIcon: () => LogoutIcon,
  default: () => logout_default
});
module.exports = __toCommonJS(logout_exports);
var import_create_icon = require("../create-icon.js");
const LogoutIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("logout", [["path", { "d": "M11.5 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H11.5" }], ["line", { "x1": 10, "y1": 12, "x2": 22, "y2": 12 }], ["polyline", { "points": "17,7 22,12 17,17" }]]);
var logout_default = LogoutIcon;
