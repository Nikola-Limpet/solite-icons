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
var load_balancer_exports = {};
__export(load_balancer_exports, {
  LoadBalancerIcon: () => LoadBalancerIcon,
  default: () => load_balancer_default
});
module.exports = __toCommonJS(load_balancer_exports);
var import_create_icon = require("../create-icon.js");
const LoadBalancerIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("load-balancer", [["circle", { "cx": 12, "cy": 5, "r": 2.5 }], ["path", { "d": "M12 7.5V12M5 16v-4h14v4M12 12v4" }], ["rect", { "x": 2.5, "y": 16, "width": 5, "height": 5, "rx": 1 }], ["rect", { "x": 9.5, "y": 16, "width": 5, "height": 5, "rx": 1 }], ["rect", { "x": 16.5, "y": 16, "width": 5, "height": 5, "rx": 1 }], ["path", { "d": "M2.5 18.5h5m2 0h5m2 0h5" }]]);
var load_balancer_default = LoadBalancerIcon;
