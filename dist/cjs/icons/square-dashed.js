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
var square_dashed_exports = {};
__export(square_dashed_exports, {
  SquareDashedIcon: () => SquareDashedIcon,
  default: () => square_dashed_default
});
module.exports = __toCommonJS(square_dashed_exports);
var import_create_icon = require("../create-icon.js");
const SquareDashedIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("square-dashed", [["path", { "d": "M7.5 3.5H5a1.5 1.5 0 0 0-1.5 1.5v2.5M11 3.5h2m3.5 0H19A1.5 1.5 0 0 1 20.5 5v2.5M20.5 11v2m0 3.5V19a1.5 1.5 0 0 1-1.5 1.5h-2.5M13 20.5h-2m-3.5 0H5A1.5 1.5 0 0 1 3.5 19v-2.5M3.5 13v-2" }]]);
var square_dashed_default = SquareDashedIcon;
