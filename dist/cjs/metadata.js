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
var metadata_exports = {};
__export(metadata_exports, {
  iconMetadata: () => iconMetadata,
  isIconName: () => isIconName,
  lucideIconMap: () => lucideIconMap,
  searchIcons: () => searchIcons
});
module.exports = __toCommonJS(metadata_exports);
var import_baseline = require("./metadata/baseline.js");
var import_interface_expansion = require("./metadata/interface-expansion.js");
var import_editing_expansion = require("./metadata/editing-expansion.js");
var import_apps_expansion = require("./metadata/apps-expansion.js");
const iconMetadata = {
  ...import_baseline.baselineMetadata,
  ...import_interface_expansion.interfaceExpansionMetadata,
  ...import_editing_expansion.editingExpansionMetadata,
  ...import_apps_expansion.appsExpansionMetadata
};
function isIconName(value) {
  return typeof value === "string" && Object.hasOwn(iconMetadata, value);
}
const normalize = (value) => value.toLowerCase().replace(/[^a-z0-9]/g, "");
const entries = Object.entries(iconMetadata).map(
  ([name, info]) => ({
    name,
    terms: [name, `${name}Icon`, info.category, ...info.tags, ...info.aliases ?? []].map(
      normalize
    )
  })
);
function searchIcons(query) {
  const text = normalize(query.trim());
  return entries.filter(({ terms }) => terms.some((term) => term.includes(text))).map(({ name }) => name);
}
const lucideIconMap = {
  House: "home",
  Home: "home",
  Search: "search",
  Settings: "settings",
  User: "user",
  Users: "users",
  Menu: "menu",
  Check: "check",
  Plus: "plus",
  Minus: "minus",
  Bell: "bell",
  Mail: "mail",
  Calendar: "calendar",
  Clock: "clock",
  Heart: "heart",
  Star: "star",
  Trash: "trash",
  Trash2: "trash",
  Pencil: "edit",
  SquarePen: "edit-square",
  Download: "download",
  Upload: "upload",
  Lock: "lock",
  Eye: "eye",
  EyeOff: "eye-off",
  File: "file",
  FileText: "file-text",
  Folder: "folder",
  Camera: "camera",
  Image: "image",
  Play: "play",
  Pause: "pause",
  ShoppingCart: "shopping-cart",
  CreditCard: "credit-card",
  Tag: "tag",
  Link: "link",
  ExternalLink: "external-link",
  RefreshCw: "refresh",
  Copy: "copy",
  Funnel: "filter",
  CircleHelp: "help",
  CircleQuestionMark: "help",
  Info: "info",
  TriangleAlert: "alert-triangle",
  CircleAlert: "alert-circle",
  CircleCheck: "check-circle",
  CircleX: "x-circle",
  CirclePlus: "plus-circle",
  CircleMinus: "minus-circle",
  Sun: "sun",
  Moon: "moon",
  Phone: "phone",
  MapPin: "map-pin",
  Globe: "globe",
  LogOut: "logout",
  LogIn: "login",
  ArrowLeft: "arrow-left",
  ArrowRight: "arrow-right",
  ArrowUp: "arrow-up",
  ArrowDown: "arrow-down",
  ChevronDown: "chevron-down",
  ChevronUp: "chevron-up",
  ChevronLeft: "chevron-left",
  ChevronRight: "chevron-right",
  Ellipsis: "more-horizontal",
  EllipsisVertical: "more-vertical",
  Loader: "loading",
  LayoutDashboard: "dashboard",
  LayoutGrid: "grid",
  PanelLeft: "sidebar",
  SlidersHorizontal: "sliders",
  QrCode: "qr-code",
  Package: "package",
  Store: "shop",
  Coffee: "coffee",
  Keyboard: "keyboard",
  Captions: "captions",
  Ear: "ear",
  Contrast: "contrast",
  Bold: "bold",
  Italic: "italic",
  Underline: "underline",
  Layers: "layers"
};
