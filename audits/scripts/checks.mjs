/**
 * Fixed scoring rules. Every check reads measured data (data.json) or recorded observations
 * (findings.json) and returns a pass value between 0 and 1. A section score is the weighted share of
 * passed checks; the overall score is the average of the sections that have data. A check whose data
 * is missing is skipped (never counted as a pass or a fail), so a score is never filled in by guesswork.
 *
 * Each check: { id, section, weight, value (0..1 | null to skip), severity when failing, effort,
 *               ro: { title, detail, fix }, en: { title, detail, fix } }
 */

const LOCAL_TYPES = /(LocalBusiness|Dentist|MedicalClinic|MedicalBusiness|Physician|Hospital|LegalService|Attorney|Notary|ProfessionalService|Store|Restaurant|HealthAndBeautyBusiness|AutomotiveBusiness|HomeAndConstructionBusiness|FinancialService|RealEstateAgent|LodgingBusiness|FoodEstablishment|SportsActivityLocation|EducationalOrganization|VeterinaryCare|Optician|Pharmacy|MedicalOrganization)/;

const pct = (n, d) => (d ? n / d : null);
const clamp = (x) => Math.max(0, Math.min(1, x));
const fmtS = (ms) => (ms / 1000).toLocaleString("ro-RO", { maximumFractionDigits: 1 });

