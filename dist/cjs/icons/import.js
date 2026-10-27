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
var import_exports = {};
__export(import_exports, {
  ImportIcon: () => ImportIcon,
  default: () => import_default
});
module.exports = __toCommonJS(import_exports);
var import_create_icon = require("../create-icon.js");
const ImportIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("import", [["path", { "d": "M12 4h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6" }], ["path", { "d": "M3 12h12m-4-4 4 4-4 4" }]]);
var import_default = ImportIcon;
