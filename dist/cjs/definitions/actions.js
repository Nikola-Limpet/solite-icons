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
var actions_exports = {};
__export(actions_exports, {
  actionIcons: () => actionIcons
});
module.exports = __toCommonJS(actions_exports);
var import_geometry = require("../geometry.js");
const actionIcons = {
  plus: [(0, import_geometry.l)(12, 4, 12, 20), (0, import_geometry.l)(4, 12, 20, 12)],
  minus: [(0, import_geometry.l)(4, 12, 20, 12)],
  check: [(0, import_geometry.poly)("4,12 9.25,17.25 20,6.5")],
  x: [(0, import_geometry.l)(5, 5, 19, 19), (0, import_geometry.l)(19, 5, 5, 19)],
  "arrow-left": [(0, import_geometry.l)(3.5, 12, 20.5, 12), (0, import_geometry.poly)("9.5,6 3.5,12 9.5,18")],
  "arrow-right": [(0, import_geometry.l)(3.5, 12, 20.5, 12), (0, import_geometry.poly)("14.5,6 20.5,12 14.5,18")],
  "arrow-up": [(0, import_geometry.l)(12, 3.5, 12, 20.5), (0, import_geometry.poly)("6,9.5 12,3.5 18,9.5")],
  "arrow-down": [(0, import_geometry.l)(12, 3.5, 12, 20.5), (0, import_geometry.poly)("6,14.5 12,20.5 18,14.5")],
  "chevron-left": [(0, import_geometry.poly)("15,5 8,12 15,19")],
  "chevron-right": [(0, import_geometry.poly)("9,5 16,12 9,19")],
  "chevron-up": [(0, import_geometry.poly)("5,15 12,8 19,15")],
  "chevron-down": [(0, import_geometry.poly)("5,9 12,16 19,9")],
  undo: [(0, import_geometry.poly)("8,3.5 3,8.5 8,13.5"), (0, import_geometry.p)("M3 8.5H13.5A6.25 6.25 0 0 1 13.5 21H10")],
  redo: [(0, import_geometry.poly)("16,3.5 21,8.5 16,13.5"), (0, import_geometry.p)("M21 8.5H10.5A6.25 6.25 0 0 0 10.5 21H14")],
  refresh: [
    (0, import_geometry.p)("M20.5 10A8.5 8.5 0 0 0 6 5.7L3 8.5M3.5 14A8.5 8.5 0 0 0 18 18.3L21 15.5"),
    (0, import_geometry.poly)("3,3.5 3,8.5 8,8.5"),
    (0, import_geometry.poly)("16,15.5 21,15.5 21,20.5")
  ],
  rotate: [(0, import_geometry.p)("M20.5 9A8.5 8.5 0 1 0 21 15"), (0, import_geometry.poly)("20.5,3.5 20.5,9 15,9")],
  expand: [
    (0, import_geometry.poly)("3.5,9 3.5,3.5 9,3.5"),
    (0, import_geometry.poly)("15,3.5 20.5,3.5 20.5,9"),
    (0, import_geometry.poly)("20.5,15 20.5,20.5 15,20.5"),
    (0, import_geometry.poly)("9,20.5 3.5,20.5 3.5,15")
  ],
  collapse: [
    (0, import_geometry.poly)("3.5,9 9,9 9,3.5"),
    (0, import_geometry.poly)("15,3.5 15,9 20.5,9"),
    (0, import_geometry.poly)("20.5,15 15,15 15,20.5"),
    (0, import_geometry.poly)("9,20.5 9,15 3.5,15")
  ],
  move: [
    (0, import_geometry.p)("M12 2.5V21.5M2.5 12H21.5"),
    (0, import_geometry.poly)("8.5,6 12,2.5 15.5,6"),
    (0, import_geometry.poly)("8.5,18 12,21.5 15.5,18"),
    (0, import_geometry.poly)("6,8.5 2.5,12 6,15.5"),
    (0, import_geometry.poly)("18,8.5 21.5,12 18,15.5")
  ],
  sort: [
    (0, import_geometry.l)(6.5, 3.5, 6.5, 20.5),
    (0, import_geometry.poly)("3,7 6.5,3.5 10,7"),
    (0, import_geometry.l)(17.5, 3.5, 17.5, 20.5),
    (0, import_geometry.poly)("14,17 17.5,20.5 21,17")
  ]
};
