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
var washing_machine_exports = {};
__export(washing_machine_exports, {
  WashingMachineIcon: () => WashingMachineIcon,
  default: () => washing_machine_default
});
module.exports = __toCommonJS(washing_machine_exports);
var import_create_icon = require("../create-icon.js");
const WashingMachineIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("washing-machine", [["rect", { "x": 3, "y": 2.5, "width": 18, "height": 19, "rx": 2 }], ["circle", { "cx": 12, "cy": 14, "r": 5 }], ["path", { "d": "M3 7h18M6 4.75h1m4 0h1M7 14c3-3 7 3 10 0" }]]);
var washing_machine_default = WashingMachineIcon;
