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
var sales_exports = {};
__export(sales_exports, {
  salesIcons: () => salesIcons
});
module.exports = __toCommonJS(sales_exports);
var import_geometry = require("../geometry.js");
const salesIcons = {
  "cash-register": [
    (0, import_geometry.r)(8, 3, 9, 5, 1.5),
    (0, import_geometry.l)(12.5, 8, 12.5, 10),
    (0, import_geometry.p)("M6 10h12l2 6H4l2-6Z"),
    (0, import_geometry.r)(3, 16, 18, 5, 1.5),
    (0, import_geometry.p)("M8 13h.5m3.25 0h.5m3.25 0h.5M10 18.5h4")
  ],
  "shopping-cart": [
    (0, import_geometry.p)("M3 4h2l2.2 11.2a2 2 0 0 0 2 1.6H18"),
    (0, import_geometry.p)("M6 7h14l-1.5 6H7.1"),
    (0, import_geometry.c)(9, 20, 1),
    (0, import_geometry.c)(17, 20, 1)
  ],
  "shopping-bag": [
    (0, import_geometry.p)("M6 7h12l1.5 12a2 2 0 0 1-2 2h-11a2 2 0 0 1-2-2L6 7Z"),
    (0, import_geometry.p)("M9 9V6a3 3 0 0 1 6 0v3")
  ],
  basket: [
    (0, import_geometry.p)("M3 10h18l-2 9a2 2 0 0 1-2 1.5H7A2 2 0 0 1 5 19l-2-9Z"),
    (0, import_geometry.p)("m7 10 3-6m7 6-3-6M9 14l.5 3m5.5-3-.5 3")
  ],
  barcode: [(0, import_geometry.p)("M6 3H3v4m15-4h3v4M3 17v4h3m15-4v4h-3"), (0, import_geometry.p)("M7 7v10m3-10v10m4-10v10m3-10v10")],
  "qr-code": [
    (0, import_geometry.r)(3, 3, 6, 6, 1),
    (0, import_geometry.r)(15, 3, 6, 6, 1),
    (0, import_geometry.r)(3, 15, 6, 6, 1),
    (0, import_geometry.p)("M15 15h3v3h3m-6 3v-3m6-3v-3m-9 0h3M6 6h.01M18 6h.01M6 18h.01")
  ],
  tag: [
    (0, import_geometry.p)("M13 3h6a2 2 0 0 1 2 2v6l-9.5 9.5a1.5 1.5 0 0 1-2.1 0l-5.9-5.9a1.5 1.5 0 0 1 0-2.1L13 3Z"),
    (0, import_geometry.c)(17, 7, 1)
  ],
  tags: [(0, import_geometry.p)("M11 3h5a2 2 0 0 1 2 2v5L9 19l-7-7 9-9Z"), (0, import_geometry.p)("M21 6v7l-8 8"), (0, import_geometry.c)(14, 7, 1)],
  discount: [
    (0, import_geometry.p)("m12 2 3 2 3.5.5.5 3.5 2 4-2 3-.5 3.5-3.5.5-3 2-3-2-3.5-.5L5 15l-2-3 2-4 .5-3.5L9 4l3-2Z"),
    (0, import_geometry.l)(9, 15, 15, 9),
    (0, import_geometry.c)(9, 9, 0.8),
    (0, import_geometry.c)(15, 15, 0.8)
  ],
  percent: [(0, import_geometry.l)(5, 20, 19, 4), (0, import_geometry.c)(6.5, 6.5, 2.5), (0, import_geometry.c)(17.5, 17.5, 2.5)],
  coupon: [
    (0, import_geometry.p)(
      "M4 5h16a1 1 0 0 1 1 1v3a3 3 0 0 0 0 6v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-3a3 3 0 0 0 0-6V6a1 1 0 0 1 1-1Z"
    ),
    (0, import_geometry.p)("M15 5v2m0 4v2m0 4v2M7 10h4m-4 4h3")
  ],
  gift: [
    (0, import_geometry.r)(3, 8, 18, 4, 1),
    (0, import_geometry.p)("M5 12v8h14v-8M12 8v12"),
    (0, import_geometry.p)("M12 8H8a2.5 2.5 0 1 1 2.5-2.5L12 8Zm0 0h4a2.5 2.5 0 1 0-2.5-2.5L12 8Z")
  ],
  receipt: [(0, import_geometry.p)("M6 3h12v18l-3-2-3 2-3-2-3 2V3Z"), (0, import_geometry.p)("M9 7h6m-6 4h6m-6 4h3")],
  "receipt-check": [
    (0, import_geometry.p)("M18 10V3H5v18l3-2 3 2 2-1.3"),
    (0, import_geometry.p)("M8 7h7m-7 4h3"),
    (0, import_geometry.c)(17, 17, 5),
    (0, import_geometry.p)("m14.5 17 1.5 1.5 3.5-3.5")
  ],
  "receipt-refund": [
    (0, import_geometry.p)("M17 10V3H5v18l3-2 3 2 2-1.3M8 7h6"),
    (0, import_geometry.p)("M14 13h3a4 4 0 1 1-3.5 6M14 13l2.5-2.5M14 13l2.5 2.5")
  ],
  order: [(0, import_geometry.r)(5, 5, 14, 16, 2), (0, import_geometry.r)(9, 3, 6, 4, 1.5), (0, import_geometry.p)("M9 11h6m-6 4h6m-6 3h3")],
  "order-check": [
    (0, import_geometry.p)("M10 21H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m6 0h2a2 2 0 0 1 2 2v4"),
    (0, import_geometry.r)(9, 3, 6, 4, 1.5),
    (0, import_geometry.p)("M9 11h4m-4 4h1m3 3 3 3 5-7")
  ],
  "order-cancel": [
    (0, import_geometry.p)("M10 21H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m6 0h2a2 2 0 0 1 2 2v4"),
    (0, import_geometry.r)(9, 3, 6, 4, 1.5),
    (0, import_geometry.p)("M9 11h4m-4 4h1m4 0 6 6m0-6-6 6")
  ],
  "order-history": [
    (0, import_geometry.p)("M10 21H7a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m6 0h2a2 2 0 0 1 2 2v4"),
    (0, import_geometry.r)(9, 3, 6, 4, 1.5),
    (0, import_geometry.l)(9, 11, 12, 11),
    (0, import_geometry.c)(17, 17, 5),
    (0, import_geometry.p)("M17 14v3l2 1")
  ],
  calculator: [
    (0, import_geometry.r)(5, 2.5, 14, 19, 2),
    (0, import_geometry.r)(8, 5.5, 8, 4, 1),
    (0, import_geometry.p)("M8.5 13h.01m3.5 0h.01m3.5 0h.01m-7 4h.01m3.5 0h.01m3.5 0h.01")
  ]
};
