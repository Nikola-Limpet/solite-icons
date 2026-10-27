import { type ComponentPropsWithoutRef } from "react";
import type { IconDefinition } from "./geometry.js";
export type SoliteIconProps = Omit<ComponentPropsWithoutRef<"svg">, "children" | "dangerouslySetInnerHTML"> & {
    size?: number | string;
    title?: string;
};
export declare const IconDrawing: import("react").ForwardRefExoticComponent<Omit<Omit<import("react").SVGProps<SVGSVGElement>, "ref">, "children" | "dangerouslySetInnerHTML"> & {
    size?: number | string;
    title?: string;
} & {
    iconName: string;
    definition: IconDefinition;
} & import("react").RefAttributes<SVGSVGElement>>;
export declare function createSoliteIcon(name: string, definition: IconDefinition): import("react").ForwardRefExoticComponent<Omit<Omit<import("react").SVGProps<SVGSVGElement>, "ref">, "children" | "dangerouslySetInnerHTML"> & {
    size?: number | string;
    title?: string;
} & import("react").RefAttributes<SVGSVGElement>>;
