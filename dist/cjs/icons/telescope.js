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
var telescope_exports = {};
__export(telescope_exports, {
  TelescopeIcon: () => TelescopeIcon,
  default: () => telescope_default
});
module.exports = __toCommonJS(telescope_exports);
var import_create_icon = require("../create-icon.js");
const TelescopeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("telescope", [["path", { "d": "m6 7 13-4 2 6-13 4-2-6Zm1 3-4 1 1 3 4-1M13 12v3m-4 6 4-6 4 6m-4-6v6" }]]);
var telescope_default = TelescopeIcon;
