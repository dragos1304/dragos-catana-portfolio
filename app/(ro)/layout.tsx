import type { Metadata, Viewport } from "next";
import "../globals.css";
import { Shell } from "@/components/Shell";
import { site } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Web design și SEO pentru căutare AI`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.url }],
  openGraph: {
    type: "website",
    locale: "ro_RO",
    alternateLocale: ["en_GB"],
    siteName: site.name,
    url: site.url,
    title: `${site.name} | Web design și SEO pentru căutare AI`,
    description: site.description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dragoș Cătană: Clienții te caută. Fă-i să te găsească." }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  alternates: { canonical: "./" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#f6f5f1", width: "device-width", initialScale: 1 };

export default function RomanianLayout({ children }: { children: React.ReactNode }) {
  return <Shell lang="ro">{children}</Shell>;
}
