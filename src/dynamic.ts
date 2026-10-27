"use client";

import { createElement, forwardRef } from "react";
import { IconDrawing, type SoliteIconProps } from "./create-icon.js";
import { icons, type SoliteIconName } from "./data.js";

export type DynamicSoliteIconProps = Omit<SoliteIconProps, "name"> & { name: SoliteIconName };
export type { SoliteIconName } from "./data.js";

/** Resolves runtime names. This entry includes the whole icon collection. */
export const SoliteIcon = forwardRef<SVGSVGElement, DynamicSoliteIconProps>(function SoliteIcon(
  { name, ...props },
  ref,
) {
  if (!Object.hasOwn(icons, name)) throw new Error(`Unknown solite icon: ${String(name)}`);
  return createElement(IconDrawing, { ...props, ref, iconName: name, definition: icons[name] });
});
