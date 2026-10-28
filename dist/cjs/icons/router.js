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
var router_exports = {};
__export(router_exports, {
  RouterIcon: () => RouterIcon,
  default: () => router_default
});
module.exports = __toCommonJS(router_exports);
var import_create_icon = require("../create-icon.js");
const RouterIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("router", [["rect", { "x": 3, "y": 12, "width": 18, "height": 8, "rx": 2.5 }], ["path", { "d": "m6 12-2-8m14 8 2-8M7 16h1m4 0h1" }]]);
var router_default = RouterIcon;
