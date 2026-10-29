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
var virtual_machine_exports = {};
__export(virtual_machine_exports, {
  VirtualMachineIcon: () => VirtualMachineIcon,
  default: () => virtual_machine_default
});
module.exports = __toCommonJS(virtual_machine_exports);
var import_create_icon = require("../create-icon.js");
const VirtualMachineIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("virtual-machine", [["rect", { "x": 2.5, "y": 3, "width": 19, "height": 16, "rx": 2 }], ["rect", { "x": 7, "y": 7, "width": 10, "height": 7, "rx": 1 }], ["path", { "d": "M7 10h10M6 19v3m12-3v3M4 22h4m8 0h4" }]]);
var virtual_machine_default = VirtualMachineIcon;
