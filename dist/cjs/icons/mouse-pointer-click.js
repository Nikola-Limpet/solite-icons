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
var mouse_pointer_click_exports = {};
__export(mouse_pointer_click_exports, {
  MousePointerClickIcon: () => MousePointerClickIcon,
  default: () => mouse_pointer_click_default
});
module.exports = __toCommonJS(mouse_pointer_click_exports);
var import_create_icon = require("../create-icon.js");
const MousePointerClickIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("mouse-pointer-click", [["path", { "d": "M7 8 20 15l-5.5 1 2.5 4.5-2.7 1.5-2.5-4.5L8 21 7 8ZM4 3l1.5 2M9 2v2m-7 5h2M13 4l-1.5 1.5" }]]);
var mouse_pointer_click_default = MousePointerClickIcon;
