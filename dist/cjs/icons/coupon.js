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
var coupon_exports = {};
__export(coupon_exports, {
  CouponIcon: () => CouponIcon,
  default: () => coupon_default
});
module.exports = __toCommonJS(coupon_exports);
var import_create_icon = require("../create-icon.js");
const CouponIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("coupon", [["path", { "d": "M4 5h16a1 1 0 0 1 1 1v3a3 3 0 0 0 0 6v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a3 3 0 0 0 0-6V6a1 1 0 0 1 1-1Z" }], ["path", { "d": "M15 5v2m0 4v2m0 4v2M7 10h4m-4 4h3" }]]);
var coupon_default = CouponIcon;
