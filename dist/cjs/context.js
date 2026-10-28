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
var context_exports = {};
__export(context_exports, {
  SoliteProvider: () => SoliteProvider,
  useSoliteDefaults: () => useSoliteDefaults
});
module.exports = __toCommonJS(context_exports);
var import_react = require("react");
const SoliteContext = (0, import_react.createContext)({});
function useSoliteDefaults() {
  return (0, import_react.useContext)(SoliteContext);
}
function SoliteProvider({
  children,
  size,
  color,
  strokeWidth,
  nonScalingStroke,
  className
}) {
  const parent = useSoliteDefaults();
  return (0, import_react.createElement)(
    SoliteContext.Provider,
    {
      value: {
        size: size ?? parent.size,
        color: color ?? parent.color,
        strokeWidth: strokeWidth ?? parent.strokeWidth,
        nonScalingStroke: nonScalingStroke ?? parent.nonScalingStroke,
        className: [parent.className, className].filter(Boolean).join(" ") || void 0
      }
    },
    children
  );
}
