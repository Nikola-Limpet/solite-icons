"use client";

import {
  createElement,
  forwardRef,
  useId,
  type ComponentPropsWithoutRef,
  type ForwardRefExoticComponent,
  type RefAttributes,
} from "react";
import type { IconDefinition } from "./geometry.js";
import { useSoliteDefaults } from "./context.js";

export type SoliteIconProps = Omit<
  ComponentPropsWithoutRef<"svg">,
  "children" | "dangerouslySetInnerHTML"
> & {
  size?: number | string;
  title?: string;
  nonScalingStroke?: boolean;
};

export type SoliteIconComponent = ForwardRefExoticComponent<
  SoliteIconProps & RefAttributes<SVGSVGElement>
>;

type IconDrawingProps = SoliteIconProps & { iconName: string; definition: IconDefinition };

export const IconDrawing = forwardRef<SVGSVGElement, IconDrawingProps>(function IconDrawing(
  { iconName, definition, size, color, strokeWidth, nonScalingStroke, className, title, ...props },
  ref,
) {
  const id = useId();
  const defaults = useSoliteDefaults();
  const resolvedSize = size ?? defaults.size ?? 24;
  const fixedStroke = nonScalingStroke ?? defaults.nonScalingStroke ?? false;
  const accessible = Boolean(title || props["aria-label"] || props["aria-labelledby"]);
  const titleId = title ? `${id}-solite-icon-title` : undefined;
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
      className: [defaults.className, className].filter(Boolean).join(" ") || undefined,
      ref,
      "data-solite-icon": iconName,
      focusable: "false",
      role: props.role ?? (accessible ? "img" : undefined),
      "aria-hidden": props["aria-hidden"] ?? (accessible ? undefined : true),
      "aria-labelledby": props["aria-labelledby"] ?? (props["aria-label"] ? undefined : titleId),
    },
    title ? createElement("title", { id: titleId }, title) : null,
    ...definition.map(([tag, attributes], index) =>
      createElement(tag, {
        ...attributes,
        ...(fixedStroke ? { vectorEffect: "non-scaling-stroke" } : {}),
        key: index,
      }),
    ),
  );
});

export function createSoliteIcon(name: string, definition: IconDefinition): SoliteIconComponent {
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
