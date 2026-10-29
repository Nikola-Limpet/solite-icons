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
var snowflake_exports = {};
__export(snowflake_exports, {
  SnowflakeIcon: () => SnowflakeIcon,
  default: () => snowflake_default
});
module.exports = __toCommonJS(snowflake_exports);
var import_create_icon = require("../create-icon.js");
const SnowflakeIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("snowflake", [["path", { "d": "M12 2v20M3.3 7l17.4 10M3.3 17 20.7 7M9 4l3 3 3-3M9 20l3-3 3 3M3.5 10l4-1-1-4m11 14-1-4 4-1M3.5 14l4 1-1 4m11-14-1 4 4 1" }]]);
var snowflake_default = SnowflakeIcon;
