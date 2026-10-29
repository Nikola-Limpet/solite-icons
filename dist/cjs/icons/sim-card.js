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
var sim_card_exports = {};
__export(sim_card_exports, {
  SimCardIcon: () => SimCardIcon,
  default: () => sim_card_default
});
module.exports = __toCommonJS(sim_card_exports);
var import_create_icon = require("../create-icon.js");
const SimCardIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("sim-card", [["path", { "d": "M7 3h7l4 4v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" }], ["rect", { "x": 8, "y": 10, "width": 7, "height": 7, "rx": 1 }], ["path", { "d": "M11.5 10v7M8 13.5h7" }]]);
var sim_card_default = SimCardIcon;
