function resolveLazyModule(module, exportName) {
  const namespace = module.default;
  const component = module[exportName] ?? (namespace && typeof namespace === "object" ? namespace[exportName] : void 0);
  if (!component || typeof component !== "object" && typeof component !== "function")
    throw new Error(`Could not load solite icon component: ${exportName}`);
  return { default: component };
}
export {
  resolveLazyModule
};
