import type { Metadata, Viewport } from "next";
import "../globals.css";
import { fontClasses } from "@/lib/fonts";
import { brand, site } from "@/lib/site-config";

/**
 * A separate root layout for the pocket pages (/linkuri/ and /carte-de-vizita/): no site header, footer,
 * cookie banner or analytics, so they open fast from an Instagram bio or a phone held out at a meeting.
 * Indexable and in the sitemap (Dragoș wants them to rank for his name), with ProfilePage / ContactPage schema.
 */
export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  icons: brand.icons,
  manifest: brand.manifest,
  applicationName: site.name,
  robots: { index: true, follow: true },
  referrer: "strict-origin-when-cross-origin",
};

export const viewport: Viewport = { themeColor: "#131313", width: "device-width", initialScale: 1 };

export default function PocketLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={fontClasses}>
      <body className="min-h-dvh bg-paper">{children}</body>
    </html>
  );
}
