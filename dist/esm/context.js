"use client";
import { createContext, createElement, useContext } from "react";
const SoliteContext = createContext({});
function useSoliteDefaults() {
  return useContext(SoliteContext);
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
  return createElement(
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
export {
  SoliteProvider,
  useSoliteDefaults
};
