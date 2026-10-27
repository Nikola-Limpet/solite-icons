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
var usb_exports = {};
__export(usb_exports, {
  UsbIcon: () => UsbIcon,
  default: () => usb_default
});
module.exports = __toCommonJS(usb_exports);
var import_create_icon = require("../create-icon.js");
const UsbIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("usb", [["path", { "d": "M12 21V3m-2 3 2-3 2 3M12 16H7V10m5 3h5V8" }], ["circle", { "cx": 7, "cy": 8.5, "r": 1.25 }], ["rect", { "x": 16, "y": 5, "width": 2, "height": 2, "rx": 0.25 }]]);
var usb_default = UsbIcon;
