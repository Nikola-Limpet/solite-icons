import type { SoliteIconName } from "./data.js";
import type { SoliteIconComponent } from "./create-icon.js";
export declare const lazyIconImports: Record<SoliteIconName, () => Promise<{
    default: SoliteIconComponent;
}>>;
