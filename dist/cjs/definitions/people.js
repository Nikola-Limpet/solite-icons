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
var people_exports = {};
__export(people_exports, {
  peopleIcons: () => peopleIcons
});
module.exports = __toCommonJS(people_exports);
var import_geometry = require("../geometry.js");
const peopleIcons = {
  user: [(0, import_geometry.c)(12, 7, 4), (0, import_geometry.p)("M4 21V19A8 7 0 0 1 20 19V21Z")],
  users: [
    (0, import_geometry.c)(9, 7.5, 3.5),
    (0, import_geometry.p)("M2.5 21V18.5C2.5 12.5 15.5 12.5 15.5 18.5V21Z"),
    (0, import_geometry.p)("M15 4C19.5 3 21 9.5 17 11M18.5 14C21 14.8 22 16.5 22 19V21H19")
  ],
  "user-add": [
    (0, import_geometry.c)(8.5, 7, 3.5),
    (0, import_geometry.p)("M2.5 21V18.5C2.5 12.5 14.5 12.5 14.5 18.5V21"),
    (0, import_geometry.l)(18.5, 6, 18.5, 13),
    (0, import_geometry.l)(15, 9.5, 22, 9.5)
  ],
  "user-check": [
    (0, import_geometry.c)(8.5, 7, 3.5),
    (0, import_geometry.p)("M2.5 21V18.5C2.5 12.5 14.5 12.5 14.5 18.5V21"),
    (0, import_geometry.poly)("15,9.5 17.5,12 22,6.5")
  ],
  "user-remove": [
    (0, import_geometry.c)(8.5, 7, 3.5),
    (0, import_geometry.p)("M2.5 21V18.5C2.5 12.5 14.5 12.5 14.5 18.5V21"),
    (0, import_geometry.l)(15, 9.5, 22, 9.5)
  ],
  "user-lock": [
    (0, import_geometry.c)(8, 6.5, 3.5),
    (0, import_geometry.p)("M2 21V18C2 14.5 5 12.5 8 12.5C9.6 12.5 11.1 12.9 12.3 13.7"),
    (0, import_geometry.r)(14, 14, 8, 7, 1.5),
    (0, import_geometry.p)("M16 14V11.5A2 2 0 0 1 20 11.5V14"),
    (0, import_geometry.l)(18, 17, 18, 18)
  ],
  "id-card": [
    (0, import_geometry.r)(2.5, 5, 19, 14),
    (0, import_geometry.c)(8, 10.5, 2),
    (0, import_geometry.p)("M4.5 16C4.5 12.8 11.5 12.8 11.5 16"),
    (0, import_geometry.l)(14, 10, 18.5, 10),
    (0, import_geometry.l)(14, 14, 17, 14)
  ],
  contact: [
    (0, import_geometry.r)(5, 3, 15, 18),
    (0, import_geometry.p)("M2.5 7H6.5M2.5 12H6.5M2.5 17H6.5"),
    (0, import_geometry.c)(12.5, 9, 2.25),
    (0, import_geometry.p)("M8.5 17V16C8.5 12.8 16.5 12.8 16.5 16V17")
  ],
  handshake: [
    (0, import_geometry.poly)("2.5,6 5.5,5 9,11 5.5,15 2.5,13"),
    (0, import_geometry.poly)("21.5,6 18.5,5 15,11 18.5,15 21.5,13"),
    (0, import_geometry.p)(
      "M7 7.5L10 6.5L13 7.5M17 7.5L13.5 6.5L9.5 10C9 10.5 10.2 12 11.5 11.5L13 10.5L17.5 15C19 17 16.5 19 15 17.5L12 14.5M14.5 17L13.5 18C12.5 19 11.5 18 10.5 17L7 13.5"
    )
  ],
  shield: [
    (0, import_geometry.p)("M12 3L20 6V11.5C20 16 17 19.5 12 21.5C7 19.5 4 16 4 11.5V6Z"),
    (0, import_geometry.p)("M7.5 8.5V11.5C7.5 14.1 9.1 16.2 12 17.7")
  ],
  "shield-check": [
    (0, import_geometry.p)("M12 3L20 6V11.5C20 16 17 19.5 12 21.5C7 19.5 4 16 4 11.5V6Z"),
    (0, import_geometry.poly)("8,12 10.5,14.5 16,9")
  ],
  "shield-lock": [
    (0, import_geometry.p)("M12 3L20 6V11.5C20 16 17 19.5 12 21.5C7 19.5 4 16 4 11.5V6Z"),
    (0, import_geometry.r)(8.5, 11, 7, 5.5, 1),
    (0, import_geometry.p)("M10 11V9A2 2 0 0 1 14 9V11")
  ],
  key: [
    (0, import_geometry.p)("M13.2 8.8A5.3 5.3 0 1 0 10.2 13.2L13 16H16V19H19V21H22V17.5L13.2 8.8Z"),
    (0, import_geometry.c)(6.5, 6.5, 1.25)
  ],
  lock: [(0, import_geometry.r)(4.5, 10.5, 15, 11, 2), (0, import_geometry.p)("M7.5 10.5V7A4.5 4.5 0 0 1 16.5 7V10.5"), (0, import_geometry.l)(12, 15, 12, 17.5)],
  unlock: [(0, import_geometry.r)(4.5, 10.5, 15, 11, 2), (0, import_geometry.p)("M7.5 10.5V7A4.5 4.5 0 0 1 16.5 7"), (0, import_geometry.l)(12, 15, 12, 17.5)],
  eye: [(0, import_geometry.p)("M2.5 12C7 3.5 17 3.5 21.5 12C17 20.5 7 20.5 2.5 12Z"), (0, import_geometry.c)(12, 12, 3)],
  "eye-off": [
    (0, import_geometry.p)(
      "M9 5.8C14 4.2 18.8 7.1 21.5 12C20.5 13.8 19.3 15.2 17.8 16.2M14.5 18C9.8 19.1 5.1 16.5 2.5 12C3.5 10.2 4.8 8.7 6.3 7.7"
    ),
    (0, import_geometry.p)("M10 9.8A3 3 0 0 0 14.2 14"),
    (0, import_geometry.l)(3, 3, 21, 21)
  ],
  fingerprint: [
    (0, import_geometry.p)("M4 9C4 1 20 1 20 9V11"),
    (0, import_geometry.p)("M4 13V15C4 17.6 5 19.1 6.5 20.5M7.5 10C7.5 5 16.5 5 16.5 10V14.5C16.5 17.4 17.3 19 18.5 20"),
    (0, import_geometry.p)("M10.5 20.8C8.4 18.4 10.5 14.2 10.5 10.5A1.5 1.5 0 0 1 13.5 10.5V15.5C13.5 18.1 14 20 15 21"),
    (0, import_geometry.l)(7.5, 13, 7.5, 15.5)
  ],
  login: [
    (0, import_geometry.p)("M12.5 3H19A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H12.5"),
    (0, import_geometry.l)(2.5, 12, 15, 12),
    (0, import_geometry.poly)("10,7 15,12 10,17")
  ],
  logout: [
    (0, import_geometry.p)("M11.5 3H5A2 2 0 0 0 3 5V19A2 2 0 0 0 5 21H11.5"),
    (0, import_geometry.l)(10, 12, 22, 12),
    (0, import_geometry.poly)("17,7 22,12 17,17")
  ]
};
