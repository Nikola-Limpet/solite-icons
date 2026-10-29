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
var remove_formatting_exports = {};
__export(remove_formatting_exports, {
  RemoveFormattingIcon: () => RemoveFormattingIcon,
  default: () => remove_formatting_default
});
module.exports = __toCommonJS(remove_formatting_exports);
var import_create_icon = require("../create-icon.js");
const RemoveFormattingIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("remove-formatting", [["path", { "d": "M4 4h14M12 4 8 17m-3 0h6m6-4-4 5m5-2 3 3m-5-1-2 3h7" }]]);
var remove_formatting_default = RemoveFormattingIcon;
