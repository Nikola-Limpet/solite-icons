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
var atom_exports = {};
__export(atom_exports, {
  AtomIcon: () => AtomIcon,
  default: () => atom_default
});
module.exports = __toCommonJS(atom_exports);
var import_create_icon = require("../create-icon.js");
const AtomIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("atom", [["ellipse", { "cx": 12, "cy": 12, "rx": 9.5, "ry": 3.5 }], ["path", { "d": "M16.8 20.2c-1.7 1-5.3-1.9-8-6.4S5.3 5 7.2 3.8s5.3 1.9 8 6.4 3.5 8.8 1.6 10ZM7.2 20.2c-1.9-1.2-1.1-5.5 1.6-10s6.1-7.6 8-6.4 1.1 5.5-1.6 10-6.3 7.4-8 6.4Z" }], ["circle", { "cx": 12, "cy": 12, "r": 0.75 }]]);
var atom_default = AtomIcon;
