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
var baseline_exports = {};
__export(baseline_exports, {
  baselineMetadata: () => baselineMetadata
});
module.exports = __toCommonJS(baseline_exports);
const baselineMetadata = {
  home: {
    category: "Navigation",
    tags: ["home"],
    aliases: ["house", "residence"]
  },
  dashboard: {
    category: "Navigation",
    tags: ["dashboard"],
    aliases: ["layout-dashboard"]
  },
  shop: {
    category: "Navigation",
    tags: ["shop"],
    aliases: ["store", "storefront"]
  },
  building: {
    category: "Navigation",
    tags: ["building"],
    aliases: ["office", "workplace"]
  },
  package: {
    category: "Navigation",
    tags: ["package"],
    aliases: ["software-package", "artifact", "bundle"]
  },
  grid: {
    category: "Navigation",
    tags: ["grid"],
    aliases: ["layout-grid"]
  },
  menu: {
    category: "Navigation",
    tags: ["menu"]
  },
  search: {
    category: "Navigation",
    tags: ["search"],
    aliases: ["magnifier", "magnifying-glass", "find", "text-search"]
  },
  filter: {
    category: "Navigation",
    tags: ["filter"],
    aliases: ["query-filter", "narrow-results"]
  },
  sliders: {
    category: "Navigation",
    tags: ["sliders"],
    aliases: ["preferences", "tune"]
  },
  settings: {
    category: "Navigation",
    tags: ["settings"],
    aliases: ["gear", "cog", "preferences", "configuration"]
  },
  globe: {
    category: "Navigation",
    tags: ["globe"],
    aliases: ["world", "earth", "geography", "internet"]
  },
  compass: {
    category: "Navigation",
    tags: ["compass"],
    aliases: ["bearing", "navigation-compass"]
  },
  "map-pin": {
    category: "Navigation",
    tags: ["map", "pin"],
    aliases: ["location", "place"]
  },
  map: {
    category: "Navigation",
    tags: ["map"],
    aliases: ["atlas", "street-map"]
  },
  route: {
    category: "Navigation",
    tags: ["route"],
    aliases: ["directions", "journey"]
  },
  link: {
    category: "Navigation",
    tags: ["link"],
    aliases: ["hyperlink", "chain-link"]
  },
  "external-link": {
    category: "Navigation",
    tags: ["external", "link"],
    aliases: ["open-in-new", "new-tab"]
  },
  sidebar: {
    category: "Navigation",
    tags: ["sidebar"],
    aliases: ["panel-left"]
  },
  layout: {
    category: "Navigation",
    tags: ["layout"]
  },
  user: {
    category: "People & access",
    tags: ["user"]
  },
  users: {
    category: "People & access",
    tags: ["users"],
    aliases: ["team", "collaborators", "meeting", "pair-programming"]
  },
  "user-add": {
    category: "People & access",
    tags: ["user", "add"],
    aliases: ["invite-collaborator", "invite-user"]
  },
  "user-check": {
    category: "People & access",
    tags: ["user", "check"],
    aliases: ["approved-collaborator"]
  },
  "user-remove": {
    category: "People & access",
    tags: ["user", "remove"],
    aliases: ["remove-collaborator"]
  },
  "user-lock": {
    category: "People & access",
    tags: ["user", "lock"],
    aliases: ["restricted-collaborator"]
  },
  "id-card": {
    category: "People & access",
    tags: ["id", "card"],
    aliases: ["identification", "identity-card"]
  },
  contact: {
    category: "People & access",
    tags: ["contact"]
  },
  handshake: {
    category: "People & access",
    tags: ["handshake"],
    aliases: ["agreement", "partnership"]
  },
  shield: {
    category: "People & access",
    tags: ["shield"],
    aliases: ["protection", "security"]
  },
  "shield-check": {
    category: "People & access",
    tags: ["shield", "check"],
    aliases: ["trusted", "verified-protection"]
  },
  "shield-lock": {
    category: "People & access",
    tags: ["shield", "lock"],
    aliases: ["secure", "protected-access"]
  },
  key: {
    category: "People & access",
    tags: ["key"],
    aliases: ["access-key", "passkey"]
  },
  lock: {
    category: "People & access",
    tags: ["lock"],
    aliases: ["locked", "encryption", "password-protection"]
  },
  unlock: {
    category: "People & access",
    tags: ["unlock"],
    aliases: ["unlocked", "open-access"]
  },
  eye: {
    category: "People & access",
    tags: ["eye"],
    aliases: ["visible", "show-password"]
  },
  "eye-off": {
    category: "People & access",
    tags: ["eye", "off"],
    aliases: ["hidden", "hide-password", "privacy"]
  },
  fingerprint: {
    category: "People & access",
    tags: ["fingerprint"],
    aliases: ["touch-id", "fingerprint-authentication"]
  },
  login: {
    category: "People & access",
    tags: ["login"]
  },
  logout: {
    category: "People & access",
    tags: ["logout"]
  },
  "cash-register": {
    category: "Sales",
    tags: ["cash", "register"],
    aliases: ["pos", "point-of-sale"]
  },
  "shopping-cart": {
    category: "Sales",
    tags: ["shopping", "cart"]
  },
  "shopping-bag": {
    category: "Sales",
    tags: ["shopping", "bag"]
  },
  basket: {
    category: "Sales",
    tags: ["basket"]
  },
  barcode: {
    category: "Sales",
    tags: ["barcode"]
  },
  "qr-code": {
    category: "Sales",
    tags: ["qr", "code"]
  },
  tag: {
    category: "Sales",
    tags: ["tag"],
    aliases: ["git-tag", "version-tag"]
  },
  tags: {
    category: "Sales",
    tags: ["tags"]
  },
  discount: {
    category: "Sales",
    tags: ["discount"]
  },
  percent: {
    category: "Sales",
    tags: ["percent"]
  },
  coupon: {
    category: "Sales",
    tags: ["coupon"]
  },
  gift: {
    category: "Sales",
    tags: ["gift"]
  },
  receipt: {
    category: "Sales",
    tags: ["receipt"]
  },
  "receipt-check": {
    category: "Sales",
    tags: ["receipt", "check"]
  },
  "receipt-refund": {
    category: "Sales",
    tags: ["receipt", "refund"]
  },
  order: {
    category: "Sales",
    tags: ["order"]
  },
  "order-check": {
    category: "Sales",
    tags: ["order", "check"]
  },
  "order-cancel": {
    category: "Sales",
    tags: ["order", "cancel"]
  },
  "order-history": {
    category: "Sales",
    tags: ["order", "history"]
  },
  calculator: {
    category: "Sales",
    tags: ["calculator"],
    aliases: ["arithmetic", "calculation", "math"]
  },
  wallet: {
    category: "Payments & time",
    tags: ["wallet"]
  },
  "credit-card": {
    category: "Payments & time",
    tags: ["credit", "card"]
  },
  cash: {
    category: "Payments & time",
    tags: ["cash"]
  },
  coins: {
    category: "Payments & time",
    tags: ["coins"]
  },
  bank: {
    category: "Payments & time",
    tags: ["bank"]
  },
  "bank-transfer": {
    category: "Payments & time",
    tags: ["bank", "transfer"]
  },
  dollar: {
    category: "Payments & time",
    tags: ["dollar"]
  },
  riel: {
    category: "Payments & time",
    tags: ["riel"]
  },
  "currency-exchange": {
    category: "Payments & time",
    tags: ["currency", "exchange"]
  },
  "payment-check": {
    category: "Payments & time",
    tags: ["payment", "check"]
  },
  "payment-pending": {
    category: "Payments & time",
    tags: ["payment", "pending"]
  },
  "payment-failed": {
    category: "Payments & time",
    tags: ["payment", "failed"]
  },
  invoice: {
    category: "Payments & time",
    tags: ["invoice"]
  },
  "billing-cycle": {
    category: "Payments & time",
    tags: ["billing", "cycle"]
  },
  subscription: {
    category: "Payments & time",
    tags: ["subscription"]
  },
  calendar: {
    category: "Payments & time",
    tags: ["calendar"]
  },
  "calendar-check": {
    category: "Payments & time",
    tags: ["calendar", "check"]
  },
  "calendar-clock": {
    category: "Payments & time",
    tags: ["calendar", "clock"]
  },
  clock: {
    category: "Payments & time",
    tags: ["clock"],
    aliases: ["time"]
  },
  alarm: {
    category: "Payments & time",
    tags: ["alarm"],
    aliases: ["alarm-clock", "wake-up"]
  },
  coffee: {
    category: "Business operations",
    tags: ["coffee"],
    aliases: ["cafe", "hot-drink"]
  },
  tea: {
    category: "Business operations",
    tags: ["tea"],
    aliases: ["tea-drink"]
  },
  cup: {
    category: "Business operations",
    tags: ["cup"],
    aliases: ["beverage", "takeaway-cup"]
  },
  restaurant: {
    category: "Business operations",
    tags: ["restaurant"],
    aliases: ["dining", "food-service"]
  },
  utensils: {
    category: "Business operations",
    tags: ["utensils"],
    aliases: ["cutlery", "fork-knife"]
  },
  "chef-hat": {
    category: "Business operations",
    tags: ["chef", "hat"]
  },
  "cooking-pot": {
    category: "Business operations",
    tags: ["cooking", "pot"]
  },
  bakery: {
    category: "Business operations",
    tags: ["bakery"],
    aliases: ["muffin", "baked-goods"]
  },
  bread: {
    category: "Business operations",
    tags: ["bread"],
    aliases: ["loaf", "toast"]
  },
  bottle: {
    category: "Business operations",
    tags: ["bottle"],
    aliases: ["water-bottle", "drink-bottle"]
  },
  retail: {
    category: "Business operations",
    tags: ["retail"]
  },
  box: {
    category: "Business operations",
    tags: ["box"]
  },
  boxes: {
    category: "Business operations",
    tags: ["boxes"]
  },
  warehouse: {
    category: "Business operations",
    tags: ["warehouse"]
  },
  inventory: {
    category: "Business operations",
    tags: ["inventory"]
  },
  truck: {
    category: "Business operations",
    tags: ["truck"],
    aliases: ["lorry", "freight"]
  },
  delivery: {
    category: "Business operations",
    tags: ["delivery"],
    aliases: ["shipping", "courier"]
  },
  pickup: {
    category: "Business operations",
    tags: ["pickup"]
  },
  table: {
    category: "Business operations",
    tags: ["table"],
    aliases: ["dining-table", "cafe-table"]
  },
  seating: {
    category: "Business operations",
    tags: ["seating"],
    aliases: ["chair", "seat"]
  },
  file: {
    category: "Files",
    tags: ["file"],
    aliases: ["document", "page"]
  },
  files: {
    category: "Files",
    tags: ["files"],
    aliases: ["documents", "pages"]
  },
  "file-add": {
    category: "Files",
    tags: ["file", "add"],
    aliases: ["new-document", "file-plus"]
  },
  "file-check": {
    category: "Files",
    tags: ["file", "check"],
    aliases: ["document-approved", "file-verified"]
  },
  "file-remove": {
    category: "Files",
    tags: ["file", "remove"],
    aliases: ["file-minus", "remove-document"]
  },
  "file-search": {
    category: "Files",
    tags: ["file", "search"],
    aliases: ["find-in-file", "document-search"]
  },
  "file-lock": {
    category: "Files",
    tags: ["file", "lock"],
    aliases: ["protected-document"]
  },
  "file-text": {
    category: "Files",
    tags: ["file", "text"],
    aliases: ["text-document", "notes-file", "document-text"]
  },
  "file-export": {
    category: "Files",
    tags: ["file", "export"],
    aliases: ["document-export"]
  },
  "file-import": {
    category: "Files",
    tags: ["file", "import"],
    aliases: ["document-import"]
  },
  folder: {
    category: "Files",
    tags: ["folder"],
    aliases: ["directory"]
  },
  "folder-open": {
    category: "Files",
    tags: ["folder", "open"],
    aliases: ["open-directory"]
  },
  "folder-add": {
    category: "Files",
    tags: ["folder", "add"],
    aliases: ["new-directory", "folder-plus"]
  },
  archive: {
    category: "Files",
    tags: ["archive"],
    aliases: ["stash", "git-stash"]
  },
  clipboard: {
    category: "Files",
    tags: ["clipboard"],
    aliases: ["paste", "clipboard-copy"]
  },
  "clipboard-check": {
    category: "Files",
    tags: ["clipboard", "check"],
    aliases: ["review-complete", "checklist-complete"]
  },
  "clipboard-list": {
    category: "Files",
    tags: ["clipboard", "list"],
    aliases: ["checklist", "task-list"]
  },
  book: {
    category: "Files",
    tags: ["book"],
    aliases: ["book-open", "reading", "course-text", "manual", "documentation"]
  },
  notebook: {
    category: "Files",
    tags: ["notebook"],
    aliases: ["journal", "study-notes", "notepad"]
  },
  paperclip: {
    category: "Files",
    tags: ["paperclip"],
    aliases: ["attach", "attachment"]
  },
  plus: {
    category: "Actions",
    tags: ["plus"]
  },
  minus: {
    category: "Actions",
    tags: ["minus"]
  },
  check: {
    category: "Actions",
    tags: ["check"]
  },
  x: {
    category: "Actions",
    tags: ["x"],
    aliases: ["close", "dismiss", "cancel"]
  },
  "arrow-left": {
    category: "Actions",
    tags: ["arrow", "left"]
  },
  "arrow-right": {
    category: "Actions",
    tags: ["arrow", "right"]
  },
  "arrow-up": {
    category: "Actions",
    tags: ["arrow", "up"]
  },
  "arrow-down": {
    category: "Actions",
    tags: ["arrow", "down"]
  },
  "chevron-left": {
    category: "Actions",
    tags: ["chevron", "left"]
  },
  "chevron-right": {
    category: "Actions",
    tags: ["chevron", "right"]
  },
  "chevron-up": {
    category: "Actions",
    tags: ["chevron", "up"]
  },
  "chevron-down": {
    category: "Actions",
    tags: ["chevron", "down"]
  },
  undo: {
    category: "Actions",
    tags: ["undo"],
    aliases: ["revert", "rollback"]
  },
  redo: {
    category: "Actions",
    tags: ["redo"],
    aliases: ["reapply"]
  },
  refresh: {
    category: "Actions",
    tags: ["refresh"],
    aliases: ["reload", "refresh-data"]
  },
  rotate: {
    category: "Actions",
    tags: ["rotate"]
  },
  expand: {
    category: "Actions",
    tags: ["expand"],
    aliases: ["unfold", "unfold-code"]
  },
  collapse: {
    category: "Actions",
    tags: ["collapse"],
    aliases: ["fold", "fold-code"]
  },
  move: {
    category: "Actions",
    tags: ["move"]
  },
  sort: {
    category: "Actions",
    tags: ["sort"],
    aliases: ["arrow-up-down", "arrows-up-down"]
  },
  bell: {
    category: "Communication & status",
    tags: ["bell"]
  },
  "bell-off": {
    category: "Communication & status",
    tags: ["bell", "off"]
  },
  mail: {
    category: "Communication & status",
    tags: ["mail"]
  },
  "mail-open": {
    category: "Communication & status",
    tags: ["mail", "open"]
  },
  "mail-send": {
    category: "Communication & status",
    tags: ["mail", "send"],
    aliases: ["send-message", "send-email"]
  },
  message: {
    category: "Communication & status",
    tags: ["message"],
    aliases: ["chat", "comment", "discussion"]
  },
  messages: {
    category: "Communication & status",
    tags: ["messages"],
    aliases: ["conversation", "thread", "message-thread"]
  },
  "message-check": {
    category: "Communication & status",
    tags: ["message", "check"],
    aliases: ["resolved-comment", "resolved-thread"]
  },
  phone: {
    category: "Communication & status",
    tags: ["phone"]
  },
  "phone-call": {
    category: "Communication & status",
    tags: ["phone", "call"]
  },
  headphones: {
    category: "Communication & status",
    tags: ["headphones"],
    aliases: ["headset", "personal-audio"]
  },
  help: {
    category: "Communication & status",
    tags: ["help"],
    aliases: ["circle-help", "question", "support"]
  },
  info: {
    category: "Communication & status",
    tags: ["info"]
  },
  "alert-circle": {
    category: "Communication & status",
    tags: ["alert", "circle"]
  },
  "alert-triangle": {
    category: "Communication & status",
    tags: ["alert", "triangle"]
  },
  "check-circle": {
    category: "Communication & status",
    tags: ["check", "circle"]
  },
  "x-circle": {
    category: "Communication & status",
    tags: ["x", "circle"]
  },
  "minus-circle": {
    category: "Communication & status",
    tags: ["minus", "circle"]
  },
  "plus-circle": {
    category: "Communication & status",
    tags: ["plus", "circle"]
  },
  activity: {
    category: "Communication & status",
    tags: ["activity"],
    aliases: ["pulse", "heartbeat", "vital-signs", "ecg"]
  },
  "chart-bar": {
    category: "Data",
    tags: ["chart", "bar"]
  },
  "chart-line": {
    category: "Data",
    tags: ["chart", "line"]
  },
  "chart-pie": {
    category: "Data",
    tags: ["chart", "pie"]
  },
  "chart-donut": {
    category: "Data",
    tags: ["chart", "donut"]
  },
  "trend-up": {
    category: "Data",
    tags: ["trend", "up"]
  },
  "trend-down": {
    category: "Data",
    tags: ["trend", "down"]
  },
  report: {
    category: "Data",
    tags: ["report"]
  },
  "table-data": {
    category: "Data",
    tags: ["table", "data"]
  },
  database: {
    category: "Data",
    tags: ["database"],
    aliases: ["datastore", "sql-database"]
  },
  server: {
    category: "Data",
    tags: ["server"],
    aliases: ["hosting", "backend", "rack-server"]
  },
  cloud: {
    category: "Data",
    tags: ["cloud"],
    aliases: ["cloudy", "overcast", "cloud-service", "remote-storage"]
  },
  "cloud-upload": {
    category: "Data",
    tags: ["cloud", "upload"],
    aliases: ["upload-to-cloud"]
  },
  "cloud-download": {
    category: "Data",
    tags: ["cloud", "download"],
    aliases: ["download-from-cloud"]
  },
  upload: {
    category: "Data",
    tags: ["upload"]
  },
  download: {
    category: "Data",
    tags: ["download"]
  },
  import: {
    category: "Data",
    tags: ["import"]
  },
  export: {
    category: "Data",
    tags: ["export"]
  },
  save: {
    category: "Data",
    tags: ["save"],
    aliases: ["save-document", "persist"]
  },
  copy: {
    category: "Data",
    tags: ["copy"],
    aliases: ["duplicate", "clone"]
  },
  edit: {
    category: "Data",
    tags: ["edit"],
    aliases: ["pencil", "write", "rename"]
  },
  printer: {
    category: "Devices",
    tags: ["printer"]
  },
  monitor: {
    category: "Devices",
    tags: ["monitor"]
  },
  laptop: {
    category: "Devices",
    tags: ["laptop"]
  },
  tablet: {
    category: "Devices",
    tags: ["tablet"]
  },
  smartphone: {
    category: "Devices",
    tags: ["smartphone"]
  },
  scan: {
    category: "Devices",
    tags: ["scan"]
  },
  scanner: {
    category: "Devices",
    tags: ["scanner"]
  },
  camera: {
    category: "Devices",
    tags: ["camera"]
  },
  image: {
    category: "Devices",
    tags: ["image"]
  },
  images: {
    category: "Devices",
    tags: ["images"]
  },
  crop: {
    category: "Devices",
    tags: ["crop"]
  },
  "zoom-in": {
    category: "Devices",
    tags: ["zoom", "in"]
  },
  "zoom-out": {
    category: "Devices",
    tags: ["zoom", "out"]
  },
  wifi: {
    category: "Devices",
    tags: ["wifi"],
    aliases: ["wireless", "wlan"]
  },
  "wifi-off": {
    category: "Devices",
    tags: ["wifi", "off"],
    aliases: ["wireless-off", "wifi-disabled"]
  },
  bluetooth: {
    category: "Devices",
    tags: ["bluetooth"],
    aliases: ["short-range-wireless"]
  },
  usb: {
    category: "Devices",
    tags: ["usb"],
    aliases: ["usb-port", "universal-serial-bus"]
  },
  plug: {
    category: "Devices",
    tags: ["plug"],
    aliases: ["power-plug", "electrical-connection"]
  },
  power: {
    category: "Devices",
    tags: ["power"],
    aliases: ["power-switch", "on-off"]
  },
  battery: {
    category: "Devices",
    tags: ["battery"],
    aliases: ["battery-level", "power-level"]
  },
  sun: {
    category: "Interface essentials",
    tags: ["sun"],
    aliases: ["light-mode", "day", "sunny", "clear-weather", "daytime"]
  },
  moon: {
    category: "Interface essentials",
    tags: ["moon"],
    aliases: ["dark-mode", "night", "nighttime"]
  },
  loading: {
    category: "Interface essentials",
    tags: ["loading"],
    aliases: ["loader", "spinner"]
  },
  "more-horizontal": {
    category: "Interface essentials",
    tags: ["more", "horizontal"]
  },
  "more-vertical": {
    category: "Interface essentials",
    tags: ["more", "vertical"]
  },
  trash: {
    category: "Interface essentials",
    tags: ["trash"],
    aliases: ["delete", "remove", "bin"]
  },
  "trash-restore": {
    category: "Interface essentials",
    tags: ["trash", "restore"]
  },
  "edit-square": {
    category: "Interface essentials",
    tags: ["edit", "square"],
    aliases: ["compose", "square-pen"]
  },
  "check-square": {
    category: "Interface essentials",
    tags: ["check", "square"]
  },
  "x-square": {
    category: "Interface essentials",
    tags: ["x", "square"]
  },
  heart: {
    category: "Interface essentials",
    tags: ["heart"],
    aliases: ["favorite", "love", "heart-health"]
  },
  star: {
    category: "Interface essentials",
    tags: ["star"]
  },
  flag: {
    category: "Interface essentials",
    tags: ["flag"],
    aliases: ["feature-flag", "milestone"]
  },
  pin: {
    category: "Interface essentials",
    tags: ["pin"],
    aliases: ["pin-message", "pin-comment"]
  },
  bookmark: {
    category: "Interface essentials",
    tags: ["bookmark"],
    aliases: ["saved-reference"]
  },
  history: {
    category: "Interface essentials",
    tags: ["history"],
    aliases: ["change-history", "audit-history"]
  },
  repeat: {
    category: "Interface essentials",
    tags: ["repeat"],
    aliases: ["loop", "repeat-playback", "iteration", "rerun"]
  },
  shuffle: {
    category: "Interface essentials",
    tags: ["shuffle"],
    aliases: ["random-playback", "randomize-tracks"]
  },
  pause: {
    category: "Interface essentials",
    tags: ["pause"],
    aliases: ["pause-playback"]
  },
  play: {
    category: "Interface essentials",
    tags: ["play"],
    aliases: ["start-playback", "resume-playback"]
  },
  "cash-drawer": {
    category: "Workflow",
    tags: ["cash", "drawer"]
  },
  "cash-in": {
    category: "Workflow",
    tags: ["cash", "in"]
  },
  "cash-out": {
    category: "Workflow",
    tags: ["cash", "out"]
  },
  "cloud-sync": {
    category: "Workflow",
    tags: ["cloud", "sync"],
    aliases: ["synchronize-cloud"]
  },
  sunrise: {
    category: "Workflow",
    tags: ["sunrise"],
    aliases: ["dawn", "daybreak"]
  },
  "drag-handle": {
    category: "Workflow",
    tags: ["drag", "handle"]
  },
  "package-add": {
    category: "Workflow",
    tags: ["package", "add"],
    aliases: ["install-package", "add-dependency"]
  },
  "archive-restore": {
    category: "Workflow",
    tags: ["archive", "restore"],
    aliases: ["unstash", "restore-stash"]
  },
  palette: {
    category: "Workflow",
    tags: ["palette"]
  },
  code: {
    category: "Developer tools",
    tags: ["code"],
    aliases: ["source-code", "code-xml", "code-block", "markup", "html"]
  },
  terminal: {
    category: "Developer tools",
    tags: ["terminal"],
    aliases: ["console", "shell", "command-line", "repl"]
  },
  command: {
    category: "Developer tools",
    tags: ["command"],
    aliases: ["command-key", "cmd-key"]
  },
  braces: {
    category: "Developer tools",
    tags: ["braces"],
    aliases: ["curly-braces", "json", "json-object"]
  },
  "git-branch": {
    category: "Developer tools",
    tags: ["git", "branch"],
    aliases: ["branch", "git-fork", "branching", "conditional", "if-else"]
  },
  bot: {
    category: "Developer tools",
    tags: ["bot"],
    aliases: ["automation", "assistant-bot"]
  },
  share: {
    category: "Media & sharing",
    tags: ["share"],
    aliases: ["sharing", "share-document"]
  },
  volume: {
    category: "Media & sharing",
    tags: ["volume"],
    aliases: ["audio", "sound", "volume-high", "loudspeaker-volume"]
  },
  "volume-off": {
    category: "Media & sharing",
    tags: ["volume", "off"],
    aliases: ["mute", "silent", "sound-off"]
  },
  microphone: {
    category: "Media & sharing",
    tags: ["microphone"],
    aliases: ["mic", "voice-input"]
  },
  "microphone-off": {
    category: "Media & sharing",
    tags: ["microphone", "off"],
    aliases: ["mic-mute", "muted-microphone"]
  },
  video: {
    category: "Media & sharing",
    tags: ["video"],
    aliases: ["camcorder", "video-call", "webcam"]
  },
  "video-off": {
    category: "Media & sharing",
    tags: ["video", "off"],
    aliases: ["video-disabled", "webcam-off"]
  },
  sparkles: {
    category: "Discovery & learning",
    tags: ["sparkles"]
  },
  wand: {
    category: "Discovery & learning",
    tags: ["wand"]
  },
  lightbulb: {
    category: "Discovery & learning",
    tags: ["lightbulb"]
  },
  rocket: {
    category: "Discovery & learning",
    tags: ["rocket"],
    aliases: ["deploy", "deployment", "launch-release"]
  },
  accessibility: {
    category: "Discovery & learning",
    tags: ["accessibility"]
  },
  languages: {
    category: "Discovery & learning",
    tags: ["languages"],
    aliases: ["translate", "translation", "multilingual"]
  },
  trophy: {
    category: "Discovery & learning",
    tags: ["trophy"],
    aliases: ["award", "prize", "achievement"]
  },
  "graduation-cap": {
    category: "Discovery & learning",
    tags: ["graduation", "cap"],
    aliases: ["education", "academic", "degree"]
  },
  wrench: {
    category: "Discovery & learning",
    tags: ["wrench"]
  },
  puzzle: {
    category: "Discovery & learning",
    tags: ["puzzle"],
    aliases: ["jigsaw", "problem-solving", "plugin", "extension", "module"]
  },
  target: {
    category: "Discovery & learning",
    tags: ["target"]
  }
};
