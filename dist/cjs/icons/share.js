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
var share_exports = {};
__export(share_exports, {
  ShareIcon: () => ShareIcon,
  default: () => share_default
});
module.exports = __toCommonJS(share_exports);
var import_create_icon = require("../create-icon.js");
const ShareIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("share", [["circle", { "cx": 5, "cy": 12, "r": 2.5 }], ["circle", { "cx": 18, "cy": 5, "r": 2.5 }], ["circle", { "cx": 18, "cy": 19, "r": 2.5 }], ["path", { "d": "m7.2 10.8 8.6-4.6m-8.6 7 8.6 4.6" }]]);
var share_default = ShareIcon;
