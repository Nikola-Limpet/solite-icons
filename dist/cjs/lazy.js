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
var lazy_exports = {};
__export(lazy_exports, {
  LazySoliteIcon: () => LazySoliteIcon
});
module.exports = __toCommonJS(lazy_exports);
var import_react = require("react");
var import_context = require("./context.js");
var import_lazy_imports = require("./lazy-imports.js");
const components = Object.fromEntries(
  Object.entries(import_lazy_imports.lazyIconImports).map(([name, loader]) => [name, (0, import_react.lazy)(loader)])
);
const LazySoliteIcon = (0, import_react.forwardRef)(
  function LazySoliteIcon2({ name, fallback, ...props }, ref) {
    const defaults = (0, import_context.useSoliteDefaults)();
    if (!Object.hasOwn(components, name)) throw new Error(`Unknown solite icon: ${String(name)}`);
    const Component = components[name];
    const size = props.size ?? defaults.size ?? 24;
    const placeholder = (0, import_react.createElement)("svg", {
      width: props.width ?? size,
      height: props.height ?? size,
      className: [defaults.className, props.className].filter(Boolean).join(" ") || void 0,
      style: props.style,
      "aria-hidden": true,
      focusable: "false",
      "data-solite-loading": name
    });
    return (0, import_react.createElement)(
      import_react.Suspense,
      { key: name, fallback: fallback === void 0 ? placeholder : fallback },
      (0, import_react.createElement)(Component, { ...props, ref })
    );
  }
);
