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
var id_card_exports = {};
__export(id_card_exports, {
  IdCardIcon: () => IdCardIcon,
  default: () => id_card_default
});
module.exports = __toCommonJS(id_card_exports);
var import_create_icon = require("../create-icon.js");
const IdCardIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("id-card", [["rect", { "x": 2.5, "y": 5, "width": 19, "height": 14, "rx": 2 }], ["circle", { "cx": 8, "cy": 10.5, "r": 2 }], ["path", { "d": "M4.5 16C4.5 12.8 11.5 12.8 11.5 16" }], ["line", { "x1": 14, "y1": 10, "x2": 18.5, "y2": 10 }], ["line", { "x1": 14, "y1": 14, "x2": 17, "y2": 14 }]]);
var id_card_default = IdCardIcon;
