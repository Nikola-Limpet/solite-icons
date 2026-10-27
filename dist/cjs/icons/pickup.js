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
var pickup_exports = {};
__export(pickup_exports, {
  PickupIcon: () => PickupIcon,
  default: () => pickup_default
});
module.exports = __toCommonJS(pickup_exports);
var import_create_icon = require("../create-icon.js");
const PickupIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("pickup", [["path", { "d": "M4 13h16v8H4v-8ZM8 13V9m8 4V9M12 3v9m-4-5 4-4 4 4" }], ["line", { "x1": 9, "y1": 17, "x2": 15, "y2": 17 }]]);
var pickup_default = PickupIcon;
