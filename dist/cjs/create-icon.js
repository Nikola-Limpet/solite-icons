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
var create_icon_exports = {};
__export(create_icon_exports, {
  IconDrawing: () => IconDrawing,
  createSoliteIcon: () => createSoliteIcon
});
module.exports = __toCommonJS(create_icon_exports);
var import_react = require("react");
var import_context = require("./context.js");
const IconDrawing = (0, import_react.forwardRef)(function IconDrawing2({ iconName, definition, size, color, strokeWidth, nonScalingStroke, className, title, ...props }, ref) {
  const id = (0, import_react.useId)();
  const defaults = (0, import_context.useSoliteDefaults)();
  const resolvedSize = size ?? defaults.size ?? 24;
  const fixedStroke = nonScalingStroke ?? defaults.nonScalingStroke ?? false;
  const accessible = Boolean(title || props["aria-label"] || props["aria-labelledby"]);
  const titleId = title ? `${id}-solite-icon-title` : void 0;
  return (0, import_react.createElement)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: resolvedSize,
      height: resolvedSize,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color ?? defaults.color ?? "currentColor",
      strokeWidth: strokeWidth ?? defaults.strokeWidth ?? 1.75,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      className: [defaults.className, className].filter(Boolean).join(" ") || void 0,
      ref,
      "data-solite-icon": iconName,
      focusable: "false",
      role: props.role ?? (accessible ? "img" : void 0),
      "aria-hidden": props["aria-hidden"] ?? (accessible ? void 0 : true),
      "aria-labelledby": props["aria-labelledby"] ?? (props["aria-label"] ? void 0 : titleId)
    },
    title ? (0, import_react.createElement)("title", { id: titleId }, title) : null,
    ...definition.map(
      ([tag, attributes], index) => (0, import_react.createElement)(tag, {
        ...attributes,
        ...fixedStroke ? { vectorEffect: "non-scaling-stroke" } : {},
        key: index
      })
    )
  );
});
function createSoliteIcon(name, definition) {
  const Icon = (0, import_react.forwardRef)(function SoliteIcon(props, ref) {
    return (0, import_react.createElement)(IconDrawing, { ...props, ref, iconName: name, definition });
  });
  Icon.displayName = name.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join("") + "Icon";
  return Icon;
}
