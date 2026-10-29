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
var droplet_exports = {};
__export(droplet_exports, {
  DropletIcon: () => DropletIcon,
  default: () => droplet_default
});
module.exports = __toCommonJS(droplet_exports);
var import_create_icon = require("../create-icon.js");
const DropletIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("droplet", [["path", { "d": "M12 2.5C10 6 5 10 5 14.5a7 7 0 0 0 14 0C19 10 14 6 12 2.5ZM8.5 14.5a3.5 3.5 0 0 0 3.5 3.5" }]]);
var droplet_default = DropletIcon;
