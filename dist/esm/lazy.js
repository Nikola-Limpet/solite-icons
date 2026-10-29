"use client";
import {
  createElement,
  forwardRef,
  lazy,
  Suspense
} from "react";
import { useSoliteDefaults } from "./context.js";
import { lazyIconImports } from "./lazy-imports.js";
const components = Object.fromEntries(
  Object.entries(lazyIconImports).map(([name, loader]) => [name, lazy(loader)])
);
const LazySoliteIcon = forwardRef(
  function LazySoliteIcon2({ name, fallback, ...props }, ref) {
    const defaults = useSoliteDefaults();
    if (!Object.hasOwn(components, name)) throw new Error(`Unknown solite icon: ${String(name)}`);
    const Component = components[name];
    const size = props.size ?? defaults.size ?? 24;
    const placeholder = createElement("svg", {
      width: props.width ?? size,
      height: props.height ?? size,
      className: [defaults.className, props.className].filter(Boolean).join(" ") || void 0,
      style: props.style,
      "aria-hidden": true,
      focusable: "false",
      "data-solite-loading": name
    });
    return createElement(
      Suspense,
      { key: name, fallback: fallback === void 0 ? placeholder : fallback },
      createElement(Component, { ...props, ref })
    );
  }
);
export {
  LazySoliteIcon
};