export function runChecks(data, f) {
  const P = data.pages.filter((p) => p.status === 200);
  const n = P.length;
  const lh = data.lighthouse;
  const allSchema = P.flatMap((p) => p.schema);
  const local = allSchema.filter((s) => LOCAL_TYPES.test(s.type));
  const localFull = local.find((s) => s.has.includes("address") && s.has.includes("telephone"));
  const titles = P.map((p) => p.title).filter(Boolean);
  const dupTitles = titles.length - new Set(titles).size;
  const goodTitle = P.filter((p) => p.title && p.title.length >= 30 && p.title.length <= 65).length;
  const withDesc = P.filter((p) => p.description && p.description.length >= 70).length;
  const oneH1 = P.filter((p) => p.h1.length === 1).length;
  const multiH1 = P.filter((p) => p.h1.length > 1);
  const noH1 = P.filter((p) => p.h1.length === 0);
  const imgs = P.reduce((a, p) => a + p.images.total, 0);
  const noAlt = P.reduce((a, p) => a + p.images.missingAlt, 0);
  const canon = P.filter((p) => p.canonical).length;
  const weak = P.reduce((a, p) => a + p.weakAnchors, 0);
  const brokenInt = data.links.broken.filter((l) => l.kind === "internal");
  const brokenExt = data.links.broken.filter((l) => l.kind === "external");
  const bots = data.robots.bots ?? {};
  const aiBots = ["GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "PerplexityBot", "Google-Extended"];
  const blockedAi = aiBots.filter((b) => bots[b]?.blocked);
  const mob = data.browser?.mobile;
  const php = /PHP\/(\d+)\.(\d+)/.exec(data.headers["x-powered-by"] ?? "");
  const phpOld = php && (Number(php[1]) < 8 || (Number(php[1]) === 8 && Number(php[2]) < 2));
  const hasFaqText = P.some((p) => p.hasFaqText);
  const hasFaqSchema = allSchema.some((s) => /FAQPage/.test(s.type));
  const sameAs = allSchema.some((s) => s.has.includes("sameAs"));

  const checks = [];
  const add = (c) => checks.push(c);

  // ---------------- Tehnic și viteză ----------------
  add({ id: "https", section: "technical", weight: 2, value: data.httpToHttps.ok ? 1 : 0, severity: "critic", effort: "quick",
    ro: { title: "Varianta http:// nu trimite către https://", detail: "Vizitatorii și Google pot ajunge pe o versiune nesecurizată a site-ului.", fix: "Redirecționare permanentă (301) de la http la https." },
    en: { title: "http:// does not redirect to https://", detail: "Visitors and Google can land on an insecure version of the site.", fix: "A permanent (301) redirect from http to https." } });
  add({ id: "host", section: "technical", weight: 1, value: data.hostVariant.consolidated == null ? null : data.hostVariant.consolidated ? 1 : 0, severity: "important", effort: "quick",
    ro: { title: "Site-ul răspunde și cu, și fără www", detail: "Două adrese pentru același conținut împart autoritatea în Google.", fix: "Redirecționare 301 către o singură variantă." },
    en: { title: "The site answers both with and without www", detail: "Two addresses for the same content split authority in Google.", fix: "A 301 redirect to one version." } });
  add({ id: "robots", section: "technical", weight: 1, value: data.robots.found ? 1 : 0, severity: "minor", effort: "quick",
    ro: { title: "Lipsește fișierul robots.txt", detail: "Motoarele de căutare nu primesc instrucțiuni și nu găsesc harta site-ului.", fix: "Un robots.txt simplu, cu link către sitemap." },
    en: { title: "robots.txt is missing", detail: "Search engines get no crawl instructions and no pointer to the sitemap.", fix: "A simple robots.txt linking the sitemap." } });
  add({ id: "sitemap", section: "technical", weight: 1, value: data.sitemap.found.length ? 1 : 0, severity: "important", effort: "quick",
    ro: { title: "Nu am găsit harta site-ului (sitemap.xml)", detail: "Google descoperă mai greu paginile noi.", fix: "Generare automată a sitemap.xml și trimiterea lui în Google Search Console." },
    en: { title: "No sitemap.xml found", detail: "Google discovers new pages more slowly.", fix: "Generate sitemap.xml automatically and submit it in Google Search Console." } });
  if (lh) {
    add({ id: "speed", section: "technical", weight: 3, value: lh.scores.performance / 100, severity: lh.scores.performance < 50 ? "critic" : "important", effort: "big",
      ro: { title: `Site-ul se încarcă greu pe telefon (scor ${lh.scores.performance}/100)`, detail: `Conținutul principal apare după ${fmtS(lh.metrics.lcpMs)} s pe un telefon obișnuit (Google recomandă sub 2,5 s). Mulți pacienți închid pagina înainte.`, fix: "Imagini comprimate și la dimensiunea potrivită, scripturi amânate, fonturi optimizate, cache." },
      en: { title: `The site loads slowly on phones (score ${lh.scores.performance}/100)`, detail: `The main content appears after ${(lh.metrics.lcpMs / 1000).toFixed(1)} s on a typical phone (Google recommends under 2.5 s).`, fix: "Compressed, right-sized images, deferred scripts, optimised fonts, caching." } });
    add({ id: "lcp", section: "technical", weight: 2, value: lh.metrics.lcpMs <= 2500 ? 1 : lh.metrics.lcpMs <= 4000 ? 0.5 : 0, severity: "important", effort: "big", hidden: true,
      ro: { title: "LCP peste pragul Google", detail: "", fix: "" }, en: { title: "LCP above Google's threshold", detail: "", fix: "" } });
    add({ id: "cls", section: "technical", weight: 1, value: lh.metrics.cls <= 0.1 ? 1 : lh.metrics.cls <= 0.25 ? 0.5 : 0, severity: "important", effort: "quick",
      ro: { title: "Conținutul „sare” în timpul încărcării", detail: `Deplasare a layout-ului: ${lh.metrics.cls.toFixed(2)} (Google recomandă sub 0,1).`, fix: "Dimensiuni fixe pentru imagini, bannere și fonturi." },
      en: { title: "Content jumps while loading", detail: `Layout shift: ${lh.metrics.cls.toFixed(2)} (Google recommends under 0.1).`, fix: "Fixed sizes for images, banners and fonts." } });
    add({ id: "ttfb", section: "technical", weight: 1, value: lh.metrics.ttfbMs == null ? null : lh.metrics.ttfbMs <= 600 ? 1 : lh.metrics.ttfbMs <= 1200 ? 0.5 : 0, severity: "minor", effort: "big",
      ro: { title: "Serverul răspunde lent", detail: `Primul răspuns al serverului a venit după ${Math.round(lh.metrics.ttfbMs)} ms.`, fix: "Cache de pagină și găzduire mai rapidă." },
      en: { title: "Slow server response", detail: `The server's first response took ${Math.round(lh.metrics.ttfbMs)} ms.`, fix: "Page caching and faster hosting." } });
  }
  add({ id: "broken-internal", section: "technical", weight: 2, value: clamp(1 - brokenInt.length / 5), severity: "important", effort: "quick",
    ro: { title: `${brokenInt.length} linkuri interne nu funcționează`, detail: "Vizitatorii și Google ajung pe pagini de eroare.", fix: "Corectarea linkurilor sau redirecționări 301 către paginile noi." },
    en: { title: `${brokenInt.length} internal links are broken`, detail: "Visitors and Google hit error pages.", fix: "Fix the links or 301-redirect them." } });
  add({ id: "broken-external", section: "technical", weight: 0.5, value: clamp(1 - brokenExt.length / 5), severity: "minor", effort: "quick",
    ro: { title: `${brokenExt.length} linkuri către alte site-uri nu mai funcționează`, detail: brokenExt.slice(0, 2).map((l) => `${shortUrl(l.url)} (eroare ${l.status}, pe ${shortUrl(l.foundOn[0])})`).join("; "), fix: "Înlocuirea sau ștergerea lor." },
    en: { title: `${brokenExt.length} outbound links are dead`, detail: brokenExt.slice(0, 2).map((l) => `${shortUrl(l.url)} (error ${l.status})`).join("; "), fix: "Replace or remove them." } });
  add({ id: "hsts", section: "technical", weight: 0.5, value: data.headers["strict-transport-security"] ? 1 : 0, severity: "minor", effort: "quick",
    ro: { title: "Lipsește antetul de securitate HSTS", detail: "Browserul nu e obligat să folosească mereu conexiunea securizată.", fix: "Activarea HSTS pe server." },
    en: { title: "No HSTS header", detail: "Browsers are not told to always use HTTPS.", fix: "Enable HSTS on the server." } });
  add({ id: "php", section: "technical", weight: 0.5, value: php ? (phpOld ? 0 : 1) : null, severity: "important", effort: "big",
    ro: { title: `Serverul afișează o versiune veche de PHP (${php?.[0] ?? ""})`, detail: "Versiunea nu mai primește actualizări de securitate și e anunțată public în răspunsul serverului.", fix: "Actualizare la o versiune de PHP suportată (8.2+) și ascunderea antetului X-Powered-By." },
    en: { title: `The server exposes an old PHP version (${php?.[0] ?? ""})`, detail: "That version no longer gets security updates and is advertised in every response.", fix: "Upgrade to a supported PHP (8.2+) and hide X-Powered-By." } });

  // ---------------- On-page ----------------
  add({ id: "titles", section: "onpage", weight: 2, value: pct(goodTitle, n), severity: "important", effort: "quick",
    ro: { title: `${n - goodTitle} din ${n} pagini au titlul lipsă, prea scurt sau prea lung`, detail: "Titlul e primul lucru pe care îl vede pacientul în Google.", fix: "Titluri de 30–65 de caractere: serviciu + oraș + nume." },
    en: { title: `${n - goodTitle} of ${n} pages have a missing, too short or too long title`, detail: "The title is the first thing people see in Google.", fix: "30–65 character titles: service + city + name." } });
  add({ id: "dup-titles", section: "onpage", weight: 2, value: n ? clamp(1 - dupTitles / Math.max(1, n - 1)) : null, severity: "important", effort: "quick",
    ro: { title: `${dupTitles} pagini repetă titlul altei pagini`, detail: "Google nu știe ce pagină să arate pentru ce căutare.", fix: "Un titlu unic pentru fiecare pagină." },
    en: { title: `${dupTitles} pages repeat another page's title`, detail: "Google can't tell which page to show for which search.", fix: "A unique title per page." } });
  add({ id: "desc", section: "onpage", weight: 1.5, value: pct(withDesc, n), severity: "minor", effort: "quick",
    ro: { title: `${n - withDesc} din ${n} pagini nu au o descriere bună`, detail: "Fără descriere, Google alege singur un fragment, adesea nepotrivit.", fix: "Descrieri de 120–160 de caractere, cu un motiv clar să dai click." },
    en: { title: `${n - withDesc} of ${n} pages lack a proper meta description`, detail: "Google then picks a random snippet.", fix: "120–160 character descriptions with a clear reason to click." } });
  add({ id: "h1", section: "onpage", weight: 2, value: pct(oneH1, n), severity: "important", effort: "quick",
    ro: { title: multiH1.length ? `${multiH1.length} din ${n} pagini au mai multe titluri principale (H1)` : `${noH1.length} din ${n} pagini nu au titlu principal (H1)`, detail: multiH1.length ? `Pagina principală are ${P[0]?.h1.length} titluri H1. Google și AI-ul nu mai știu care e subiectul paginii.` : "Pagina nu își spune clar subiectul.", fix: "Un singur H1 pe pagină, care spune serviciul și orașul; restul titlurilor devin H2/H3." },
    en: { title: multiH1.length ? `${multiH1.length} of ${n} pages have several main headings (H1)` : `${noH1.length} of ${n} pages have no H1`, detail: "Google and AI can't tell what the page is about.", fix: "One H1 per page naming the service and city." } });
  add({ id: "alt", section: "onpage", weight: 1, value: imgs ? clamp(1 - noAlt / imgs) : null, severity: "minor", effort: "quick",
    ro: { title: `${noAlt} imagini nu au text alternativ`, detail: "Google Imagini și cititoarele de ecran nu știu ce arată pozele.", fix: "Descrieri scurte pentru fiecare imagine relevantă." },
    en: { title: `${noAlt} images have no alt text`, detail: "Google Images and screen readers can't tell what they show.", fix: "Short descriptions for meaningful images." } });
  add({ id: "canonical", section: "onpage", weight: 1, value: pct(canon, n), severity: "minor", effort: "quick",
    ro: { title: `${n - canon} pagini nu au adresă canonică`, detail: "Pot apărea duplicate în Google.", fix: "Etichetă canonical pe fiecare pagină." },
    en: { title: `${n - canon} pages have no canonical URL`, detail: "Duplicates may appear in Google.", fix: "A canonical tag on every page." } });
  add({ id: "anchors", section: "onpage", weight: 0.5, value: clamp(1 - weak / 20), severity: "minor", effort: "quick",
    ro: { title: `${weak} linkuri au texte vagi („aici”, „detalii”)`, detail: "Textul linkului îi spune lui Google despre ce e pagina următoare.", fix: "Texte descriptive: „vezi prețurile pentru implant”." },
    en: { title: `${weak} links use vague text ("here", "more")`, detail: "Link text tells Google what the next page is about.", fix: "Descriptive link text." } });

  // ---------------- Schema ----------------
  add({ id: "jsonld", section: "schema", weight: 1, value: allSchema.length ? 1 : 0, severity: "important", effort: "quick",
    ro: { title: "Site-ul nu are date structurate (schema.org)", detail: "Google și AI-ul trebuie să ghicească cine sunteți.", fix: "JSON-LD pentru afacere, servicii și întrebări frecvente." },
    en: { title: "No structured data (schema.org)", detail: "Google and AI have to guess who you are.", fix: "JSON-LD for the business, services and FAQ." } });
  add({ id: "localbusiness-schema", section: "schema", weight: 3, value: local.length ? 1 : 0, severity: "critic", effort: "quick",
    ro: { title: "Site-ul nu spune în cod că e o afacere locală", detail: `Am găsit doar tipurile ${[...new Set(allSchema.map((s) => s.type))].join(", ") || "—"}. Lipsește descrierea de tip ${f.client.type?.match(/stomat|dent/i) ? "Dentist" : f.client.type?.match(/avoc|juri|lege/i) ? "LegalService" : "LocalBusiness"} cu adresă, telefon, program și coordonate, exact ce citesc Google Maps și asistenții AI.`, fix: "Bloc JSON-LD LocalBusiness (subtip potrivit) cu nume, adresă, telefon, program, coordonate și profiluri sociale, identic cu profilul de Google." },
    en: { title: "The site doesn't declare itself a local business", detail: `Only ${[...new Set(allSchema.map((s) => s.type))].join(", ") || "—"} found. No LocalBusiness markup with address, phone, hours and coordinates.`, fix: "A LocalBusiness JSON-LD block matching the Google profile." } });
  add({ id: "nap-schema", section: "schema", weight: 1.5, value: local.length ? (localFull ? 1 : 0) : 0, severity: "important", effort: "quick", hidden: !local.length,
    ro: { title: "Datele de afacere din cod nu au adresă și telefon", detail: "", fix: "Adresă și telefon identice cu Google Business Profile." },
    en: { title: "Business markup lacks address and phone", detail: "", fix: "Address and phone matching the Google profile." } });
  add({ id: "hours-schema", section: "schema", weight: 1, value: local.some((s) => s.has.includes("openingHoursSpecification") || s.has.includes("openingHours")) ? 1 : 0, severity: "minor", effort: "quick", hidden: !local.length,
    ro: { title: "Programul nu apare în datele structurate", detail: "", fix: "openingHoursSpecification în JSON-LD." }, en: { title: "Opening hours missing from markup", detail: "", fix: "Add openingHoursSpecification." } });
  add({ id: "sameas", section: "schema", weight: 1, value: sameAs ? 1 : 0, severity: "minor", effort: "quick",
    ro: { title: "Profilurile sociale nu sunt legate de site în cod", detail: "Câmpul sameAs le spune lui Google și AI-ului că pagina de Facebook, Instagram și profilul de Google sunt aceeași afacere.", fix: "sameAs cu toate profilurile oficiale." },
    en: { title: "Social profiles aren't linked in markup", detail: "sameAs ties your profiles to one entity.", fix: "Add sameAs with every official profile." } });
  add({ id: "faq-schema", section: "schema", weight: 1, value: hasFaqSchema ? 1 : hasFaqText ? 0 : 0.5, severity: "minor", effort: "quick",
    ro: { title: hasFaqText ? "Întrebările frecvente nu sunt marcate pentru Google" : "Nu există o secțiune de întrebări frecvente", detail: "Întrebările și răspunsurile clare sunt cel mai ușor de preluat de ChatGPT și de Google.", fix: "O secțiune de întrebări frecvente pe fiecare serviciu, marcată cu FAQPage." },
    en: { title: hasFaqText ? "FAQ content isn't marked up" : "No FAQ section", detail: "Clear Q&A is the easiest content for ChatGPT and Google to reuse.", fix: "An FAQ per service, marked up with FAQPage." } });

  // ---------------- Mobil și accesibilitate ----------------
  add({ id: "viewport", section: "mobile", weight: 1, value: P[0]?.viewport ? 1 : 0, severity: "critic", effort: "quick",
    ro: { title: "Pagina nu e configurată pentru telefon", detail: "Lipsește eticheta viewport.", fix: "Eticheta meta viewport." }, en: { title: "No mobile viewport", detail: "", fix: "Add the viewport meta tag." } });
  if (mob) {
    add({ id: "overflow", section: "mobile", weight: 2, value: mob.horizontalOverflow ? 0 : 1, severity: "important", effort: "quick",
      ro: { title: "Pe telefon pagina iese din ecran lateral", detail: `Conținutul are ${mob.scrollWidth}px pe un ecran de ${mob.viewportWidth}px.`, fix: "Corectarea elementelor mai late decât ecranul." },
      en: { title: "The page scrolls sideways on phones", detail: "", fix: "Fix elements wider than the screen." } });
    add({ id: "font", section: "mobile", weight: 1, value: mob.bodyFontPx >= 16 ? 1 : mob.bodyFontPx >= 14 ? 0.5 : 0, severity: "minor", effort: "quick",
      ro: { title: `Textul e mic pe telefon (${mob.bodyFontPx}px)`, detail: "Sub 16px, textul se citește greu fără zoom.", fix: "Text de bază de minimum 16px." }, en: { title: `Small text on phones (${mob.bodyFontPx}px)`, detail: "", fix: "16px minimum body text." } });
    add({ id: "tap", section: "mobile", weight: 1, value: clamp(1 - mob.smallTapTargets / 15), severity: "minor", effort: "quick",
      ro: { title: `${mob.smallTapTargets} butoane sau linkuri sunt prea mici pentru deget`, detail: "Elemente mai mici de 24×24px, greu de apăsat pe telefon.", fix: "Zone de atingere de cel puțin 44×44px pentru butoane și iconițe." },
      en: { title: `${mob.smallTapTargets} tap targets are too small`, detail: "Under 24×24px.", fix: "44×44px touch areas." } });
    add({ id: "tel", section: "mobile", weight: 1, value: mob.hasTelLinkVisible ? 1 : 0, severity: "important", effort: "quick",
      ro: { title: "Pe telefon nu se poate suna direct din primul ecran", detail: "Pacientul trebuie să caute și să copieze numărul.", fix: "Buton „Sună” vizibil sus, cu link tel:." }, en: { title: "No click-to-call near the top on mobile", detail: "", fix: "A visible call button with a tel: link." } });
  }
  if (lh) add({ id: "a11y", section: "mobile", weight: 3, value: lh.scores.accessibility / 100, severity: lh.scores.accessibility < 70 ? "important" : "minor", effort: "quick",
    ro: { title: `Accesibilitate ${lh.scores.accessibility}/100`, detail: accessibilityDetail(lh, "ro"), fix: "Contrast suficient, texte pentru linkuri și imagini, ordinea corectă a titlurilor." },
    en: { title: `Accessibility ${lh.scores.accessibility}/100`, detail: accessibilityDetail(lh, "en"), fix: "Sufficient contrast, link and image text, correct heading order." } });

  // ---------------- AI: pregătire tehnică (partea măsurabilă) ----------------
  add({ id: "ai-bots", section: "ai", weight: 2, value: blockedAi.length ? 0 : 1, severity: "critic", effort: "quick",
    ro: { title: `robots.txt blochează asistenții AI: ${blockedAi.join(", ")}`, detail: "Acești roboți nu pot citi site-ul, deci nu îl pot recomanda.", fix: "Permiterea accesului pentru roboții AI în robots.txt." },
    en: { title: `robots.txt blocks AI crawlers: ${blockedAi.join(", ")}`, detail: "They can't read the site, so they can't recommend it.", fix: "Allow AI crawlers in robots.txt." } });
  add({ id: "llms", section: "ai", weight: 0.5, value: data.llmsTxt.found ? 1 : 0, severity: "minor", effort: "quick",
    ro: { title: "Lipsește fișierul llms.txt", detail: "Un rezumat simplu al afacerii, scris pentru asistenții AI. Nu e un standard oficial încă, dar e ieftin și nu strică.", fix: "Un llms.txt cu serviciile, adresa și paginile importante." },
    en: { title: "No llms.txt", detail: "A plain summary of the business for AI assistants. Not an official standard yet, but cheap.", fix: "An llms.txt with services, address and key pages." } });

  // AI: measured mentions
  const prompts = f.ai?.prompts ?? [];
  if (prompts.length) {
    const m = prompts.filter((p) => p.mentioned).length;
    add({ id: "ai-mentions", section: "ai", weight: 6, value: m / prompts.length, severity: m / prompts.length < 0.5 ? "critic" : "important", effort: "big",
      ro: { title: `Apăreți în ${m} din ${prompts.length} răspunsuri AI verificate`, detail: "Când un pacient întreabă un asistent AI, acesta recomandă 3–7 clinici. Dacă nu sunteți printre ele, nu existați pentru acel pacient.", fix: "Pagini de servicii clare, date structurate, recenzii și mențiuni pe site-uri locale de încredere." },
      en: { title: `You appear in ${m} of ${prompts.length} AI answers checked`, detail: "AI assistants recommend 3–7 businesses. If you're not listed, you don't exist for that customer.", fix: "Clear service pages, structured data, reviews and local mentions." } });
  }

  // ---------------- Google (observed rankings) ----------------
  const kws = f.google?.keywords ?? [];
  if (kws.length) {
    const kwScore = (k) => Math.max(k.localPack && k.localPack <= 3 ? 1 : 0, k.organic == null ? 0 : k.organic <= 3 ? 1 : k.organic <= 10 ? 0.6 : k.organic <= 20 ? 0.3 : 0);
    const avg = kws.reduce((a, k) => a + kwScore(k), 0) / kws.length;
    const top = kws.filter((k) => kwScore(k) >= 1).length;
    add({ id: "rankings", section: "google", weight: 4, value: avg, severity: avg < 0.5 ? "critic" : "important", effort: "big",
      ro: { title: `Pe primele locuri în ${top} din ${kws.length} căutări importante`, detail: "Am verificat căutările pe care le face un client din oraș: harta Google și rezultatele obișnuite.", fix: "Pagini dedicate pe servicii, profil Google optimizat, linkuri din surse locale." },
      en: { title: `Top-3 for ${top} of ${kws.length} key searches`, detail: "Checked the local map pack and organic results.", fix: "Dedicated service pages, an optimised Google profile, local links." } });
    if (f.google.brandKeyword) add({ id: "brand", section: "google", weight: 2, value: f.google.brandHomepageRank === 1 ? 1 : f.google.brandHomepageRank ? 0.5 : 0, severity: "important", effort: "quick",
      ro: { title: `Când cineva caută „${f.google.brandKeyword}”, site-ul nu apare primul`, detail: f.google.brandNote ?? "", fix: "Pagina principală cu numele afacerii în titlu și H1, date structurate de afacere și linkuri de pe profilurile oficiale." },
      en: { title: `Searching "${f.google.brandKeyword}" doesn't show your site first`, detail: f.google.brandNote ?? "", fix: "Brand name in the homepage title and H1, business markup, links from official profiles." } });
  }

  // ---------------- Google Business Profile ----------------
  const g = f.gbp;
  if (g?.rating != null) {
    const comp = (g.competitors ?? []).map((c) => c.reviews).sort((a, b) => a - b);
    const median = comp.length ? comp[Math.floor(comp.length / 2)] : null;
    add({ id: "gbp-rating", section: "gbp", weight: 2, value: clamp((g.rating - 3.5) / 1.3), severity: "important", effort: "big",
      ro: { title: `Nota pe Google: ${g.rating.toLocaleString("ro-RO")}`, detail: "", fix: "" }, en: { title: `Google rating: ${g.rating}`, detail: "", fix: "" }, hidden: g.rating >= 4.6 });
    if (median) add({ id: "gbp-volume", section: "gbp", weight: 2, value: clamp(g.reviews / median), severity: "important", effort: "quick",
      ro: { title: `${g.reviews} recenzii, față de ${median} la afacerea tipică din zonă`, detail: `Valoarea mediană din ${comp.length} afaceri similare de pe Google Maps. Numărul de recenzii contează pentru poziția pe hartă și pentru recomandările AI.`, fix: "Cerere de recenzie trimisă sistematic după fiecare client servit." },
      en: { title: `${g.reviews} reviews vs a median of ${median} among nearby competitors`, detail: "", fix: "Ask for a review after every treatment." }, hidden: g.reviews >= median });
    if (g.ownerResponseRate != null) add({ id: "gbp-replies", section: "gbp", weight: 2, value: g.ownerResponseRate, severity: "minor", effort: "quick",
      ro: { title: `Răspundeți la ${Math.round(g.ownerResponseRate * 100)}% din recenzii`, detail: "", fix: "Răspuns la fiecare recenzie, în maximum 48 de ore." }, en: { title: `You reply to ${Math.round(g.ownerResponseRate * 100)}% of reviews`, detail: "", fix: "Reply to every review within 48 hours." }, hidden: g.ownerResponseRate >= 0.9 });
    add({ id: "gbp-site", section: "gbp", weight: 1, value: g.websiteLinked ? 1 : 0, severity: "important", effort: "quick",
      ro: { title: "Profilul Google nu are link către site", detail: "", fix: "Adăugarea site-ului în profil." }, en: { title: "The Google profile doesn't link the site", detail: "", fix: "Add the website." }, hidden: g.websiteLinked });
    if (g.reviewsPerMonth != null) add({ id: "gbp-recency", section: "gbp", weight: 1, value: clamp(g.reviewsPerMonth / 10), severity: "minor", effort: "quick", hidden: true,
      ro: { title: "", detail: "", fix: "" }, en: { title: "", detail: "", fix: "" } });
  }

  // Manual issues from findings.json (no weight: they explain, they don't move the score)
  for (const x of f.extraIssues ?? []) add({ ...x, weight: 0, value: 0, manual: true, ro: { title: x.title, detail: x.detail, fix: x.fix }, en: { title: x.title_en ?? x.title, detail: x.detail_en ?? x.detail, fix: x.fix_en ?? x.fix } });

  return checks;
}

function accessibilityDetail(lh, lang) {
  const map = {
    "color-contrast": { ro: "contrast slab între text și fundal", en: "low text contrast" },
    "link-name": { ro: "linkuri fără text", en: "links without text" },
    "image-alt": { ro: "imagini fără descriere", en: "images without alt" },
    "heading-order": { ro: "titluri în ordine greșită", en: "headings out of order" },
    "button-name": { ro: "butoane fără nume", en: "unnamed buttons" },
    "frame-title": { ro: "cadre (iframe) fără titlu", en: "untitled iframes" },
    "label": { ro: "câmpuri de formular fără etichetă", en: "unlabelled form fields" },
    "link-in-text-block": { ro: "linkuri care se disting doar prin culoare", en: "links distinguished by colour only" },
    "target-size": { ro: "zone de atingere prea mici", en: "small touch targets" },
  };
  const found = lh.failed.map((a) => map[a.id]?.[lang]).filter(Boolean);
  return found.length ? (lang === "ro" ? "Probleme găsite: " : "Issues found: ") + found.join(", ") + "." : "";
}

export function shortUrl(u) {
  try { const x = new URL(u); return (x.hostname.replace(/^www\./, "") + x.pathname).replace(/\/$/, "").slice(0, 60); } catch { return u; }
}

export function sectionScores(checks) {
  const out = {};
  for (const c of checks) {
    if (c.value == null || !c.weight) continue;
    out[c.section] ??= { w: 0, s: 0 };
    out[c.section].w += c.weight;
    out[c.section].s += c.weight * c.value;
  }
  return Object.fromEntries(Object.entries(out).map(([k, v]) => [k, Math.round((100 * v.s) / v.w)]));
}
