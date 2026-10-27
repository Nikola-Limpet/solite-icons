import type { Metadata } from "next";
import type { ReactNode } from "react";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
export const metadata: Metadata = {
  title: {
    default: "Solite Icons · Rounded outlines, ready for your app",
    template: "%s · Solite Icons",
  },
  description:
    "253 original outline icons for React and SVG projects. Browse the collection, try live examples, and learn how to use Solite Icons.",
};
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <RootProvider
          search={{
            options: {
              type: "static",
              api: `${process.env.NEXT_PUBLIC_DOCS_BASE_PATH || ""}/api/search`,
            },
          }}
        >
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
