import Script from "next/script";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { JsonLd } from "@/components/JsonLd";
import { siteSchema } from "@/lib/schema";
import { site } from "@/lib/site-config";
import { fontClasses } from "@/lib/fonts";
import { ui, type Lang } from "@/lib/i18n";

// Consent Mode v2: everything denied by default; restored from the visitor's earlier choice.
const consentDefault = `
window.dataLayer=window.dataLayer||[];
function gtag(){dataLayer.push(arguments);}
gtag('consent','default',{ad_storage:'denied',ad_user_data:'denied',ad_personalization:'denied',analytics_storage:'denied',wait_for_update:500});
try{if(localStorage.getItem('cookie-consent-v1')==='granted'){gtag('consent','update',{analytics_storage:'granted'});}}catch(e){}
`;

const gtmLoader = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${site.gtmId}');`;

/** The <html> document shared by both root layouts (Romanian at /, English at /en/). */
export function Shell({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return (
    <html lang={lang} className={fontClasses}>
      <body>
        <Script id="consent-default" strategy="beforeInteractive" dangerouslySetInnerHTML={{ __html: consentDefault }} />
        <Script id="gtm" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: gtmLoader }} />
        <noscript>
          <iframe src={`https://www.googletagmanager.com/ns.html?id=${site.gtmId}`} height="0" width="0" style={{ display: "none", visibility: "hidden" }} title="Google Tag Manager" />
        </noscript>
        <noscript><style>{`[style*="opacity: 0"]{opacity:1!important;transform:none!important}`}</style></noscript>
        <JsonLd data={siteSchema} />
        <a href="#continut" className="skip-link">{ui[lang].skip}</a>
        <Header lang={lang} />
        <main id="continut">{children}</main>
        <Footer lang={lang} />
        <CookieBanner lang={lang} />
      </body>
    </html>
  );
}
