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
var bluetooth_exports = {};
__export(bluetooth_exports, {
  BluetoothIcon: () => BluetoothIcon,
  default: () => bluetooth_default
});
module.exports = __toCommonJS(bluetooth_exports);
var import_create_icon = require("../create-icon.js");
const BluetoothIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("bluetooth", [["path", { "d": "M12 3v18l5-4.5-10-9M7 16.5 17 7.5 12 3" }]]);
var bluetooth_default = BluetoothIcon;
