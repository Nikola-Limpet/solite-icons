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
var plus_square_exports = {};
__export(plus_square_exports, {
  PlusSquareIcon: () => PlusSquareIcon,
  default: () => plus_square_default
});
module.exports = __toCommonJS(plus_square_exports);
var import_create_icon = require("../create-icon.js");
const PlusSquareIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("plus-square", [["rect", { "x": 3.5, "y": 3.5, "width": 17, "height": 17, "rx": 2.5 }], ["path", { "d": "M8 12h8M12 8v8" }]]);
var plus_square_default = PlusSquareIcon;
