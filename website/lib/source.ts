import { docs } from "../.source/server";
import { loader } from "fumadocs-core/source";
import { createElement } from "react";
import { AccessibilityIcon } from "solite-icons/icons/accessibility";
import { CodeIcon } from "solite-icons/icons/code";
import { FileIcon } from "solite-icons/icons/file";
import { FileTextIcon } from "solite-icons/icons/file-text";
import { GridIcon } from "solite-icons/icons/grid";
import { HomeIcon } from "solite-icons/icons/home";
import { PackageIcon } from "solite-icons/icons/package";
import { ShuffleIcon } from "solite-icons/icons/shuffle";
import { SlidersIcon } from "solite-icons/icons/sliders";
import { TagIcon } from "solite-icons/icons/tag";
import { UsersIcon } from "solite-icons/icons/users";

const sidebarIcons = {
  accessibility: AccessibilityIcon,
  code: CodeIcon,
  file: FileIcon,
  "file-text": FileTextIcon,
  grid: GridIcon,
  home: HomeIcon,
  package: PackageIcon,
  shuffle: ShuffleIcon,
  sliders: SlidersIcon,
  tag: TagIcon,
  users: UsersIcon,
};

export const source = loader({
  baseUrl: "/",
  source: docs.toFumadocsSource(),
  icon(name) {
    if (!name || !Object.hasOwn(sidebarIcons, name)) return;

    return createElement(sidebarIcons[name as keyof typeof sidebarIcons], {
      size: 18,
      className: "size-4.5 shrink-0",
      "aria-hidden": true,
      focusable: false,
    });
  },
});
