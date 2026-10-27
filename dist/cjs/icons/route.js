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
var route_exports = {};
__export(route_exports, {
  RouteIcon: () => RouteIcon,
  default: () => route_default
});
module.exports = __toCommonJS(route_exports);
var import_create_icon = require("../create-icon.js");
const RouteIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("route", [["circle", { "cx": 5, "cy": 18.5, "r": 2.5 }], ["circle", { "cx": 19, "cy": 5.5, "r": 2.5 }], ["path", { "d": "M7.5 18.5H16.5A3.5 3.5 0 0 0 16.5 11.5H7.5A3 3 0 0 1 7.5 5.5H16.5" }]]);
var route_default = RouteIcon;
