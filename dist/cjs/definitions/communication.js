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
var communication_exports = {};
__export(communication_exports, {
  communicationIcons: () => communicationIcons
});
module.exports = __toCommonJS(communication_exports);
var import_geometry = require("../geometry.js");
const communicationIcons = {
  bell: [(0, import_geometry.p)("M5 17c1.5-2 1.5-4 1.5-7a5.5 5.5 0 0 1 11 0c0 3 0 5 1.5 7H5Z"), (0, import_geometry.p)("M10 21h4M12 3v1.5")],
  "bell-off": [
    (0, import_geometry.p)("M7 5.5A5.5 5.5 0 0 1 17.5 8c0 1.4 0 2.5.2 3.5M6.5 10c0 3 0 5-1.5 7h12M10 21h4"),
    (0, import_geometry.l)(3, 3, 21, 21)
  ],
  mail: [(0, import_geometry.r)(3, 5, 18, 14), (0, import_geometry.p)("m3 7 7.7 5.8a2.2 2.2 0 0 0 2.6 0L21 7")],
  "mail-open": [
    (0, import_geometry.p)("m3 10 7.9-6.2a1.8 1.8 0 0 1 2.2 0L21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9Z"),
    (0, import_geometry.p)("m3 10 9 6 9-6M3 20l6-6m6 0 6 6")
  ],
  "mail-send": [
    (0, import_geometry.p)("M11 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v3"),
    (0, import_geometry.p)("m3 7 9 6 9-6M14 17h7m-3-3 3 3-3 3")
  ],
  message: [
    (0, import_geometry.p)("M5 4h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9l-5 3v-3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"),
    (0, import_geometry.p)("M7 9h10m-10 4h6")
  ],
  messages: [
    (0, import_geometry.p)("M8 4h11a2 2 0 0 1 2 2v8l-3-2h-2"),
    (0, import_geometry.p)("M5 8h9a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H8l-5 2V10a2 2 0 0 1 2-2Z")
  ],
  "message-check": [
    (0, import_geometry.p)("M5 4h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9l-5 3v-3a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z"),
    (0, import_geometry.p)("m8 11 2.5 2.5L16 8")
  ],
  phone: [
    (0, import_geometry.p)(
      "m7.6 3.5 2 4a1.5 1.5 0 0 1-.3 1.7L7.6 11a14 14 0 0 0 5.4 5.4l1.8-1.7a1.5 1.5 0 0 1 1.7-.3l4 2a1.5 1.5 0 0 1 .7 1.8l-.6 1.7a2 2 0 0 1-2.1 1.3C10.3 20.2 3.8 13.7 2.8 5.5a2 2 0 0 1 1.3-2.1l1.7-.6a1.5 1.5 0 0 1 1.8.7Z"
    )
  ],
  "phone-call": [
    (0, import_geometry.p)(
      "m7 3 2 4-2.2 2.2a14 14 0 0 0 8 8L17 15l4 2v2a2 2 0 0 1-2.3 2C10.6 19.9 4.1 13.4 3 5.3A2 2 0 0 1 5 3h2Z"
    ),
    (0, import_geometry.p)("M14 3a7 7 0 0 1 7 7m-7-3a3 3 0 0 1 3 3")
  ],
  headphones: [(0, import_geometry.p)("M4 14v-3a8 8 0 0 1 16 0v3"), (0, import_geometry.r)(3, 12, 5, 8), (0, import_geometry.r)(16, 12, 5, 8)],
  help: [(0, import_geometry.c)(12, 12, 9), (0, import_geometry.p)("M9 9a3 3 0 0 1 6 0c0 2-3 2-3 4"), (0, import_geometry.l)(12, 17, 12, 17.01)],
  info: [(0, import_geometry.c)(12, 12, 9), (0, import_geometry.l)(12, 11, 12, 17), (0, import_geometry.l)(12, 7, 12, 7.01)],
  "alert-circle": [(0, import_geometry.c)(12, 12, 9), (0, import_geometry.l)(12, 7, 12, 13), (0, import_geometry.l)(12, 17, 12, 17.01)],
  "alert-triangle": [
    (0, import_geometry.p)("m10.3 4.2-7 13.8A2 2 0 0 0 5.1 21h13.8a2 2 0 0 0 1.8-3l-7-13.8a1.9 1.9 0 0 0-3.4 0Z"),
    (0, import_geometry.l)(12, 9, 12, 14),
    (0, import_geometry.l)(12, 18, 12, 18.01)
  ],
  "check-circle": [(0, import_geometry.c)(12, 12, 9), (0, import_geometry.p)("m7.5 12 3 3 6-6")],
  "x-circle": [(0, import_geometry.c)(12, 12, 9), (0, import_geometry.p)("m9 9 6 6m-6 0 6-6")],
  "minus-circle": [(0, import_geometry.c)(12, 12, 9), (0, import_geometry.l)(8, 12, 16, 12)],
  "plus-circle": [(0, import_geometry.c)(12, 12, 9), (0, import_geometry.p)("M8 12h8m-4-4v8")],
  activity: [(0, import_geometry.p)("M3 12h4l2.5-8 5 16 2.5-8h4")]
};
