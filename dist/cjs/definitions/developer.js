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
var developer_exports = {};
__export(developer_exports, {
  developerIcons: () => developerIcons
});
module.exports = __toCommonJS(developer_exports);
var import_geometry = require("../geometry.js");
const developerIcons = {
  code: [(0, import_geometry.p)("m7.5 6.5-5 5.5 5 5.5m9-11 5 5.5-5 5.5M14.5 3.5l-5 17")],
  terminal: [(0, import_geometry.r)(3, 4, 18, 16, 2.5), (0, import_geometry.l)(3, 8.5, 21, 8.5), (0, import_geometry.p)("m7 12 3 3-3 3M14 18h3")],
  command: [
    (0, import_geometry.p)(
      "M8.5 8.5H5.75A2.75 2.75 0 1 1 8.5 5.75v12.5A2.75 2.75 0 1 1 5.75 15.5h12.5a2.75 2.75 0 1 1-2.75 2.75V5.75a2.75 2.75 0 1 1 2.75 2.75H8.5Z"
    )
  ],
  braces: [
    (0, import_geometry.p)(
      "M8.5 3.5h-1a2 2 0 0 0-2 2v3.25C5.5 10.5 4 12 2.5 12c1.5 0 3 1.5 3 3.25v3.25a2 2 0 0 0 2 2h1m7-17h1a2 2 0 0 1 2 2v3.25c0 1.75 1.5 3.25 3 3.25-1.5 0-3 1.5-3 3.25v3.25a2 2 0 0 1-2 2h-1"
    )
  ],
  "git-branch": [
    (0, import_geometry.c)(6.5, 5, 2.5),
    (0, import_geometry.c)(6.5, 19, 2.5),
    (0, import_geometry.c)(18, 8, 2.5),
    (0, import_geometry.l)(6.5, 7.5, 6.5, 16.5),
    (0, import_geometry.p)("M6.5 13.5H12a6 6 0 0 0 6-3")
  ],
  bot: [
    (0, import_geometry.r)(4.5, 7.5, 15, 12, 3),
    (0, import_geometry.c)(12, 3.5, 1.5),
    (0, import_geometry.l)(12, 5, 12, 7.5),
    (0, import_geometry.p)("M4.5 11H2.5v5h2m15-5h2v5h-2M9 16h6"),
    (0, import_geometry.c)(9, 12, 0.65),
    (0, import_geometry.c)(15, 12, 0.65)
  ]
};
