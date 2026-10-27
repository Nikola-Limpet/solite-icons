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
var order_cancel_exports = {};
__export(order_cancel_exports, {
  OrderCancelIcon: () => OrderCancelIcon,
  default: () => order_cancel_default
});
module.exports = __toCommonJS(order_cancel_exports);
var import_create_icon = require("../create-icon.js");
const OrderCancelIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("order-cancel", [["path", { "d": "M10 21H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m6 0h2a2 2 0 0 1 2 2v4" }], ["rect", { "x": 9, "y": 3, "width": 6, "height": 4, "rx": 1.5 }], ["path", { "d": "M9 11h4m-4 4h1m4 0 6 6m0-6-6 6" }]]);
var order_cancel_default = OrderCancelIcon;
