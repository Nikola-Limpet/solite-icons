import type { SoliteIconName } from "./data.js";
import { baselineMetadata } from "./metadata/baseline.js";
import { interfaceExpansionMetadata } from "./metadata/interface-expansion.js";
import { editingExpansionMetadata } from "./metadata/editing-expansion.js";
import { appsExpansionMetadata } from "./metadata/apps-expansion.js";

export type IconMetadata = {
  readonly category: string;
  readonly tags: readonly string[];
  readonly aliases?: readonly string[];
};

export const iconMetadata: Readonly<Record<SoliteIconName, IconMetadata>> = {
  ...baselineMetadata,
  ...interfaceExpansionMetadata,
  ...editingExpansionMetadata,
  ...appsExpansionMetadata,
};

export function isIconName(value: unknown): value is SoliteIconName {
  return typeof value === "string" && Object.hasOwn(iconMetadata, value);
}

const normalize = (value: string) => value.toLowerCase().replace(/[^a-z0-9]/g, "");
const entries = (Object.entries(iconMetadata) as [SoliteIconName, IconMetadata][]).map(
  ([name, info]) => ({
    name,
    terms: [name, `${name}Icon`, info.category, ...info.tags, ...(info.aliases ?? [])].map(
      normalize,
    ),
  }),
);

/** Search canonical names, component spelling, tags and aliases in stable collection order. */
export function searchIcons(query: string): SoliteIconName[] {
  const text = normalize(query.trim());
  return entries
    .filter(({ terms }) => terms.some((term) => term.includes(text)))
    .map(({ name }) => name);
}

/** Curated name migration aid. Drawings and all props are not interchangeable with Lucide. */
export const lucideIconMap = {
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
  Layers: "layers",
} as const satisfies Record<string, SoliteIconName>;
