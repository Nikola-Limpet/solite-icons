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
var queue_exports = {};
__export(queue_exports, {
  QueueIcon: () => QueueIcon,
  default: () => queue_default
});
module.exports = __toCommonJS(queue_exports);
var import_create_icon = require("../create-icon.js");
const QueueIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("queue", [["path", { "d": "M18 5H3v14h15" }], ["rect", { "x": 5.5, "y": 9, "width": 2.5, "height": 6, "rx": 0.6 }], ["rect", { "x": 10.5, "y": 9, "width": 2.5, "height": 6, "rx": 0.6 }], ["rect", { "x": 15.5, "y": 9, "width": 2.5, "height": 6, "rx": 0.6 }], ["line", { "x1": 21.5, "y1": 9, "x2": 21.5, "y2": 15 }]]);
var queue_default = QueueIcon;
