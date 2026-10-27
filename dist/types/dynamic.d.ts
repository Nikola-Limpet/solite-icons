import { type SoliteIconProps } from "./create-icon.js";
import { type SoliteIconName } from "./data.js";
export type DynamicSoliteIconProps = Omit<SoliteIconProps, "name"> & {
    name: SoliteIconName;
};
export type { SoliteIconName } from "./data.js";
/** Resolves runtime names. This entry includes the whole icon collection. */
export declare const SoliteIcon: import("react").ForwardRefExoticComponent<Omit<SoliteIconProps, "name"> & {
    name: SoliteIconName;
} & import("react").RefAttributes<SVGSVGElement>>;
