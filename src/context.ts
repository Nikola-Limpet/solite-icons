"use client";

import { createContext, createElement, useContext, type ReactNode } from "react";
import type { SoliteIconProps } from "./create-icon.js";

export type SoliteIconDefaults = Pick<
  SoliteIconProps,
  "size" | "color" | "strokeWidth" | "nonScalingStroke" | "className"
>;

export type SoliteProviderProps = SoliteIconDefaults & { children?: ReactNode };

const SoliteContext = createContext<SoliteIconDefaults>({});

export function useSoliteDefaults(): SoliteIconDefaults {
  return useContext(SoliteContext);
}

export function SoliteProvider({
  children,
  size,
  color,
  strokeWidth,
  nonScalingStroke,
  className,
}: SoliteProviderProps) {
  const parent = useSoliteDefaults();
  return createElement(
    SoliteContext.Provider,
    {
      value: {
        size: size ?? parent.size,
        color: color ?? parent.color,
        strokeWidth: strokeWidth ?? parent.strokeWidth,
        nonScalingStroke: nonScalingStroke ?? parent.nonScalingStroke,
        className: [parent.className, className].filter(Boolean).join(" ") || undefined,
      },
    },
    children,
  );
}
