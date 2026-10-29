import type { SoliteIconComponent } from "./create-icon.js";

/** Node exposes esbuild CommonJS named exports through the default namespace. */
export function resolveLazyModule(
  module: Record<string, unknown>,
  exportName: string,
): { default: SoliteIconComponent } {
  const namespace = module.default;
  const component =
    module[exportName] ??
    (namespace && typeof namespace === "object"
      ? (namespace as Record<string, unknown>)[exportName]
      : undefined);
  if (!component || (typeof component !== "object" && typeof component !== "function"))
    throw new Error(`Could not load solite icon component: ${exportName}`);
  return { default: component as SoliteIconComponent };
}
