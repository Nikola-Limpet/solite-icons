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
var heart_exports = {};
__export(heart_exports, {
  HeartIcon: () => HeartIcon,
  default: () => heart_default
});
module.exports = __toCommonJS(heart_exports);
var import_create_icon = require("../create-icon.js");
const HeartIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("heart", [["path", { "d": "M12 20 4.8 13a5.2 5.2 0 0 1 7.2-7.5 5.2 5.2 0 0 1 7.2 7.5L12 20Z" }]]);
var heart_default = HeartIcon;
