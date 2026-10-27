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
var gift_exports = {};
__export(gift_exports, {
  GiftIcon: () => GiftIcon,
  default: () => gift_default
});
module.exports = __toCommonJS(gift_exports);
var import_create_icon = require("../create-icon.js");
const GiftIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("gift", [["rect", { "x": 3, "y": 8, "width": 18, "height": 4, "rx": 1 }], ["path", { "d": "M5 12v8h14v-8M12 8v12" }], ["path", { "d": "M12 8H8a2.5 2.5 0 1 1 2.5-2.5L12 8Zm0 0h4a2.5 2.5 0 1 0-2.5-2.5L12 8Z" }]]);
var gift_default = GiftIcon;
