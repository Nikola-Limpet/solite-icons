import { SoliteLogo } from "@/components/solite-logo";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { GridIcon } from "solite-icons/icons/grid";
import { PackageIcon } from "solite-icons/icons/package";
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="solite-brand">
          <SoliteLogo />
          <span>Solite Icons</span>
          <small>Open source</small>
        </span>
      ),
    },
    githubUrl: "https://github.com/Nikola-Limpet/solite-icons",
    links: [
      {
        text: "Browse icons",
        url: "/icons",
        active: "nested-url",
        icon: (
          <GridIcon size={18} className="size-4.5 shrink-0" aria-hidden="true" focusable="false" />
        ),
      },
      {
        text: "npm",
        url: "https://www.npmjs.com/package/solite-icons",
        external: true,
        icon: (
          <PackageIcon
            size={18}
            className="size-4.5 shrink-0"
            aria-hidden="true"
            focusable="false"
          />
        ),
      },
    ],
  };
}
