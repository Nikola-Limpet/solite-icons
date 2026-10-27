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
var data_exports = {};
__export(data_exports, {
  dataIcons: () => dataIcons
});
module.exports = __toCommonJS(data_exports);
var import_geometry = require("../geometry.js");
const dataIcons = {
  "chart-bar": [(0, import_geometry.p)("M3 4v15a2 2 0 0 0 2 2h16"), (0, import_geometry.p)("M7 16v-5m5 5V7m5 9V3")],
  "chart-line": [(0, import_geometry.p)("M3 4v15a2 2 0 0 0 2 2h16"), (0, import_geometry.p)("m6 15 4-5 4 3 6-8")],
  "chart-pie": [(0, import_geometry.p)("M10 3a9 9 0 1 0 11 11H10V3Z"), (0, import_geometry.p)("M14 3v7h7a9 9 0 0 0-7-7Z")],
  "chart-donut": [
    (0, import_geometry.p)("M10 3.2a9 9 0 1 0 10.8 10.8h-4.2a5 5 0 1 1-6.6-6.6V3.2Z"),
    (0, import_geometry.p)("M14 3.2v4.2a5 5 0 0 1 2.6 2.6h4.2A9 9 0 0 0 14 3.2Z")
  ],
  "trend-up": [(0, import_geometry.p)("m3 18 6-6 4 3 8-10m-6 0h6v6")],
  "trend-down": [(0, import_geometry.p)("m3 6 6 6 4-3 8 10m-6 0h6v-6")],
  report: [(0, import_geometry.r)(3, 3, 18, 18), (0, import_geometry.p)("M7 17v-4m5 4V9m5 8v-6M7 7h4")],
  "table-data": [(0, import_geometry.r)(3, 4, 18, 16), (0, import_geometry.p)("M3 9h18M3 14h18M9 9v11m6-11v11")],
  database: [
    (0, import_geometry.e)(12, 6, 8, 3),
    (0, import_geometry.p)("M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6"),
    (0, import_geometry.p)("M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3")
  ],
  server: [(0, import_geometry.r)(3, 3, 18, 7), (0, import_geometry.r)(3, 14, 18, 7), (0, import_geometry.p)("M7 6.5h.01M7 17.5h.01M12 6.5h5m-5 11h5")],
  cloud: [(0, import_geometry.p)("M7 19a4 4 0 0 1-1-7.9C6 7 8.5 4 12 4c3 0 5.4 2.1 5.9 5.1C22 9.5 22 19 17 19H7Z")],
  "cloud-upload": [
    (0, import_geometry.p)("M6.5 17C2 17 2 10 6 10c.2-3.8 2.6-6 6-6 3.2 0 5.6 2.3 6 5.3C22 9.5 22 17 18 17"),
    (0, import_geometry.p)("M12 21V12m-3 3 3-3 3 3")
  ],
  "cloud-download": [
    (0, import_geometry.p)("M6.5 17C2 17 2 10 6 10c.2-3.8 2.6-6 6-6 3.2 0 5.6 2.3 6 5.3C22 9.5 22 17 18 17"),
    (0, import_geometry.p)("M12 12v9m-3-3 3 3 3-3")
  ],
  upload: [(0, import_geometry.p)("M4 14v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"), (0, import_geometry.p)("M12 15V3m-4 4 4-4 4 4")],
  download: [(0, import_geometry.p)("M4 14v5a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5"), (0, import_geometry.p)("M12 3v12m-4-4 4 4 4-4")],
  import: [(0, import_geometry.p)("M12 4h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6"), (0, import_geometry.p)("M3 12h12m-4-4 4 4-4 4")],
  export: [(0, import_geometry.p)("M12 4H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6"), (0, import_geometry.p)("M9 12h12m-4-4 4 4-4 4")],
  save: [
    (0, import_geometry.p)("M5 3h12l4 4v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z"),
    (0, import_geometry.p)("M7 3v5h9V3M7 21v-8h10v8")
  ],
  copy: [(0, import_geometry.r)(8, 8, 13, 13), (0, import_geometry.p)("M16 4a1 1 0 0 0-1-1H5a2 2 0 0 0-2 2v10a1 1 0 0 0 1 1")],
  edit: [(0, import_geometry.p)("m4 15 11-11a2.8 2.8 0 0 1 4 4L8 19l-5 2 1-6Z"), (0, import_geometry.l)(13, 6, 17, 10), (0, import_geometry.l)(4, 15, 8, 19)]
};
