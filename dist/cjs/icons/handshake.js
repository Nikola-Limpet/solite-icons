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
var handshake_exports = {};
__export(handshake_exports, {
  HandshakeIcon: () => HandshakeIcon,
  default: () => handshake_default
});
module.exports = __toCommonJS(handshake_exports);
var import_create_icon = require("../create-icon.js");
const HandshakeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("handshake", [["polyline", { "points": "2.5,6 5.5,5 9,11 5.5,15 2.5,13" }], ["polyline", { "points": "21.5,6 18.5,5 15,11 18.5,15 21.5,13" }], ["path", { "d": "M7 7.5L10 6.5L13 7.5M17 7.5L13.5 6.5L9.5 10C9 10.5 10.2 12 11.5 11.5L13 10.5L17.5 15C19 17 16.5 19 15 17.5L12 14.5M14.5 17L13.5 18C12.5 19 11.5 18 10.5 17L7 13.5" }]]);
var handshake_default = HandshakeIcon;
