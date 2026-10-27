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
var restaurant_exports = {};
__export(restaurant_exports, {
  RestaurantIcon: () => RestaurantIcon,
  default: () => restaurant_default
});
module.exports = __toCommonJS(restaurant_exports);
var import_create_icon = require("../create-icon.js");
const RestaurantIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("restaurant", [["path", { "d": "M3 12h18M5 12a7 7 0 0 1 14 0M12 5V3M3 15h18" }], ["path", { "d": "M5 21v-3h14v3M9 18v3m6-3v3" }]]);
var restaurant_default = RestaurantIcon;
