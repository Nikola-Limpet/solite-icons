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
var editing_expansion_exports = {};
__export(editing_expansion_exports, {
  editingExpansionIcons: () => editingExpansionIcons
});
module.exports = __toCommonJS(editing_expansion_exports);
var import_geometry = require("../geometry.js");
const editingExpansionIcons = {
  bold: [(0, import_geometry.p)("M7 4h5.5a4 4 0 0 1 0 8H7m5.5 0a4 4 0 0 1 0 8H7V4")],
  italic: [(0, import_geometry.p)("M9 4h9M6 20h9M14.5 4l-5 16")],
  underline: [(0, import_geometry.p)("M6 4v8a6 6 0 0 0 12 0V4M4 21h16")],
  strikethrough: [
    (0, import_geometry.p)(
      "M17.5 6.5C16.6 4.8 14.7 4 12.4 4 9.4 4 7 5.6 7 8c0 1.7 1.2 2.8 3.1 3.5m3.7 1.2c2.1.7 3.2 1.8 3.2 3.5 0 2.3-2.3 3.8-5.3 3.8-2.6 0-4.6-1-5.7-2.8M3 12h18"
    )
  ],
  heading: [(0, import_geometry.p)("M4 4v16M14 4v16M4 12h10M18 16v4h3")],
  subscript: [(0, import_geometry.p)("m4 5 9 12m0-12L4 17M16 15a2.5 2.5 0 0 1 5 0c0 1.7-5 3.2-5 6h5")],
  superscript: [(0, import_geometry.p)("m3.5 9 9 12m0-12-9 12M16 5a2.5 2.5 0 0 1 5 0c0 1.7-5 3.2-5 6h5")],
  "small-caps": [(0, import_geometry.p)("m2.5 20 6-16 6 16M5 14h7M16 20l3-9 3 9m-5-3h4")],
  "text-direction-ltr": [(0, import_geometry.p)("M14 13V3.5h-3a3 3 0 0 0 0 6h3m3-6V13M3 18h18m-4-4 4 4-4 4")],
  "case-upper": [
    (0, import_geometry.p)("m2.5 19 4-14 4 14m-6.8-4h5.6M14 5h3.5a3.5 3.5 0 0 1 0 7H14m3.5 0a3.5 3.5 0 0 1 0 7H14V5")
  ],
  "case-lower": [
    (0, import_geometry.p)(
      "M10 11v8m0-6a3.5 3.5 0 0 0-7 0v2.5a3.5 3.5 0 0 0 7 0M14 5v14m0-5.5a3.5 3.5 0 0 1 7 0v2a3.5 3.5 0 0 1-7 0"
    )
  ],
  "case-title": [(0, import_geometry.p)("M2.5 5h12M8.5 5v15M15 11h6m-4-3v9a3 3 0 0 0 3 3h1")],
  "align-left": [(0, import_geometry.p)("M4 4.5h16M4 9.5h10M4 14.5h16M4 19.5h10")],
  "align-center": [(0, import_geometry.p)("M3.5 4.5h17M7 9.5h10M3.5 14.5h17M7 19.5h10")],
  "align-right": [(0, import_geometry.p)("M4 4.5h16M10 9.5h10M4 14.5h16M10 19.5h10")],
  "align-justify": [(0, import_geometry.p)("M4 4.5h16M4 9.5h16M4 14.5h16M4 19.5h12")],
  "indent-increase": [(0, import_geometry.p)("M3 5h18M11 12h10M11 19h10M3 9l4 3-4 3M3 19h3")],
  "indent-decrease": [(0, import_geometry.p)("M3 5h18M11 12h10M11 19h10M7 9l-4 3 4 3M3 19h3")],
  "line-height": [(0, import_geometry.p)("M11 5h10M11 19h10M5 4v16m-2-13 2-3 2 3m-4 10 2 3 2-3M11 12h7")],
  "letter-spacing": [
    (0, import_geometry.p)("m3 11 3-8 3 8m-5-3h4m7 3 3-8 3 8m-5-3h4M3 18h18m-15-3-3 3 3 3m12-6 3 3-3 3")
  ],
  "text-color": [(0, import_geometry.p)("m6.5 15 5.5-12 5.5 12m-9-4h7"), (0, import_geometry.r)(3.5, 19, 17, 2.5, 0.5)],
  highlighter: [
    (0, import_geometry.p)(
      "m7 14 8.5-10a1.5 1.5 0 0 1 2.1-.2l2.6 2.2a1.5 1.5 0 0 1 .2 2.1L12 18l-5-4Zm1.5 1.2-3 1.3L4 19h6l1.4-2.5M4 22h16"
    )
  ],
  "remove-formatting": [(0, import_geometry.p)("M4 4h14M12 4 8 17m-3 0h6m6-4-4 5m5-2 3 3m-5-1-2 3h7")],
  paragraph: [(0, import_geometry.p)("M13 21V3H9.5a5 5 0 0 0 0 10H13M17 3v18M10.5 3h9")],
  quote: [
    (0, import_geometry.p)(
      "M4 6a2 2 0 0 1 2-2h4v8c0 4-2 6-6 7v-3c2-.5 3-2 3-4H4V6Zm11 0a2 2 0 0 1 2-2h4v8c0 4-2 6-6 7v-3c2-.5 3-2 3-4h-3V6Z"
    )
  ],
  "text-wrap": [(0, import_geometry.p)("M3 5h18M3 10h13.5a4.5 4.5 0 0 1 0 9H10m3-3-3 3 3 3M3 15h3M3 20h3")],
  "word-break": [(0, import_geometry.p)("M3 5h12M3 10h18M3 15h6M3 20h12M17 3v3m0 3v3m0 3v3m0 3v.5M21 15l-3 3 3 3")],
  "text-hyphenation": [(0, import_geometry.p)("M3 5h18M3 10h11m4 0h3M3 15h8M3 20h15")],
  "paragraph-spacing": [(0, import_geometry.p)("M10 3h11M10 7h8M10 17h11M10 21h8M5 7v10m-2-7 2-3 2 3m-4 4 2 3 2-3")],
  "text-align-top": [(0, import_geometry.p)("M3 3.5h18M6 8.5h12M6 13.5h9M6 18.5h6")],
  "text-align-middle": [(0, import_geometry.p)("M7 3.5h10M4 9.5h16M7 14.5h10M7 20.5h10")],
  "text-align-bottom": [(0, import_geometry.p)("M6 5.5h6M6 10.5h9M6 15.5h12M3 20.5h18")],
  scissors: [(0, import_geometry.c)(5.5, 6, 3), (0, import_geometry.c)(5.5, 18, 3), (0, import_geometry.p)("m8 7.5 12.5 12M8 16.5l12.5-12M11 10.5l3 3")],
  eraser: [
    (0, import_geometry.p)(
      "m4 13 8.5-9a1.5 1.5 0 0 1 2.1 0l6.1 5.7a1.5 1.5 0 0 1 0 2.2L13 20H8l-4-4.7a1.8 1.8 0 0 1 0-2.3Zm4-4 8.5 7.5M13 20h8"
    )
  ],
  "spell-check": [
    (0, import_geometry.p)("m3 13 3-9 3 9m-5-3h4M13 3v10m0-3.5a3 3 0 0 1 6 0v.5a3 3 0 0 1-6 0m-4 8 4 3 8-7")
  ],
  "find-replace": [
    (0, import_geometry.c)(7, 7, 4),
    (0, import_geometry.p)("m10 10 4 4M17 4h4m-2-2 2 2-2 2M3 19h4m-2-2-2 2 2 2M13 17h8v4h-8z")
  ],
  "file-diff": [
    (0, import_geometry.p)(
      "M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10l-7-7Zm0 0v5a2 2 0 0 0 2 2h5M8 12h5m-2.5-2.5v5M8 18h7"
    )
  ],
  "file-code": [
    (0, import_geometry.p)(
      "M13 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10l-7-7Zm0 0v5a2 2 0 0 0 2 2h5m-10 3-2.5 3 2.5 3m4-6 2.5 3-2.5 3"
    )
  ],
  "word-count": [
    (0, import_geometry.p)(
      "M3 4h18M3 8.5h12M3 15l2-2v8m-2 0h4M9 15a2.5 2.5 0 0 1 5 0c0 2-5 3-5 6h5m4-8h1a2 2 0 0 1 0 4h-1m1 0a2 2 0 0 1 0 4h-1"
    )
  ],
  "page-break": [
    (0, import_geometry.p)(
      "M4.5 8V4a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v4M4.5 16v4a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-4M2.5 12h3m3 0h3m3 0h3m3 0h1"
    )
  ],
  "page-number": [
    (0, import_geometry.p)(
      "M19.5 12V5a2 2 0 0 0-2-2h-11a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3M14 13l-1 9m6-9-1 9m-7-6h10m-10 3h10"
    )
  ],
  "page-margin": [
    (0, import_geometry.r)(4.5, 3, 15, 18, 1.5),
    (0, import_geometry.p)("M8 6.5h3M8 6.5v3m8-3h-3m3 0v3M8 17.5h3m-3 0v-3m8 3h-3m3 0v-3")
  ],
  "page-size": [(0, import_geometry.r)(3, 3, 12, 15, 1), (0, import_geometry.p)("M20 3v15m-2-15h4m-4 15h4M3 21h12M3 20v2m12-2v2")],
  footnote: [(0, import_geometry.p)("M3 5h12M3 10h15M3 15h8M18 4l2-1v5m-4 11h5M3 19h8M3 22h12")],
  "track-changes": [(0, import_geometry.p)("M3 4v16M7 6h13M7 11h8M7 16h4m3.5 2.5 5-5 2 2-5 5-3 1 1-3Z")],
  "sticky-note": [
    (0, import_geometry.p)(
      "M20.5 14V5a2 2 0 0 0-2-2h-13a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2H14l6.5-7Zm0 0H16a2 2 0 0 0-2 2v5M7.5 8h9M7.5 12h6"
    )
  ],
  stamp: [
    (0, import_geometry.p)("M8 15v-3.5C8 9 7.5 8 7.5 6a4.5 4.5 0 0 1 9 0c0 2-.5 3-.5 5.5V15M8 12h8"),
    (0, import_geometry.r)(3.5, 15, 17, 5, 1.2),
    (0, import_geometry.l)(5.5, 22, 18.5, 22)
  ],
  "scan-text": [
    (0, import_geometry.p)(
      "M3 8V4a1 1 0 0 1 1-1h4m8 0h4a1 1 0 0 1 1 1v4M3 16v4a1 1 0 0 0 1 1h4m8 0h4a1 1 0 0 0 1-1v-4M7 9h10M7 15h7"
    )
  ],
  unlink: [
    (0, import_geometry.p)(
      "M9 14l-1 1a3.18 3.18 0 0 1-4.5-4.5l3-3a3.18 3.18 0 0 1 4.5 0m4 2.5 1-1a3.18 3.18 0 0 1 4.5 4.5l-3 3a3.18 3.18 0 0 1-4.5 0M11 3l.5 3m1 12 .5 3"
    )
  ],
  redact: [
    (0, import_geometry.p)("M3 7V4h4m10 0h4v3M3 17v3h4m10 0h4v-3"),
    (0, import_geometry.r)(6, 7, 12, 2.5, 0.5),
    (0, import_geometry.r)(6, 12, 9, 2.5, 0.5),
    (0, import_geometry.r)(6, 17, 6, 2.5, 0.5)
  ],
  "text-direction-rtl": [(0, import_geometry.p)("M14 13V3.5h-3a3 3 0 0 0 0 6h3m3-6V13M21 18H3m4-4-4 4 4 4")],
  "document-template": [
    (0, import_geometry.r)(4.5, 3, 15, 18, 1.5),
    (0, import_geometry.p)("M8 7h3m2 0h3M8 11v2m0 3v1h3m3 0h2v-2m0-3v-1h-3")
  ],
  "page-header": [(0, import_geometry.r)(4.5, 3, 15, 18, 1.5), (0, import_geometry.p)("M4.5 9h15M8 6h8M8 13h8M8 17h5")],
  "page-footer": [(0, import_geometry.r)(4.5, 3, 15, 18, 1.5), (0, import_geometry.p)("M4.5 15h15M8 18h8M8 7h8M8 11h5")],
  "git-commit": [(0, import_geometry.c)(12, 12, 4), (0, import_geometry.l)(2.5, 12, 8, 12), (0, import_geometry.l)(16, 12, 21.5, 12)],
  "git-pull-request": [
    (0, import_geometry.c)(5.5, 5, 2),
    (0, import_geometry.c)(5.5, 19, 2),
    (0, import_geometry.c)(18, 18, 2),
    (0, import_geometry.p)("M5.5 7v10M18 16V9a4 4 0 0 0-4-4h-3m3-3-3 3 3 3")
  ],
  "git-merge": [
    (0, import_geometry.c)(6, 19, 2),
    (0, import_geometry.c)(18, 19, 2),
    (0, import_geometry.c)(12, 5, 2),
    (0, import_geometry.p)("M6 17v-3a4 4 0 0 1 4-4h2m6 7v-3a4 4 0 0 0-4-4h-2V7")
  ],
  "git-compare": [
    (0, import_geometry.c)(5.5, 5, 2),
    (0, import_geometry.c)(18.5, 19, 2),
    (0, import_geometry.p)("M5.5 7v14M18.5 3v14M9 12h6m-4-2-2 2 2 2m2-4 2 2-2 2")
  ],
  "git-rebase": [
    (0, import_geometry.c)(6, 5, 2),
    (0, import_geometry.c)(6, 12, 2),
    (0, import_geometry.c)(6, 19, 2),
    (0, import_geometry.p)("M6 7v3m0 4v3M16 3v2m0 4v2m0 4v2m0 4v.5M12 12h7m-3-3 3 3-3 3")
  ],
  "git-cherry-pick": [
    (0, import_geometry.c)(5.5, 5, 2),
    (0, import_geometry.c)(5.5, 19, 2),
    (0, import_geometry.c)(18.5, 9, 2.5),
    (0, import_geometry.p)("M5.5 7v10M16 9h-3a4 4 0 0 0-4 4m-2-2 2 2 2-2M18.5 3v3.5")
  ],
  "git-conflict": [
    (0, import_geometry.c)(5, 4.5, 2),
    (0, import_geometry.c)(19, 4.5, 2),
    (0, import_geometry.c)(12, 19.5, 2),
    (0, import_geometry.p)("M5 6.5v2c0 2 2 3.5 4 3.5m10-5.5v2c0 2-2 3.5-4 3.5M12 15v2.5m-2-9 4 4m0-4-4 4")
  ],
  "git-graph": [
    (0, import_geometry.c)(5, 4.5, 1.8),
    (0, import_geometry.c)(5, 19.5, 1.8),
    (0, import_geometry.c)(18.5, 7, 1.8),
    (0, import_geometry.c)(18.5, 17, 1.8),
    (0, import_geometry.p)("M5 6.3v11.4M5 11h6a7.5 7.5 0 0 0 7.5-2.2M5 14h6a7.5 7.5 0 0 1 7.5 1.2M18.5 8.8v6.4")
  ],
  bug: [
    (0, import_geometry.r)(7, 7, 10, 14, 5),
    (0, import_geometry.p)("m9 7-2-3m8 3 2-3M7 11H3m4 5H3m5 3-3 2m12-10h4m-4 5h4m-5 3 3 2M12 8v12M7 13h10")
  ],
  variable: [
    (0, import_geometry.p)(
      "m7 6 10 12M16 6 8 18M5 8H4a1.5 1.5 0 0 0-1.5 1.5v7A1.5 1.5 0 0 0 4 18h1m14-10h1a1.5 1.5 0 0 1 1.5 1.5v7A1.5 1.5 0 0 1 20 18h-1"
    )
  ],
  function: [
    (0, import_geometry.p)(
      "M12 4h-1a3 3 0 0 0-3 3v11a3 3 0 0 1-3 3H4M5 10h7m4.5-4c-2.5 3-2.5 9 0 12m4-12c2.5 3 2.5 9 0 12"
    )
  ],
  lambda: [(0, import_geometry.p)("M5 3h2a3 3 0 0 1 2.8 2L17 19a2 2 0 0 0 1.8 1H21M12 9 5 21")],
  regex: [(0, import_geometry.p)("M5.5 4 2.5 20M21.5 4l-3 16M12 5v8m-3.5-6 7 4m0-4-7 4"), (0, import_geometry.c)(9, 18, 0.8)],
  binary: [(0, import_geometry.r)(3.5, 3, 5, 7, 2.5), (0, import_geometry.p)("m15 4 2-1v7m-3 0h6M4 15l2-1v7m-3 0h6"), (0, import_geometry.r)(14, 14, 5, 7, 2.5)],
  array: [(0, import_geometry.p)("M6 4H3v16h3M18 4h3v16h-3M8 10v4m4-4v4m4-4v4")],
  boolean: [(0, import_geometry.p)("M2.5 6h7M6 6v13M13 4v16M17 19V6h5M17 12h4")],
  string: [(0, import_geometry.p)("M3 5v4m4-4v4M17 5v4m4-4v4M6 16c2-4 4 4 6 0s4 4 6 0")],
  number: [(0, import_geometry.p)("m3 7 4-3v16M3 20h8M14 7a3.5 3.5 0 0 1 7 0c0 4-7 7-7 13h7")],
  parentheses: [(0, import_geometry.p)("M8 3c-6 4-6 14 0 18M16 3c6 4 6 14 0 18")],
  ampersand: [
    (0, import_geometry.p)("M19 13c-2 5-5 8-9 8a5.5 5.5 0 0 1-3-10l5-3c3-2 1.5-5-1-5S7 4.5 7 6.5c0 2 3 5 5 7l7 7")
  ],
  breakpoint: [(0, import_geometry.p)("M7 3h6l4 4v6l-4 4H7l-4-4V7l4-4ZM16 21h5M20 11h2")],
  recursion: [
    (0, import_geometry.p)(
      "M6 3H3v18h3M18 3h3v18h-3M9 7H7v10h2M17 10V7h-4a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h4m-2-2 2 2-2 2"
    )
  ],
  webhook: [
    (0, import_geometry.c)(12, 5.5, 3),
    (0, import_geometry.c)(5.5, 18, 3),
    (0, import_geometry.c)(18.5, 18, 3),
    (0, import_geometry.p)("M12 8.5V12l-4.5 4m4.5-4 4.5 4M8.5 18h7")
  ],
  api: [
    (0, import_geometry.p)(
      "M8 4H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h4M16 4h4a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-4M7 9h10M7 15h10M10 7v4m4 2v4"
    )
  ],
  network: [
    (0, import_geometry.r)(2.5, 3, 5, 5, 1.2),
    (0, import_geometry.r)(16.5, 3, 5, 5, 1.2),
    (0, import_geometry.r)(2.5, 16, 5, 5, 1.2),
    (0, import_geometry.r)(16.5, 16, 5, 5, 1.2),
    (0, import_geometry.p)("M7.5 5.5h9M5 8v8M7.5 18.5h9M7.5 8l9 8")
  ],
  cluster: [
    (0, import_geometry.r)(8.5, 2.5, 7, 4, 1),
    (0, import_geometry.r)(2.5, 16.5, 7, 4, 1),
    (0, import_geometry.r)(14.5, 16.5, 7, 4, 1),
    (0, import_geometry.c)(12, 11, 2),
    (0, import_geometry.p)("M12 6.5V9m-1.5 3.5L6 16.5m7.5-4 4.5 4")
  ],
  container: [(0, import_geometry.r)(2.5, 5, 19, 15, 2), (0, import_geometry.l)(2.5, 9, 21.5, 9), (0, import_geometry.p)("M6 13h4v4H6Zm8 0h4v4h-4Z")],
  "virtual-machine": [
    (0, import_geometry.r)(2.5, 3, 19, 16, 2),
    (0, import_geometry.r)(7, 7, 10, 7, 1),
    (0, import_geometry.p)("M7 10h10M6 19v3m12-3v3M4 22h4m8 0h4")
  ],
  "load-balancer": [
    (0, import_geometry.c)(12, 5, 2.5),
    (0, import_geometry.p)("M12 7.5V12M5 16v-4h14v4M12 12v4"),
    (0, import_geometry.r)(2.5, 16, 5, 5, 1),
    (0, import_geometry.r)(9.5, 16, 5, 5, 1),
    (0, import_geometry.r)(16.5, 16, 5, 5, 1),
    (0, import_geometry.p)("M2.5 18.5h5m2 0h5m2 0h5")
  ],
  queue: [
    (0, import_geometry.p)("M18 5H3v14h15"),
    (0, import_geometry.r)(5.5, 9, 2.5, 6, 0.6),
    (0, import_geometry.r)(10.5, 9, 2.5, 6, 0.6),
    (0, import_geometry.r)(15.5, 9, 2.5, 6, 0.6),
    (0, import_geometry.l)(21.5, 9, 21.5, 15)
  ],
  cache: [(0, import_geometry.p)("M19 8a8 8 0 1 0 1 7M19 3v5h-5"), (0, import_geometry.r)(7.5, 10, 9, 4, 1), (0, import_geometry.l)(10, 17, 14, 17)],
  "database-schema": [
    (0, import_geometry.r)(3, 3, 7, 6, 1),
    (0, import_geometry.r)(14, 8, 7, 6, 1),
    (0, import_geometry.r)(3, 15, 7, 6, 1),
    (0, import_geometry.p)("M10 6h2v5h2M10 18h2v-7M5.5 6h2m9 5h2M5.5 18h2")
  ],
  "data-stream": [
    (0, import_geometry.p)("M3 5h6c4 0 4 4 8 4h4M3 15h6c4 0 4 4 8 4h4"),
    (0, import_geometry.r)(4, 8, 3, 3, 0.5),
    (0, import_geometry.r)(10.5, 10, 3, 3, 0.5),
    (0, import_geometry.r)(17, 13, 3, 3, 0.5)
  ],
  dependency: [(0, import_geometry.r)(3, 3, 8, 7, 1.5), (0, import_geometry.r)(13, 14, 8, 7, 1.5), (0, import_geometry.p)("M7 10v7.5h6m-3-3 3 3-3 3M11 6.5h6V10")],
  sandbox: [
    (0, import_geometry.p)(
      "M3 7V4a1 1 0 0 1 1-1h3m4 0h2m4 0h3a1 1 0 0 1 1 1v3M3 11v2m18-2v2M3 17v3a1 1 0 0 0 1 1h3m4 0h2m4 0h3a1 1 0 0 0 1-1v-3m-12-7-2 2 2 2m6-4 2 2-2 2M7 17h10"
    )
  ],
  pipeline: [
    (0, import_geometry.r)(2.5, 8, 5, 8, 1),
    (0, import_geometry.r)(9.5, 8, 5, 8, 2.5),
    (0, import_geometry.p)("m19 8 2.5 4L19 16l-2.5-4L19 8ZM7.5 12h2m5 0h2")
  ],
  "database-query": [
    (0, import_geometry.e)(8.5, 5.5, 5.5, 2.5),
    (0, import_geometry.p)("M3 5.5v12c0 1.4 2.5 2.5 5.5 2.5M14 5.5v4M3 11.5c1.5 1.5 4 2 6.5 2M6 17h3"),
    (0, import_geometry.c)(16, 15, 4),
    (0, import_geometry.l)(19, 18, 22, 21)
  ],
  "database-replica": [
    (0, import_geometry.e)(6.5, 5, 4, 2),
    (0, import_geometry.e)(17.5, 14, 4, 2),
    (0, import_geometry.p)(
      "M2.5 5v7c0 1.1 1.8 2 4 2s4-.9 4-2V5M13.5 14v6c0 1.1 1.8 2 4 2s4-.9 4-2v-6M10.5 8h7v4M6.5 14v4h7"
    )
  ],
  "at-sign": [(0, import_geometry.p)("M16 8v6a2 2 0 0 0 4 0v-2a8 8 0 1 0-4 6.9M16 10.5a3.5 3.5 0 1 0 0 3v-3Z")],
  hash: [(0, import_geometry.p)("M9 3 7 21M17 3l-2 18M3.5 8.5h18M2.5 15.5h18")],
  "thumbs-up": [
    (0, import_geometry.r)(2.5, 10, 4, 11, 1),
    (0, import_geometry.p)(
      "M6.5 11 12 3c.5-.7 1.5-.4 1.7.4.5 2-.1 4.5-.7 6.1h6a2 2 0 0 1 2 2.4l-1.4 7.5a2 2 0 0 1-2 1.6h-7.1l-4-2"
    )
  ],
  "thumbs-down": [
    (0, import_geometry.r)(2.5, 3, 4, 11, 1),
    (0, import_geometry.p)(
      "M6.5 13 12 21c.5.7 1.5.4 1.7-.4.5-2-.1-4.5-.7-6.1h6a2 2 0 0 0 2-2.4l-1.4-7.5a2 2 0 0 0-2-1.6h-7.1l-4 2"
    )
  ],
  "message-dots": [
    (0, import_geometry.p)("M21 14.5a3 3 0 0 1-3 3H9L3 21V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v8.5Z"),
    (0, import_geometry.c)(7, 10.5, 0.7),
    (0, import_geometry.c)(12, 10.5, 0.7),
    (0, import_geometry.c)(17, 10.5, 0.7)
  ],
  "organization-chart": [
    (0, import_geometry.r)(8.5, 2.5, 7, 5, 1),
    (0, import_geometry.p)("M12 7.5V12M5 16v-4h14v4M12 12v4"),
    (0, import_geometry.r)(2.5, 16, 5, 5, 1.5),
    (0, import_geometry.r)(9.5, 16, 5, 5, 1.5),
    (0, import_geometry.r)(16.5, 16, 5, 5, 1.5)
  ],
  vote: [(0, import_geometry.p)("m7 7 3-4 7 5-3 4-7-5ZM5 10H3.5v11h17V10H18M3.5 14h17M10 14h4")],
  "message-reply": [
    (0, import_geometry.p)("M21 12.5V6a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v15l6-3.5h3M20 20v-3a4 4 0 0 0-4-4h-6m3-3-3 3 3 3")
  ]
};
