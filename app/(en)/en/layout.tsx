import type { Metadata, Viewport } from "next";
import "../../globals.css";
import { Shell } from "@/components/Shell";
import { site } from "@/lib/site-config";

const description =
  "Website redesign, new websites and SEO focused on visibility in ChatGPT, Gemini and Perplexity. For clinics, law firms and local businesses in Romania.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Web design and SEO for AI search`,
    template: `%s | ${site.name}`,
  },
  description,
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.url }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    alternateLocale: ["ro_RO"],
    siteName: site.name,
    url: `${site.url}/en/`,
    title: `${site.name} | Web design and SEO for AI search`,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Dragoș Cătană, web designer in Cluj-Napoca" }],
  },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  robots: { index: true, follow: true },
  // The host overrides the Referrer-Policy header from .htaccess; the meta tag sets the policy browsers use.
  referrer: "strict-origin-when-cross-origin",
};

export const viewport: Viewport = { themeColor: "#f6f5f1", width: "device-width", initialScale: 1 };

export default function EnglishLayout({ children }: { children: React.ReactNode }) {
  return <Shell lang="en">{children}</Shell>;
}
