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
var hospital_exports = {};
__export(hospital_exports, {
  HospitalIcon: () => HospitalIcon,
  default: () => hospital_default
});
module.exports = __toCommonJS(hospital_exports);
var import_create_icon = require("../create-icon.js");
const HospitalIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("hospital", [["path", { "d": "M7 21V3h10v18M3 21V11h4M17 11h4v10H3M10 21v-5h4v5M12 6v6M9 9h6" }]]);
var hospital_default = HospitalIcon;
