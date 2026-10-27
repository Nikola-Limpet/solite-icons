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
var bell_exports = {};
__export(bell_exports, {
  BellIcon: () => BellIcon,
  default: () => bell_default
});
module.exports = __toCommonJS(bell_exports);
var import_create_icon = require("../create-icon.js");
const BellIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("bell", [["path", { "d": "M5 17c1.5-2 1.5-4 1.5-7a5.5 5.5 0 0 1 11 0c0 3 0 5 1.5 7H5Z" }], ["path", { "d": "M10 21h4M12 3v1.5" }]]);
var bell_default = BellIcon;
