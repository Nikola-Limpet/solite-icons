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
var workflow_exports = {};
__export(workflow_exports, {
  workflowIcons: () => workflowIcons
});
module.exports = __toCommonJS(workflow_exports);
var import_geometry = require("../geometry.js");
const workflowIcons = {
  "cash-drawer": [(0, import_geometry.r)(3, 5, 18, 15), (0, import_geometry.r)(5.5, 8, 13, 5.5, 1), (0, import_geometry.p)("M3 16h18M9 17.8h6"), (0, import_geometry.c)(12, 10.5, 0.6)],
  "cash-in": [
    (0, import_geometry.r)(3, 4, 15, 11, 1.5),
    (0, import_geometry.c)(10.5, 9.5, 2.5),
    (0, import_geometry.p)("M5 19h14a2 2 0 0 0 2-2v-5M17 7v6m-3-3 3 3 3-3")
  ],
  "cash-out": [
    (0, import_geometry.r)(3, 4, 15, 11, 1.5),
    (0, import_geometry.c)(10.5, 9.5, 2.5),
    (0, import_geometry.p)("M5 19h14a2 2 0 0 0 2-2v-3M17 13V7m-3 3 3-3 3 3")
  ],
  "cloud-sync": [
    (0, import_geometry.p)("M7 16H6a4 4 0 0 1-.6-8A6.5 6.5 0 0 1 18 7a4.5 4.5 0 0 1 2 8"),
    (0, import_geometry.p)("M10 15a4 4 0 0 1 7-2m0-3v3h-3M18 18a4 4 0 0 1-7 2m0 2v-2h3")
  ],
  sunrise: [(0, import_geometry.p)("M3 17h18M5 21h14M7 17a5 5 0 0 1 10 0M12 3v4m-7 3 2 2m12-2-2 2"), (0, import_geometry.p)("m10 5 2-2 2 2")],
  "drag-handle": [
    (0, import_geometry.c)(9, 5, 0.65),
    (0, import_geometry.c)(15, 5, 0.65),
    (0, import_geometry.c)(9, 12, 0.65),
    (0, import_geometry.c)(15, 12, 0.65),
    (0, import_geometry.c)(9, 19, 0.65),
    (0, import_geometry.c)(15, 19, 0.65)
  ],
  "package-add": [
    (0, import_geometry.p)("m11 3 8 4.5v4M11 3 3 7.5v9L11 21l3-1.7M3 7.5l8 4.5 8-4.5M11 12v9M7 5.2l8 4.5"),
    (0, import_geometry.p)("M18 14v7m-3.5-3.5h7")
  ],
  "archive-restore": [
    (0, import_geometry.r)(3, 3, 18, 4, 1),
    (0, import_geometry.p)("M5 7v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7M12 18v-7m-3 3 3-3 3 3")
  ],
  palette: [
    (0, import_geometry.p)(
      "M12 3a9 9 0 1 0 0 18h1a2.3 2.3 0 0 0 1.8-3.7 1.5 1.5 0 0 1 1.2-2.4h1.5A3.5 3.5 0 0 0 21 11.4 8.5 8.5 0 0 0 12 3Z"
    ),
    (0, import_geometry.c)(7.5, 9, 0.7),
    (0, import_geometry.c)(12, 6.5, 0.7),
    (0, import_geometry.c)(16.5, 9, 0.7),
    (0, import_geometry.l)(6.5, 14, 7, 14)
  ]
};
