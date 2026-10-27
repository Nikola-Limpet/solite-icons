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
var key_exports = {};
__export(key_exports, {
  KeyIcon: () => KeyIcon,
  default: () => key_default
});
module.exports = __toCommonJS(key_exports);
var import_create_icon = require("../create-icon.js");
const KeyIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("key", [["path", { "d": "M13.2 8.8A5.3 5.3 0 1 0 10.2 13.2L13 16H16V19H19V21H22V17.5L13.2 8.8Z" }], ["circle", { "cx": 6.5, "cy": 6.5, "r": 1.25 }]]);
var key_default = KeyIcon;
