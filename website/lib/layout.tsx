import { SoliteLogo } from "@/components/solite-logo";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
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
      { text: "Browse icons", url: "/icons", active: "nested-url" },
      { text: "npm", url: "https://www.npmjs.com/package/solite-icons", external: true },
    ],
  };
}
