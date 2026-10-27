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
var devices_exports = {};
__export(devices_exports, {
  deviceIcons: () => deviceIcons
});
module.exports = __toCommonJS(devices_exports);
var import_geometry = require("../geometry.js");
const deviceIcons = {
  printer: [(0, import_geometry.p)("M6 8V3h12v5"), (0, import_geometry.r)(3, 8, 18, 9), (0, import_geometry.r)(6, 14, 12, 7, 1), (0, import_geometry.c)(17.5, 11, 0.6)],
  monitor: [(0, import_geometry.r)(3, 4, 18, 13), (0, import_geometry.l)(12, 17, 12, 21), (0, import_geometry.l)(8, 21, 16, 21)],
  laptop: [(0, import_geometry.r)(5, 3, 14, 12), (0, import_geometry.p)("M3 17h18l-1 4H4l-1-4Z"), (0, import_geometry.l)(10, 18.5, 14, 18.5)],
  tablet: [(0, import_geometry.r)(5, 2.75, 14, 18.5), (0, import_geometry.c)(12, 18, 0.6)],
  smartphone: [(0, import_geometry.r)(7, 2.5, 10, 19), (0, import_geometry.l)(10, 5, 14, 5), (0, import_geometry.l)(11, 18.5, 13, 18.5)],
  scan: [
    (0, import_geometry.p)(
      "M4 9V5a1 1 0 0 1 1-1h4m6 0h4a1 1 0 0 1 1 1v4m0 6v4a1 1 0 0 1-1 1h-4m-6 0H5a1 1 0 0 1-1-1v-4"
    ),
    (0, import_geometry.l)(3, 12, 21, 12),
    (0, import_geometry.l)(8, 7, 8, 9),
    (0, import_geometry.l)(12, 6, 12, 9),
    (0, import_geometry.l)(16, 7, 16, 9),
    (0, import_geometry.l)(8, 15, 8, 17),
    (0, import_geometry.l)(12, 15, 12, 18),
    (0, import_geometry.l)(16, 15, 16, 17)
  ],
  scanner: [(0, import_geometry.p)("M5 4h12l3 7-8 3-2 7H6l2-9H5L3 7l2-3Z"), (0, import_geometry.p)("m7 7 8 1m-7 5 4 1m-5 3h4")],
  camera: [(0, import_geometry.r)(3, 7, 18, 13), (0, import_geometry.p)("m8 7 1.5-3h5L16 7"), (0, import_geometry.c)(12, 13.5, 3.25), (0, import_geometry.l)(17.5, 10, 18, 10)],
  image: [(0, import_geometry.r)(3, 4, 18, 16), (0, import_geometry.c)(8, 9, 1.25), (0, import_geometry.p)("m3 17 5-5 4 4 3-3 6 6")],
  images: [
    (0, import_geometry.r)(3, 7, 14, 14),
    (0, import_geometry.p)("M7 3h12a2 2 0 0 1 2 2v12"),
    (0, import_geometry.c)(7.5, 11.5, 1),
    (0, import_geometry.p)("m3 18 4-4 3 3 3-2 4 4")
  ],
  crop: [(0, import_geometry.p)("M7 3v12a2 2 0 0 0 2 2h12M3 7h12a2 2 0 0 1 2 2v12"), (0, import_geometry.l)(17, 17, 21, 21)],
  "zoom-in": [
    (0, import_geometry.c)(10.5, 10.5, 6.5),
    (0, import_geometry.l)(15.5, 15.5, 21, 21),
    (0, import_geometry.l)(7.5, 10.5, 13.5, 10.5),
    (0, import_geometry.l)(10.5, 7.5, 10.5, 13.5)
  ],
  "zoom-out": [(0, import_geometry.c)(10.5, 10.5, 6.5), (0, import_geometry.l)(15.5, 15.5, 21, 21), (0, import_geometry.l)(7.5, 10.5, 13.5, 10.5)],
  wifi: [
    (0, import_geometry.p)("M3.5 8.5c4.7-4.7 12.3-4.7 17 0M6.5 12c3-3 8-3 11 0m-8 3.5c1.4-1.4 3.6-1.4 5 0"),
    (0, import_geometry.c)(12, 19, 0.6)
  ],
  "wifi-off": [
    (0, import_geometry.p)(
      "M4 8.5a12 12 0 0 1 2-1.6m3.6-1.4A12 12 0 0 1 20.5 8.5M6.5 12a7.7 7.7 0 0 1 3.5-2m4 0a7.7 7.7 0 0 1 3.5 2m-8 3.5c1.4-1.4 3.6-1.4 5 0"
    ),
    (0, import_geometry.c)(12, 19, 0.6),
    (0, import_geometry.l)(3, 3, 21, 21)
  ],
  bluetooth: [(0, import_geometry.p)("M12 3v18l5-4.5-10-9M7 16.5 17 7.5 12 3")],
  usb: [(0, import_geometry.p)("M12 21V3m-2 3 2-3 2 3M12 16H7V10m5 3h5V8"), (0, import_geometry.c)(7, 8.5, 1.25), (0, import_geometry.r)(16, 5, 2, 2, 0.25)],
  plug: [(0, import_geometry.p)("M8 3v5m8-5v5M6 8h12v5a5 5 0 0 1-5 5h-2a5 5 0 0 1-5-5V8Zm6 10v3")],
  power: [(0, import_geometry.p)("M7 5.8a8 8 0 1 0 10 0M12 3v9")],
  battery: [
    (0, import_geometry.r)(3, 7, 17, 10),
    (0, import_geometry.p)("M20 10h1v4h-1"),
    (0, import_geometry.l)(7, 10, 7, 14),
    (0, import_geometry.l)(10, 10, 10, 14),
    (0, import_geometry.l)(13, 10, 13, 14)
  ]
};
