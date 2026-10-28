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
var asterisk_exports = {};
__export(asterisk_exports, {
  AsteriskIcon: () => AsteriskIcon,
  default: () => asterisk_default
});
module.exports = __toCommonJS(asterisk_exports);
var import_create_icon = require("../create-icon.js");
const AsteriskIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("asterisk", [["path", { "d": "M12 3.5v6m0 5v6M4.6 7.7l5.2 3m4.4 2.6 5.2 3M4.6 16.3l5.2-3m4.4-2.6 5.2-3" }]]);
var asterisk_default = AsteriskIcon;
