import type { Metadata, Viewport } from "next";
import { Inter, Bricolage_Grotesque, Instrument_Serif } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { JsonLd } from "@/components/JsonLd";
import { siteSchema } from "@/lib/schema";
import { site } from "@/lib/site-config";

const sans = Inter({ subsets: ["latin", "latin-ext"], variable: "--font-sans-src", display: "swap" });
const display = Bricolage_Grotesque({ subsets: ["latin", "latin-ext"], variable: "--font-display-src", display: "swap" });
const accent = Instrument_Serif({ subsets: ["latin", "latin-ext"], weight: "400", style: ["normal", "italic"], variable: "--font-accent-src", display: "swap" });

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
    siteName: site.name,
    url: site.url,
    title: `${site.name} | Web design și SEO pentru căutare AI`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  alternates: { canonical: "./" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#f6f5f1", width: "device-width", initialScale: 1 };

// Consent Mode v2: everything denied by default; restored from the visitor's earlier choice.
const consentDefault = `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
try{if(localStorage.getItem('cookie-consent-v1')==='granted'){gtag('consent','update',{analytics_storage:'granted'});}}catch(e){}
`;

const gtmLoader = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${site.gtmId}');`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ro" className={`${sans.variable} ${display.variable} ${accent.variable}`}>
      <body>
        <Script id="consent-default" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: consentDefault }} />
        <Script id="gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: gtmLoader }} />
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${site.gtmId}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} title="Google Tag Manager" />
        </noscript>
        <noscript><style>{`[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style></noscript>
        <JsonLd data={siteSchema} />
        <a href="#continut" className="skip-link">Sari la conținut</a>
        <Header />
        <main id="continut">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
