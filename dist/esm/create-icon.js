"use client";
import {
  createElement,
  forwardRef,
  useId
} from "react";
import { useSoliteDefaults } from "./context.js";
const IconDrawing = forwardRef(function IconDrawing2({ iconName, definition, size, color, strokeWidth, nonScalingStroke, className, title, ...props }, ref) {
  const id = useId();
  const defaults = useSoliteDefaults();
  const resolvedSize = size ?? defaults.size ?? 24;
  const fixedStroke = nonScalingStroke ?? defaults.nonScalingStroke ?? false;
  const accessible = Boolean(title || props["aria-label"] || props["aria-labelledby"]);
  const titleId = title ? `${id}-solite-icon-title` : void 0;
  return createElement(
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
    title ? createElement("title", { id: titleId }, title) : null,
    ...definition.map(
      ([tag, attributes], index) => createElement(tag, {
        ...attributes,
        ...fixedStroke ? { vectorEffect: "non-scaling-stroke" } : {},
        key: index
      })
    )
  );
});
function createSoliteIcon(name, definition) {
  const Icon = forwardRef(function SoliteIcon(props, ref) {
    return createElement(IconDrawing, { ...props, ref, iconName: name, definition });
  });
  Icon.displayName = name.split("-").map((part) => part[0].toUpperCase() + part.slice(1)).join("") + "Icon";
  return Icon;
}
export {
  IconDrawing,
  createSoliteIcon
};
