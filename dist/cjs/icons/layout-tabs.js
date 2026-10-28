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
var layout_tabs_exports = {};
__export(layout_tabs_exports, {
  LayoutTabsIcon: () => LayoutTabsIcon,
  default: () => layout_tabs_default
});
module.exports = __toCommonJS(layout_tabs_exports);
var import_create_icon = require("../create-icon.js");
const LayoutTabsIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("layout-tabs", [["path", { "d": "M3 9V5a1.5 1.5 0 0 1 1.5-1.5h5A1.5 1.5 0 0 1 11 5v1h7a2 2 0 0 1 2 2v1h1v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9ZM6 9h3m5 0h3" }]]);
var layout_tabs_default = LayoutTabsIcon;
