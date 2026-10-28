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
var data_stream_exports = {};
__export(data_stream_exports, {
  DataStreamIcon: () => DataStreamIcon,
  default: () => data_stream_default
});
module.exports = __toCommonJS(data_stream_exports);
var import_create_icon = require("../create-icon.js");
const DataStreamIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("data-stream", [["path", { "d": "M3 5h6c4 0 4 4 8 4h4M3 15h6c4 0 4 4 8 4h4" }], ["rect", { "x": 4, "y": 8, "width": 3, "height": 3, "rx": 0.5 }], ["rect", { "x": 10.5, "y": 10, "width": 3, "height": 3, "rx": 0.5 }], ["rect", { "x": 17, "y": 13, "width": 3, "height": 3, "rx": 0.5 }]]);
var data_stream_default = DataStreamIcon;
