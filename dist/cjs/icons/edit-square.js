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
var edit_square_exports = {};
__export(edit_square_exports, {
  EditSquareIcon: () => EditSquareIcon,
  default: () => edit_square_default
});
module.exports = __toCommonJS(edit_square_exports);
var import_create_icon = require("../create-icon.js");
const EditSquareIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("edit-square", [["path", { "d": "M11 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5M9 15l1-4 8-8 3 3-8 8-4 1Zm7-10 3 3" }]]);
var edit_square_default = EditSquareIcon;
