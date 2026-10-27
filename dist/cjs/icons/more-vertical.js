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
var more_vertical_exports = {};
__export(more_vertical_exports, {
  MoreVerticalIcon: () => MoreVerticalIcon,
  default: () => more_vertical_default
});
module.exports = __toCommonJS(more_vertical_exports);
var import_create_icon = require("../create-icon.js");
const MoreVerticalIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("more-vertical", [["circle", { "cx": 12, "cy": 5, "r": 0.8 }], ["circle", { "cx": 12, "cy": 12, "r": 0.8 }], ["circle", { "cx": 12, "cy": 19, "r": 0.8 }]]);
var more_vertical_default = MoreVerticalIcon;
