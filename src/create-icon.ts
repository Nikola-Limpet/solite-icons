"use client";

import { createElement, forwardRef, useId, type ComponentPropsWithoutRef } from "react";
import type { IconDefinition } from "./geometry.js";

export type SoliteIconProps = Omit<
  ComponentPropsWithoutRef<"svg">,
  "children" | "dangerouslySetInnerHTML"
> & {
  size?: number | string;
  title?: string;
};

type IconDrawingProps = SoliteIconProps & { iconName: string; definition: IconDefinition };

export const IconDrawing = forwardRef<SVGSVGElement, IconDrawingProps>(function IconDrawing(
  { iconName, definition, size = 24, color = "currentColor", strokeWidth = 1.75, title, ...props },
  ref,
) {
  const id = useId();
  const accessible = Boolean(title || props["aria-label"] || props["aria-labelledby"]);
  const titleId = title ? `${id}-solite-icon-title` : undefined;
  return createElement(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      ...props,
      ref,
      "data-solite-icon": iconName,
      focusable: "false",
      role: props.role ?? (accessible ? "img" : undefined),
      "aria-hidden": props["aria-hidden"] ?? (accessible ? undefined : true),
      "aria-labelledby": props["aria-labelledby"] ?? (props["aria-label"] ? undefined : titleId),
    },
    title ? createElement("title", { id: titleId }, title) : null,
    ...definition.map(([tag, attributes], index) =>
      createElement(tag, { ...attributes, key: index }),
    ),
  );
});

export function createSoliteIcon(name: string, definition: IconDefinition) {
  const Icon = forwardRef<SVGSVGElement, SoliteIconProps>(function SoliteIcon(props, ref) {
    return createElement(IconDrawing, { ...props, ref, iconName: name, definition });
  });
  Icon.displayName =
    name
      .split("-")
      .map((part) => part[0].toUpperCase() + part.slice(1))
      .join("") + "Icon";
  return Icon;
}
