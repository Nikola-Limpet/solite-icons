import { GridIcon } from "solite-icons";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="solite-brand">
          <GridIcon size={23} />
          <span>Solite Icons</span>
          <small>0.1</small>
        </span>
      ),
    },
    githubUrl: "https://github.com/Nikola-Limpet/solite-icons",
    links: [{ text: "Browse icons", url: "/icons", active: "nested-url" }],
  };
}
