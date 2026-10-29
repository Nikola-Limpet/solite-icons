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
var flask_exports = {};
__export(flask_exports, {
  FlaskIcon: () => FlaskIcon,
  default: () => flask_default
});
module.exports = __toCommonJS(flask_exports);
var import_create_icon = require("../create-icon.js");
const FlaskIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("flask", [["path", { "d": "M8 3h8m-6 0v6L4 19a1.3 1.3 0 0 0 1.1 2h13.8a1.3 1.3 0 0 0 1.1-2L14 9V3M7 14h10" }], ["circle", { "cx": 10, "cy": 17.5, "r": 0.5 }], ["circle", { "cx": 14.5, "cy": 18.5, "r": 0.5 }]]);
var flask_default = FlaskIcon;
