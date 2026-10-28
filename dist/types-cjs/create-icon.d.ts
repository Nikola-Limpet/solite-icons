import { type ComponentPropsWithoutRef, type ForwardRefExoticComponent, type RefAttributes } from "react";
import type { IconDefinition } from "./geometry.js";
export type SoliteIconProps = Omit<ComponentPropsWithoutRef<"svg">, "children" | "dangerouslySetInnerHTML"> & {
    size?: number | string;
    title?: string;
    nonScalingStroke?: boolean;
};
export type SoliteIconComponent = ForwardRefExoticComponent<SoliteIconProps & RefAttributes<SVGSVGElement>>;
export declare const IconDrawing: ForwardRefExoticComponent<Omit<Omit<import("react").SVGProps<SVGSVGElement>, "ref">, "children" | "dangerouslySetInnerHTML"> & {
    size?: number | string;
    title?: string;
    nonScalingStroke?: boolean;
} & {
    iconName: string;
    definition: IconDefinition;
} & RefAttributes<SVGSVGElement>>;
export declare function createSoliteIcon(name: string, definition: IconDefinition): SoliteIconComponent;
