"use client";
import { createElement, forwardRef } from "react";
import { IconDrawing } from "./create-icon.js";
import { icons } from "./data.js";
const SoliteIcon = forwardRef(function SoliteIcon2({ name, ...props }, ref) {
  if (!Object.hasOwn(icons, name)) throw new Error(`Unknown solite icon: ${String(name)}`);
  return createElement(IconDrawing, { ...props, ref, iconName: name, definition: icons[name] });
});
export {
  SoliteIcon
};
