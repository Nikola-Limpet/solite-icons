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
var save_exports = {};
__export(save_exports, {
  SaveIcon: () => SaveIcon,
  default: () => save_default
});
module.exports = __toCommonJS(save_exports);
var import_create_icon = require("../create-icon.js");
const SaveIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("save", [["path", { "d": "M5 3h12l4 4v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" }], ["path", { "d": "M7 3v5h9V3M7 21v-8h10v8" }]]);
var save_default = SaveIcon;
