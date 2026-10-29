import { type ReactNode } from "react";
import type { SoliteIconProps } from "./create-icon.js";
export type SoliteIconDefaults = Pick<SoliteIconProps, "size" | "color" | "strokeWidth" | "nonScalingStroke" | "className">;
export type SoliteProviderProps = SoliteIconDefaults & {
    children?: ReactNode;
};
export declare function useSoliteDefaults(): SoliteIconDefaults;
export declare function SoliteProvider({ children, size, color, strokeWidth, nonScalingStroke, className, }: SoliteProviderProps): import("react").FunctionComponentElement<import("react").ProviderProps<SoliteIconDefaults>>;
