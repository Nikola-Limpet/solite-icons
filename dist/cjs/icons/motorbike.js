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
var motorbike_exports = {};
__export(motorbike_exports, {
  MotorbikeIcon: () => MotorbikeIcon,
  default: () => motorbike_default
});
module.exports = __toCommonJS(motorbike_exports);
var import_create_icon = require("../create-icon.js");
const MotorbikeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("motorbike", [["circle", { "cx": 5.5, "cy": 17, "r": 3.5 }], ["circle", { "cx": 18.5, "cy": 17, "r": 3.5 }], ["path", { "d": "m5.5 17 4-6h4l2.5 3M8 8h4l2 3h3m1.5 6-3-12H13M3 10h5l1 1" }]]);
var motorbike_default = MotorbikeIcon;
