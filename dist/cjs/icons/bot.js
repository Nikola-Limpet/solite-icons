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
var bot_exports = {};
__export(bot_exports, {
  BotIcon: () => BotIcon,
  default: () => bot_default
});
module.exports = __toCommonJS(bot_exports);
var import_create_icon = require("../create-icon.js");
const BotIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("bot", [["rect", { "x": 4.5, "y": 7.5, "width": 15, "height": 12, "rx": 3 }], ["circle", { "cx": 12, "cy": 3.5, "r": 1.5 }], ["line", { "x1": 12, "y1": 5, "x2": 12, "y2": 7.5 }], ["path", { "d": "M4.5 11H2.5v5h2m15-5h2v5h-2M9 16h6" }], ["circle", { "cx": 9, "cy": 12, "r": 0.65 }], ["circle", { "cx": 15, "cy": 12, "r": 0.65 }]]);
var bot_default = BotIcon;
