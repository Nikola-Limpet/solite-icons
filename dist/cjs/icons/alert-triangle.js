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
var alert_triangle_exports = {};
__export(alert_triangle_exports, {
  AlertTriangleIcon: () => AlertTriangleIcon,
  default: () => alert_triangle_default
});
module.exports = __toCommonJS(alert_triangle_exports);
var import_create_icon = require("../create-icon.js");
const AlertTriangleIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("alert-triangle", [["path", { "d": "m10.3 4.2-7 13.8A2 2 0 0 0 5.1 21h13.8a2 2 0 0 0 1.8-3l-7-13.8a1.9 1.9 0 0 0-3.4 0Z" }], ["line", { "x1": 12, "y1": 9, "x2": 12, "y2": 14 }], ["line", { "x1": 12, "y1": 18, "x2": 12, "y2": 18.01 }]]);
var alert_triangle_default = AlertTriangleIcon;
