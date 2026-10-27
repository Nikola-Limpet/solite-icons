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
var server_exports = {};
__export(server_exports, {
  ServerIcon: () => ServerIcon,
  default: () => server_default
});
module.exports = __toCommonJS(server_exports);
var import_create_icon = require("../create-icon.js");
const ServerIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("server", [["rect", { "x": 3, "y": 3, "width": 18, "height": 7, "rx": 2 }], ["rect", { "x": 3, "y": 14, "width": 18, "height": 7, "rx": 2 }], ["path", { "d": "M7 6.5h.01M7 17.5h.01M12 6.5h5m-5 11h5" }]]);
var server_default = ServerIcon;
