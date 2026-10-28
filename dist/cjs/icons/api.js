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
var api_exports = {};
__export(api_exports, {
  ApiIcon: () => ApiIcon,
  default: () => api_default
});
module.exports = __toCommonJS(api_exports);
var import_create_icon = require("../create-icon.js");
const ApiIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("api", [["path", { "d": "M8 4H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4M16 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4M7 9h10M7 15h10M10 7v4m4 2v4" }]]);
var api_default = ApiIcon;
