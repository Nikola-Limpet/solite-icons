import { type ReactNode } from "react";
import type { SoliteIconName } from "./data.js";
import type { SoliteIconProps } from "./create-icon.js";
export type LazySoliteIconProps = Omit<SoliteIconProps, "name"> & {
    name: SoliteIconName;
    fallback?: ReactNode;
};
export type { SoliteIconName } from "./data.js";
export declare const LazySoliteIcon: import("react").ForwardRefExoticComponent<Omit<SoliteIconProps, "name"> & {
    name: SoliteIconName;
    fallback?: ReactNode;
} & import("react").RefAttributes<SVGSVGElement>>;
