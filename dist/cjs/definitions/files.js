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
var files_exports = {};
__export(files_exports, {
  fileIcons: () => fileIcons
});
module.exports = __toCommonJS(files_exports);
var import_geometry = require("../geometry.js");
const fileIcons = {
  file: [
    (0, import_geometry.p)("M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9L13 3Z"),
    (0, import_geometry.p)("M13 3v4a2 2 0 0 0 2 2h4")
  ],
  files: [
    (0, import_geometry.p)("M8 3H5a2 2 0 0 0-2 2v12"),
    (0, import_geometry.p)("M15 6H9a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-7L15 6Z"),
    (0, import_geometry.p)("M15 6v4a2 2 0 0 0 2 2h4")
  ],
  "file-add": [
    (0, import_geometry.p)("M10 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l6 6v3"),
    (0, import_geometry.p)("M13 3v4a2 2 0 0 0 2 2h4"),
    (0, import_geometry.l)(13, 17, 21, 17),
    (0, import_geometry.l)(17, 13, 17, 21)
  ],
  "file-check": [
    (0, import_geometry.p)("M10 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l6 6v3"),
    (0, import_geometry.p)("M13 3v4a2 2 0 0 0 2 2h4"),
    (0, import_geometry.p)("m13 17 3 3 5-6")
  ],
  "file-remove": [
    (0, import_geometry.p)("M10 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l6 6v3"),
    (0, import_geometry.p)("M13 3v4a2 2 0 0 0 2 2h4"),
    (0, import_geometry.l)(13, 17, 21, 17)
  ],
  "file-search": [
    (0, import_geometry.p)("M10 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l6 6v2"),
    (0, import_geometry.p)("M13 3v4a2 2 0 0 0 2 2h4"),
    (0, import_geometry.c)(15, 15.5, 3.5),
    (0, import_geometry.l)(17.5, 18, 20.5, 21)
  ],
  "file-lock": [
    (0, import_geometry.p)("M9 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l6 6v2"),
    (0, import_geometry.p)("M13 3v4a2 2 0 0 0 2 2h4"),
    (0, import_geometry.r)(12, 16, 9, 5),
    (0, import_geometry.p)("M14 16v-2a2.5 2.5 0 0 1 5 0v2")
  ],
  "file-text": [
    (0, import_geometry.p)("M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V9L13 3Z"),
    (0, import_geometry.p)("M13 3v4a2 2 0 0 0 2 2h4"),
    (0, import_geometry.p)("M8 12h7m-7 4h5")
  ],
  "file-export": [
    (0, import_geometry.p)("M10 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l6 6v2"),
    (0, import_geometry.p)("M13 3v4a2 2 0 0 0 2 2h4"),
    (0, import_geometry.p)("M11 16h10m-3-3 3 3-3 3")
  ],
  "file-import": [
    (0, import_geometry.p)("M11 21H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7l6 6v2"),
    (0, import_geometry.p)("M13 3v4a2 2 0 0 0 2 2h4"),
    (0, import_geometry.p)("M21 16H11m3-3-3 3 3 3")
  ],
  folder: [
    (0, import_geometry.p)("M3 8V6a2 2 0 0 1 2-2h4l3 3h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8Z"),
    (0, import_geometry.l)(3, 10, 21, 10)
  ],
  "folder-open": [
    (0, import_geometry.p)("M3 17V6a2 2 0 0 1 2-2h4l3 3h6a2 2 0 0 1 2 2"),
    (0, import_geometry.p)(
      "M6 11h13.5a1.5 1.5 0 0 1 1.45 1.9l-1.7 6a1.5 1.5 0 0 1-1.45 1.1H5a2 2 0 0 1-1.94-2.48L4.5 12.2A1.5 1.5 0 0 1 6 11Z"
    )
  ],
  "folder-add": [
    (0, import_geometry.p)("M11 21H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h4l3 3h7a2 2 0 0 1 2 2v3"),
    (0, import_geometry.l)(3, 10, 21, 10),
    (0, import_geometry.p)("M13 17h8m-4-4v8")
  ],
  archive: [(0, import_geometry.r)(3, 4, 18, 5), (0, import_geometry.p)("M5 9v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V9"), (0, import_geometry.l)(9, 13, 15, 13)],
  clipboard: [
    (0, import_geometry.p)("M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"),
    (0, import_geometry.r)(8, 3, 8, 5)
  ],
  "clipboard-check": [
    (0, import_geometry.p)("M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"),
    (0, import_geometry.r)(8, 3, 8, 5),
    (0, import_geometry.p)("m8 14 3 3 5-5")
  ],
  "clipboard-list": [
    (0, import_geometry.p)("M8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"),
    (0, import_geometry.r)(8, 3, 8, 5),
    (0, import_geometry.p)("M8 12h.01M11 12h5m-8 5h.01M11 17h5")
  ],
  book: [
    (0, import_geometry.p)(
      "M12 6C9.5 4 6.5 3.5 3 4.5v15c3.5-1 6.5-.5 9 1.5 2.5-2 5.5-2.5 9-1.5v-15c-3.5-1-6.5-.5-9 1.5Z"
    ),
    (0, import_geometry.l)(12, 6, 12, 21)
  ],
  notebook: [(0, import_geometry.r)(5, 3, 15, 18), (0, import_geometry.l)(9, 3, 9, 21), (0, import_geometry.p)("M3 7h3m-3 5h3m-3 5h3M13 8h3m-3 4h3")],
  paperclip: [
    (0, import_geometry.p)("m8 14 7-7a2.12 2.12 0 0 1 3 3l-8 8a3.54 3.54 0 0 1-5-5l8-8a4.95 4.95 0 0 1 7 7l-8 8")
  ]
};
