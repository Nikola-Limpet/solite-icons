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
var history_exports = {};
__export(history_exports, {
  HistoryIcon: () => HistoryIcon,
  default: () => history_default
});
module.exports = __toCommonJS(history_exports);
var import_create_icon = require("../create-icon.js");
const HistoryIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("history", [["path", { "d": "M3 11a9 9 0 1 1 2.6 7.4M3 5v6h6M12 7v5l3 2" }]]);
var history_default = HistoryIcon;
