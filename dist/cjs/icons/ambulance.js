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
var ambulance_exports = {};
__export(ambulance_exports, {
  AmbulanceIcon: () => AmbulanceIcon,
  default: () => ambulance_default
});
module.exports = __toCommonJS(ambulance_exports);
var import_create_icon = require("../create-icon.js");
const AmbulanceIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("ambulance", [["path", { "d": "M3 17V5h11v12m0-9h4l4 5v4h-2m-17 0h1m5 0h6M7 8v5m-2.5-2.5h5M17 8v5h5" }], ["circle", { "cx": 6.5, "cy": 18, "r": 2.5 }], ["circle", { "cx": 17.5, "cy": 18, "r": 2.5 }]]);
var ambulance_default = AmbulanceIcon;
