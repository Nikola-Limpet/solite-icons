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
var bell_off_exports = {};
__export(bell_off_exports, {
  BellOffIcon: () => BellOffIcon,
  default: () => bell_off_default
});
module.exports = __toCommonJS(bell_off_exports);
var import_create_icon = require("../create-icon.js");
const BellOffIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("bell-off", [["path", { "d": "M7 5.5A5.5 5.5 0 0 1 17.5 8c0 1.4 0 2.5.2 3.5M6.5 10c0 3 0 5-1.5 7h12M10 21h4" }], ["line", { "x1": 3, "y1": 3, "x2": 21, "y2": 21 }]]);
var bell_off_default = BellOffIcon;
