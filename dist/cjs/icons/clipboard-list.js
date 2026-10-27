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
var clipboard_list_exports = {};
__export(clipboard_list_exports, {
  ClipboardListIcon: () => ClipboardListIcon,
  default: () => clipboard_list_default
});
module.exports = __toCommonJS(clipboard_list_exports);
var import_create_icon = require("../create-icon.js");
const ClipboardListIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("clipboard-list", [["path", { "d": "M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2" }], ["rect", { "x": 8, "y": 3, "width": 8, "height": 5, "rx": 2 }], ["path", { "d": "M8 12h.01M11 12h5m-8 5h.01M11 17h5" }]]);
var clipboard_list_default = ClipboardListIcon;
