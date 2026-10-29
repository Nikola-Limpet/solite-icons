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
var list_exports = {};
__export(list_exports, {
  ListIcon: () => ListIcon,
  default: () => list_default
});
module.exports = __toCommonJS(list_exports);
var import_create_icon = require("../create-icon.js");
const ListIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("list", [["circle", { "cx": 4.5, "cy": 5, "r": 1 }], ["circle", { "cx": 4.5, "cy": 12, "r": 1 }], ["circle", { "cx": 4.5, "cy": 19, "r": 1 }], ["path", { "d": "M9 5h11M9 12h8M9 19h10" }]]);
var list_default = ListIcon;
