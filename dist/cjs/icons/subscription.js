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
var subscription_exports = {};
__export(subscription_exports, {
  SubscriptionIcon: () => SubscriptionIcon,
  default: () => subscription_default
});
module.exports = __toCommonJS(subscription_exports);
var import_create_icon = require("../create-icon.js");
const SubscriptionIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("subscription", [["rect", { "x": 6, "y": 7, "width": 12, "height": 10, "rx": 2 }], ["path", { "d": "M9 12h6M3 9V6a3 3 0 0 1 3-3h12l-2-2m2 2-2 2M21 15v3a3 3 0 0 1-3 3H6l2 2m-2-2 2-2" }]]);
var subscription_default = SubscriptionIcon;
