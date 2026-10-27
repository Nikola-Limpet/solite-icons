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
var dollar_exports = {};
__export(dollar_exports, {
  DollarIcon: () => DollarIcon,
  default: () => dollar_default
});
module.exports = __toCommonJS(dollar_exports);
var import_create_icon = require("../create-icon.js");
const DollarIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("dollar", [["circle", { "cx": 12, "cy": 12, "r": 9 }], ["path", { "d": "M15 8.5c-.8-.7-1.8-1-3-1-2 0-3 .9-3 2.3 0 3.2 6 1.3 6 4.5 0 1.4-1 2.2-3 2.2-1.2 0-2.3-.4-3-1M12 5.5v13" }]]);
var dollar_default = DollarIcon;
