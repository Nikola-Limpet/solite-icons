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
var truck_exports = {};
__export(truck_exports, {
  TruckIcon: () => TruckIcon,
  default: () => truck_default
});
module.exports = __toCommonJS(truck_exports);
var import_create_icon = require("../create-icon.js");
const TruckIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("truck", [["path", { "d": "M3 5h11v13H3V5Zm11 5h4l3 4v4h-7m0-4h7" }], ["circle", { "cx": 7, "cy": 19, "r": 2 }], ["circle", { "cx": 18, "cy": 19, "r": 2 }]]);
var truck_default = TruckIcon;
