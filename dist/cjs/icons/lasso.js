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
var lasso_exports = {};
__export(lasso_exports, {
  LassoIcon: () => LassoIcon,
  default: () => lasso_default
});
module.exports = __toCommonJS(lasso_exports);
var import_create_icon = require("../create-icon.js");
const LassoIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("lasso", [["path", { "d": "M8 16.5C1 15 1.8 7.5 7.5 4.8 13 2 21 4.3 21 9.5c0 4.4-5.2 7.4-10.4 7.3M8.5 15.5c-4.7.5-2.4 4.9-.2 2.7 1.2-1.2-.2-3.7-1.4-4M7.5 19c1 3.3 5.5 3.4 7.5.8" }]]);
var lasso_default = LassoIcon;
