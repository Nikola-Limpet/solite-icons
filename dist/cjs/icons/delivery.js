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
var delivery_exports = {};
__export(delivery_exports, {
  DeliveryIcon: () => DeliveryIcon,
  default: () => delivery_default
});
module.exports = __toCommonJS(delivery_exports);
var import_create_icon = require("../create-icon.js");
const DeliveryIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("delivery", [["path", { "d": "M3 7h10v11H6m7-8h5l3 4v4h-8M3 11h5m-6 4h4m7-1h8" }], ["circle", { "cx": 8, "cy": 19, "r": 2 }], ["circle", { "cx": 18, "cy": 19, "r": 2 }]]);
var delivery_default = DeliveryIcon;
