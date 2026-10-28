import type { Metadata } from "next";
import type { ReactNode } from "react";
import { RootProvider } from "fumadocs-ui/provider/next";
import "./global.css";
import { iconCount } from "../lib/collection";
const basePath = process.env.NEXT_PUBLIC_DOCS_BASE_PATH || "";
const siteUrl = process.env.DOCS_SITE_URL || "https://solite-icons.nikola33.dev";
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Solite Icons · Open-source outline icons for React and SVG",
    template: "%s · Solite Icons",
  },
  description: `${iconCount} original, MIT-licensed outline icons for React and SVG. Browse the collection, copy an import, and make it your own.`,
  icons: {
    icon: [{ url: `${basePath}/brand/solite-mark.svg`, type: "image/svg+xml" }],
    apple: [{ url: `${basePath}/brand/apple-touch-icon.png`, sizes: "180x180" }],
  },
  openGraph: {
    type: "website",
    siteName: "Solite Icons",
    title: "Solite Icons · Open by design",
    description: `${iconCount} original outline icons. React + SVG. Open source and MIT licensed.`,
    images: [
      {
        url: `${basePath}/brand/social.png`,
        width: 1200,
        height: 630,
        alt: `Solite Icons: ${iconCount} open-source outline icons for React and SVG`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Solite Icons · Open by design",
    description: `${iconCount} original, MIT-licensed outline icons for React and SVG.`,
    images: [`${basePath}/brand/social.png`],
  },
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
