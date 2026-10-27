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
var book_exports = {};
__export(book_exports, {
  BookIcon: () => BookIcon,
  default: () => book_default
});
module.exports = __toCommonJS(book_exports);
var import_create_icon = require("../create-icon.js");
const BookIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("book", [["path", { "d": "M12 6C9.5 4 6.5 3.5 3 4.5v15c3.5-1 6.5-.5 9 1.5 2.5-2 5.5-2.5 9-1.5v-15c-3.5-1-6.5-.5-9 1.5Z" }], ["line", { "x1": 12, "y1": 6, "x2": 12, "y2": 21 }]]);
var book_default = BookIcon;
