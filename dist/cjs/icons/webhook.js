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
var webhook_exports = {};
__export(webhook_exports, {
  WebhookIcon: () => WebhookIcon,
  default: () => webhook_default
});
module.exports = __toCommonJS(webhook_exports);
var import_create_icon = require("../create-icon.js");
const WebhookIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("webhook", [["circle", { "cx": 12, "cy": 5.5, "r": 3 }], ["circle", { "cx": 5.5, "cy": 18, "r": 3 }], ["circle", { "cx": 18.5, "cy": 18, "r": 3 }], ["path", { "d": "M12 8.5V12l-4.5 4m4.5-4 4.5 4M8.5 18h7" }]]);
var webhook_default = WebhookIcon;
