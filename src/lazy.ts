"use client";

import {
  createElement,
  forwardRef,
  lazy,
  Suspense,
  type ReactNode,
  type LazyExoticComponent,
} from "react";
import type { SoliteIconName } from "./data.js";
import type { SoliteIconProps, SoliteIconComponent } from "./create-icon.js";
import { useSoliteDefaults } from "./context.js";
import { lazyIconImports } from "./lazy-imports.js";

export type LazySoliteIconProps = Omit<SoliteIconProps, "name"> & {
  name: SoliteIconName;
  fallback?: ReactNode;
};
export type { SoliteIconName } from "./data.js";

const components = Object.fromEntries(
  Object.entries(lazyIconImports).map(([name, loader]) => [name, lazy(loader)]),
) as Record<SoliteIconName, LazyExoticComponent<SoliteIconComponent>>;

export const LazySoliteIcon = forwardRef<SVGSVGElement, LazySoliteIconProps>(
  function LazySoliteIcon({ name, fallback, ...props }, ref) {
    const defaults = useSoliteDefaults();
    if (!Object.hasOwn(components, name)) throw new Error(`Unknown solite icon: ${String(name)}`);
    const Component = components[name];
    const size = props.size ?? defaults.size ?? 24;
    const placeholder = createElement("svg", {
      width: props.width ?? size,
      height: props.height ?? size,
      className: [defaults.className, props.className].filter(Boolean).join(" ") || undefined,
      style: props.style,
      "aria-hidden": true,
      focusable: "false",
      "data-solite-loading": name,
    });
    return createElement(
      Suspense,
      { key: name, fallback: fallback === undefined ? placeholder : fallback },
      createElement(Component, { ...props, ref }),
    );
  },
);
