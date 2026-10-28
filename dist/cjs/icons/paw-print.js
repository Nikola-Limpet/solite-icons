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
var paw_print_exports = {};
__export(paw_print_exports, {
  PawPrintIcon: () => PawPrintIcon,
  default: () => paw_print_default
});
module.exports = __toCommonJS(paw_print_exports);
var import_create_icon = require("../create-icon.js");
const PawPrintIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("paw-print", [["path", { "d": "M12 11c2.5 0 3 2 5 4 3 3 1 6-2 5-2-.7-4-.7-6 0-3 1-5-2-2-5 2-2 2.5-4 5-4Z" }], ["ellipse", { "cx": 4, "cy": 10, "rx": 1.5, "ry": 2 }], ["ellipse", { "cx": 8.5, "cy": 5.5, "rx": 1.5, "ry": 2.5 }], ["ellipse", { "cx": 15.5, "cy": 5.5, "rx": 1.5, "ry": 2.5 }], ["ellipse", { "cx": 20, "cy": 10, "rx": 1.5, "ry": 2 }]]);
var paw_print_default = PawPrintIcon;
