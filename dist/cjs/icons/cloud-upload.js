"use strict";
"use client";
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
var cloud_upload_exports = {};
__export(cloud_upload_exports, {
  CloudUploadIcon: () => CloudUploadIcon,
  default: () => cloud_upload_default
});
module.exports = __toCommonJS(cloud_upload_exports);
var import_create_icon = require("../create-icon.js");
const CloudUploadIcon = /* @__PURE__ */ (0, import_create_icon.createSoliteIcon)("cloud-upload", [["path", { "d": "M6.5 17C2 17 2 10 6 10c.2-3.8 2.6-6 6-6 3.2 0 5.6 2.3 6 5.3C22 9.5 22 17 18 17" }], ["path", { "d": "M12 21V12m-3 3 3-3 3 3" }]]);
var cloud_upload_default = CloudUploadIcon;
