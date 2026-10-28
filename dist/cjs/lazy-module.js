"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var lazy_module_exports = {};
__export(lazy_module_exports, {
  resolveLazyModule: () => resolveLazyModule
});
module.exports = __toCommonJS(lazy_module_exports);
function resolveLazyModule(module2, exportName) {
  const namespace = module2.default;
  const component = module2[exportName] ?? (namespace && typeof namespace === "object" ? namespace[exportName] : void 0);
  if (!component || typeof component !== "object" && typeof component !== "function")
    throw new Error(`Could not load solite icon component: ${exportName}`);
  return { default: component };
}
