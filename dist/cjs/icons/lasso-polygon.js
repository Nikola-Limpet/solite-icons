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
var lasso_polygon_exports = {};
__export(lasso_polygon_exports, {
  LassoPolygonIcon: () => LassoPolygonIcon,
  default: () => lasso_polygon_default
});
module.exports = __toCommonJS(lasso_polygon_exports);
var import_create_icon = require("../create-icon.js");
const LassoPolygonIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("lasso-polygon", [["polyline", { "points": "7 4 18 4 21 13 12 18 4 13 7 4" }], ["path", { "d": "M4 13c-3 1-2.2 4.5 0 4 2.4-.5 1.6-4-.8-4.7M4 18c1 3 4.5 3.8 7 2.5" }]]);
var lasso_polygon_default = LassoPolygonIcon;
