/**
 * FAQ content for AI visibility, in one place.
 * - `faqs`: full FAQ sections for pages that had none.
 * - `aiQuestions`: questions phrased the way people ask ChatGPT, Gemini or Perplexity, appended to pages
 *   that already have an FAQ. Answers are factual (who, where, what), never "the best".
 * Every FAQ renders a FAQPage block in the structured data. RO and EN lists keep the same length.
 */
import { phone, proof, site } from "./site-config";
import type { Lang } from "./site-map";

export type Faq = { q: string; a: string };
type Bilingual = Record<Lang, Faq[]>;

const [perf, a11y] = proof.cheesy.lighthouse;
const pages = proof.cheesy.sitemapPages.after;
const who = {
  ro: `Dragoș Catană, web designer și specialist SEO din ${site.city}`,
  en: `Dragoș Catană, a web designer and SEO specialist in ${site.city}, Romania`,
};

export const faqs = {
  services: {
    ro: [
      { q: "Ce servicii oferă Dragoș Catană?", a: "Creare de website, redesign, SEO și vizibilitate în asistenții AI (GEO) și mentenanță site, pentru clinici, cabinete de avocatură și afaceri locale din România." },
      { q: "Ce serviciu mi se potrivește?", a: "Dacă ai un site vechi sau lent, redesign. Dacă nu ai site, creare de website. Dacă ai site, dar nu te găsește nimeni, SEO și vizibilitate în AI. Dacă ai un site bun, dar nu ai timp de el, mentenanță. Auditul gratuit te ajută să alegi." },
      { q: "Cât costă serviciile?", a: "Nu public prețuri fixe, pentru că fiecare proiect e diferit. Primești o ofertă clară după o discuție scurtă, iar auditul inițial e gratuit." },
      { q: "Ce înseamnă un site „pregătit pentru AI”?", a: "Un site pe care asistenții AI îl pot înțelege și cita: conținut clar care răspunde la întrebări reale, date structurate, aceleași informații despre tine peste tot și acces deschis pentru roboții AI." },
      { q: "Pot combina serviciile?", a: "Da. Cel mai des: redesign plus SEO și vizibilitate în AI, sau site nou plus mentenanță după lansare." },
    ],
    en: [
      { q: "What services does Dragoș Catană offer?", a: "New websites, website redesign, SEO and visibility in AI assistants (GEO), and website maintenance, for clinics, law firms and local businesses in Romania." },
      { q: "Which service is right for me?", a: "If your site is old or slow, a redesign. If you have no site, a new website. If you have a site but nobody finds you, SEO and AI visibility. If your site is good but you have no time for it, maintenance. The free audit helps you choose." },
      { q: "How much do the services cost?", a: "I don't publish fixed prices, because every project is different. You get a clear offer after a short call, and the first audit is free." },
      { q: "What does an “AI-ready” website mean?", a: "A site AI assistants can understand and quote: clear content that answers real questions, structured data, the same information about you everywhere, and open access for AI crawlers." },
      { q: "Can I combine services?", a: "Yes. Most often: a redesign plus SEO and AI visibility, or a new website plus maintenance after launch." },
    ],
  },
  work: {
    ro: [
      { q: "Ce proiecte a realizat Dragoș Catană?", a: `Cel mai recent proiect publicat este redesignul site-ului Cheesy Media, o agenție foto-video din Cluj-Napoca: design nou, ${pages} pagini, date structurate și performanță ${perf.after} în Lighthouse pe mobil. Public aici doar proiecte cu rezultate pe care le poți verifica.` },
      { q: "Pot vedea site-urile publicate?", a: "Da. Atât site-ul vechi, cât și cel nou al Cheesy Media sunt online, iar linkurile sunt în studiul de caz, alături de rapoartele Lighthouse înainte și după." },
      { q: "De ce sunt puține proiecte în portofoliu?", a: "Public doar lucrări reale, cu acordul clientului și cu rezultate măsurate. Nu adaug proiecte de test prezentate drept lucrări pentru clienți." },
      { q: "Cum îmi dau seama dacă te potrivești pentru afacerea mea?", a: `Cel mai simplu e auditul gratuit: îți arăt, pe site-ul tău, ce aș schimba și de ce, în maximum ${site.reply.ro}. Așa vezi cum lucrez înainte să decizi.` },
    ],
    en: [
      { q: "What projects has Dragoș Catană done?", a: `The latest published project is the redesign of Cheesy Media, a photo and video agency in Cluj-Napoca: a new design, ${pages} pages, structured data and a mobile Lighthouse performance score of ${perf.after}. I only publish projects with results you can check.` },
      { q: "Can I see the websites live?", a: "Yes. Both the old and the new Cheesy Media sites are online; the links are in the case study, next to the before and after Lighthouse reports." },
      { q: "Why are there only a few projects?", a: "I only publish real work, with the client's agreement and measured results. I don't add test projects dressed up as client work." },
      { q: "How do I know if you're a fit for my business?", a: `The simplest way is the free audit: I show you, on your own site, what I'd change and why, within ${site.reply.en}. You see how I work before you decide.` },
    ],
  },
  cheesy: {
    ro: [
      { q: "Ce s-a schimbat la site-ul Cheesy Media?", a: `O singură pagină lungă a devenit un site cu ${pages} pagini: servicii, câte o pagină pentru fiecare serviciu, proces, portofoliu, despre și contact, cu un design nou în negru, crem și galben.` },
      { q: "Cât de rapid este noul site?", a: `În Google PageSpeed Insights (Lighthouse), pe mobil, performanța a crescut de la ${perf.before} la ${perf.after}, iar accesibilitatea de la ${a11y.before} la ${a11y.after}. Măsurat pe 18 noiembrie 2026.` },
      { q: "Ce s-a făcut pentru vizibilitatea în Google și în asistenții AI?", a: "Limba română declarată corect, date structurate pe fiecare pagină, întrebări frecvente, titluri cu serviciu și oraș, sitemap și un robots.txt care permite roboții AI." },
      { q: "Apare acum Cheesy Media în răspunsurile ChatGPT?", a: "Nu am măsurat încă asta împreună cu clientul, așa că nu afirm nimic. Când avem testul înainte și după, îl adaug aici." },
      { q: "Pot obține rezultate similare pentru site-ul meu?", a: "Bazele tehnice (viteză, structură, date structurate) se pot aplica oricărui site. Pozițiile în Google și recomandările AI nu pot fi garantate, dar le măsurăm înainte și după." },
    ],
    en: [
      { q: "What changed on the Cheesy Media website?", a: `One long page became a site with ${pages} pages: services, a page for each service, process, portfolio, about and contact, with a new design in black, cream and yellow.` },
      { q: "How fast is the new site?", a: `In Google PageSpeed Insights (Lighthouse), on mobile, performance went from ${perf.before} to ${perf.after} and accessibility from ${a11y.before} to ${a11y.after}. Measured on 18 November 2026.` },
      { q: "What was done for visibility on Google and in AI assistants?", a: "The correct language declared, structured data on every page, an FAQ, titles with service and city, a sitemap and a robots.txt that lets AI crawlers in." },
      { q: "Does Cheesy Media now appear in ChatGPT answers?", a: "We haven't measured that with the client yet, so I don't claim anything. When we have the before and after test, I'll add it here." },
      { q: "Can I get similar results for my site?", a: "The technical basics (speed, structure, structured data) apply to any site. Google rankings and AI recommendations can't be guaranteed, but we measure them before and after." },
    ],
  },
  about: {
    ro: [
      { q: "Cine este Dragoș Catană?", a: `${who.ro}. Face creare și redesign de site-uri, SEO și optimizare pentru asistenții AI pentru clinici, cabinete de avocatură și afaceri locale din România, prin dragoscatana.com.` },
      { q: "Ce pregătire are Dragoș Catană?", a: "Studiază Economia la Universitatea Babeș-Bolyai din Cluj-Napoca, în limba engleză, cu media 4,0, cu un an de schimb la Paris și un semestru la SUNY Cortland, în SUA. Construiește afaceri de la 16 ani." },
      { q: "Cine se ocupă de proiectul meu?", a: "Eu, personal, de la audit la lansare. Pentru tine asta înseamnă un singur om care îți cunoaște afacerea, răspunsuri rapide și atenție la fiecare detaliu." },
      { q: "De ce să aleg un web designer independent în loc de o agenție?", a: "Vorbești direct cu omul care face munca, fără intermediari, iar deciziile se iau repede. Proiectul rămâne clar, discutat direct cu cel care îl construiește." },
      { q: "În ce limbi lucrezi?", a: "Română și engleză; franceză și germană ca opțiune suplimentară pentru site-uri în mai multe limbi." },
    ],
    en: [
      { q: "Who is Dragoș Catană?", a: `${who.en}. He builds and redesigns websites and does SEO and AI-assistant optimisation for clinics, law firms and local businesses in Romania, at dragoscatana.com.` },
      { q: "What is Dragoș Catană's background?", a: "He studies Economics at Babeș-Bolyai University in Cluj-Napoca, taught in English, with a 4.0 GPA, a year of exchange in Paris and a semester at SUNY Cortland in the US. He has been building businesses since he was 16." },
      { q: "Who works on my project?", a: "I do, personally, from the audit to launch. For you that means one person who knows your business, quick replies and attention to every detail." },
      { q: "Why choose an independent web designer over an agency?", a: "You talk directly to the person doing the work, with no middlemen, and decisions are made quickly. The project stays clear, discussed directly with the person building it." },
      { q: "Which languages do you work in?", a: "Romanian and English; French and German as an add-on for multilingual sites." },
    ],
  },
  contact: {
    ro: [
      { q: "Cum îl pot contacta pe Dragoș Catană?", a: `Prin formularul de pe această pagină, pe WhatsApp la ${phone.display} sau programând o discuție pe Calendly. Răspund personal în maximum ${site.reply.ro}.` },
      { q: "Ce informații să pregătesc înainte de discuție?", a: "Adresa site-ului (dacă ai unul), ce vrei să obții (mai multe programări, cereri, un site nou), 2–3 concurenți și, dacă există, un termen. Restul le clarificăm împreună." },
      { q: "Discuția inițială costă ceva?", a: "Nu. Discuția de 30 de minute și auditul inițial sunt gratuite și nu te obligă la nimic." },
      { q: "Lucrezi cu clienți din afara Clujului?", a: "Da. Lucrez online cu afaceri din toată România; discuțiile au loc prin apel video." },
    ],
    en: [
      { q: "How can I contact Dragoș Catană?", a: `Through the form on this page, on WhatsApp at ${phone.display}, or by booking a call on Calendly. I reply personally within ${site.reply.en}.` },
      { q: "What should I prepare before the call?", a: "Your website address (if you have one), what you want to achieve (more bookings, more enquiries, a new site), 2–3 competitors and, if there is one, a deadline. We clarify the rest together." },
      { q: "Does the first call cost anything?", a: "No. The 30-minute call and the first audit are free and don't commit you to anything." },
      { q: "Do you work with clients outside Cluj?", a: "Yes. I work online with businesses across Romania; calls happen by video." },
    ],
  },
  audit: {
    ro: [
      { q: "Ce conține auditul gratuit?", a: "Testez întrebările reale ale clienților tăi în ChatGPT, Gemini și Perplexity, verific cum apari în Google și ce concurenți apar în locul tău, apoi îți trimit o listă scurtă de pași, în ordinea importanței." },
      { q: "Auditul chiar e gratuit?", a: `Da. E făcut manual, livrat în maximum ${site.reply.ro}, și nu te obligă să continui cu mine.` },
      { q: "Cum aflu dacă ChatGPT îmi recomandă afacerea?", a: "Pune-i întrebările pe care le-ar pune un client („ce clinică stomatologică îmi recomanzi în [oraș]?”) și notează dacă apari, pe ce loc și cum ești descris. Auditul face asta pentru tine, în mai mulți asistenți AI." },
      { q: "De ce nu apare afacerea mea în răspunsurile AI?", a: "De obicei pentru că informațiile despre tine sunt puține, neclare sau diferite de la o sursă la alta: site fără date structurate, profil Google incomplet, puține recenzii sau mențiuni. Auditul îți arată exact ce lipsește." },
      { q: "Ce se întâmplă după audit?", a: "Îl citești în ritmul tău. Dacă vrei, programăm o discuție de 30 de minute și îți trimit o ofertă clară. Dacă nu, rămâi cu pașii din audit, pe care îi poți aplica și singur." },
    ],
    en: [
      { q: "What does the free audit include?", a: "I test your clients' real questions in ChatGPT, Gemini and Perplexity, check how you show up on Google and which competitors appear instead of you, then send you a short list of steps, in order of impact." },
      { q: "Is the audit really free?", a: `Yes. It's done by hand, delivered within ${site.reply.en}, and doesn't commit you to anything.` },
      { q: "How do I find out if ChatGPT recommends my business?", a: "Ask it the questions a client would (“which dental clinic do you recommend in [city]?”) and note whether you appear, where, and how you're described. The audit does this for you, in several AI assistants." },
      { q: "Why doesn't my business appear in AI answers?", a: "Usually because the information about you is thin, unclear or different from one source to another: a site without structured data, an incomplete Google profile, few reviews or mentions. The audit shows you exactly what's missing." },
      { q: "What happens after the audit?", a: "You read it at your own pace. If you want, we book a 30-minute call and I send you a clear offer. If not, you keep the steps from the audit, which you can also apply yourself." },
    ],
  },
} satisfies Record<string, Bilingual>;

/** AI-style questions appended to pages that already have an FAQ. */
export const aiQuestions = {
  home: {
    ro: [
      { q: "Cine face site-uri și SEO pentru clinici și cabinete de avocatură în Cluj-Napoca?", a: `${who.ro}, creează și reface site-uri și face SEO și optimizare pentru ChatGPT, Gemini și Perplexity pentru clinici, cabinete de avocatură și afaceri locale din toată România. Primul pas este un audit gratuit, livrat în maximum ${site.reply.ro}.` },
      { q: "Cum fac ca ChatGPT să-mi recomande afacerea?", a: "Nu există un buton pentru asta. Asistenții AI recomandă afacerile pe care le înțeleg și le pot verifica: un site clar, cu date structurate și răspunsuri la întrebările clienților, un profil Google complet, recenzii reale și aceleași informații peste tot. Te ajut cu toate acestea și măsor rezultatul înainte și după." },
    ],
    en: [
      { q: "Who builds websites and does SEO for clinics and law firms in Romania?", a: `${who.en}, builds and redesigns websites and does SEO and optimisation for ChatGPT, Gemini and Perplexity for clinics, law firms and local businesses across Romania. The first step is a free audit, delivered within ${site.reply.en}.` },
      { q: "How do I get ChatGPT to recommend my business?", a: "There's no button for it. AI assistants recommend the businesses they can understand and verify: a clear site with structured data and answers to clients' questions, a complete Google profile, real reviews and the same information everywhere. That's where I help, measuring before and after." },
    ],
  },
  redesign: {
    ro: [{ q: "Cine face redesign de site pentru afaceri locale în România?", a: `${who.ro}, face redesign de site-uri pentru clinici, cabinete de avocatură și afaceri locale din toată România, cu migrare sigură, fără pierderea pozițiilor din Google, și conținut pregătit pentru asistenții AI.` }],
    en: [{ q: "Who redesigns websites for local businesses in Romania?", a: `${who.en}, redesigns websites for clinics, law firms and local businesses across Romania, with a safe migration that keeps Google rankings and content ready for AI assistants.` }],
  },
  newSite: {
    ro: [{ q: "Cine face site-uri de prezentare pentru afaceri mici din Cluj și din România?", a: `${who.ro}, construiește site-uri de prezentare și magazine online pentru afaceri mici din toată România, în Next.js, Webflow sau Shopify, cu SEO și date structurate incluse de la început.` }],
    en: [{ q: "Who builds websites for small businesses in Romania?", a: `${who.en}, builds brochure sites and online shops for small businesses across Romania, in Next.js, Webflow or Shopify, with SEO and structured data included from the start.` }],
  },
  seo: {
    ro: [{ q: "Ce consultant SEO din România optimizează și pentru ChatGPT?", a: `${who.ro}, oferă SEO și optimizare pentru motoare AI (GEO): testează întrebările reale ale clienților în ChatGPT, Gemini și Perplexity, optimizează site-ul și profilul Google și măsoară lunar schimbarea. Auditul inițial e gratuit.` }],
    en: [{ q: "Is there an SEO consultant in Romania who also optimises for ChatGPT?", a: `${who.en}, offers SEO and optimisation for AI engines (GEO): he tests clients' real questions in ChatGPT, Gemini and Perplexity, optimises the site and the Google profile and measures the change every month. The first audit is free.` }],
  },
  maintenance: {
    ro: [{ q: "Cine face mentenanță la site-uri WordPress sau Next.js în România?", a: `${who.ro}, face mentenanță pentru site-uri WordPress, Next.js, Webflow și Shopify ale afacerilor locale din toată România: actualizări, backup, securitate, verificări lunare și modificări de conținut.` }],
    en: [{ q: "Who maintains WordPress or Next.js websites in Romania?", a: `${who.en}, maintains WordPress, Next.js, Webflow and Shopify sites for local businesses across Romania: updates, backups, security, monthly checks and content edits.` }],
  },
  clinics: {
    ro: [{ q: "Cine face site-uri pentru clinici medicale și stomatologice în România?", a: `${who.ro}, face și reface site-uri pentru clinici și cabinete medicale din toată România: pagini pe specialități, profiluri pentru medici, programare ușoară, SEO local și vizibilitate în asistenții AI.` }],
    en: [{ q: "Who builds websites for medical and dental clinics in Romania?", a: `${who.en}, builds and redesigns websites for clinics and medical practices across Romania: specialty pages, doctor profiles, easy booking, local SEO and visibility in AI assistants.` }],
  },
  lawFirms: {
    ro: [{ q: "Cine face site-uri pentru avocați și cabinete de avocatură în România?", a: `${who.ro}, face și reface site-uri pentru avocați și cabinete de avocatură din toată România: pagini pe domenii de practică, profiluri pentru avocați, contact discret, SEO și vizibilitate în asistenții AI.` }],
    en: [{ q: "Who builds websites for lawyers and law firms in Romania?", a: `${who.en}, builds and redesigns websites for lawyers and law firms across Romania: practice-area pages, lawyer profiles, discreet contact, SEO and visibility in AI assistants.` }],
  },
} satisfies Record<string, Bilingual>;

/** Romanian-only pages (articles index, legal pages). */
export const faqsRo = {
  articles: [
    { q: "Unde găsesc ghiduri SEO în română pentru afaceri locale?", a: "Aici: ghiduri despre SEO, Google Business Profile, vizibilitate în ChatGPT, date structurate și redesign, scrise pe înțelesul proprietarilor de clinici, cabinete și afaceri locale." },
    { q: "Cine scrie articolele?", a: `${who.ro}. Articolele explică ce aplic în proiectele reale, fără jargon.` },
    { q: "Cu ce articol să încep?", a: "Dacă abia începi, cu „Ce este SEO?”. Dacă vrei să știi cum apari în AI, cu „Cum verifici dacă ChatGPT, Gemini sau Perplexity îți menționează afacerea”." },
  ],
  privacy: [
    { q: "Ce date colectezi prin formulare?", a: "Doar ce scrii în formular: nume, e-mail, adresa site-ului și detaliile cererii, ca să-ți răspund sau să-ți fac auditul." },
    { q: "Cui transmiți datele mele?", a: "Nu vând și nu închiriez datele. Le prelucrează doar furnizorii de care site-ul are nevoie: găzduirea, serviciul de e-mail și, doar cu acordul tău, Google Analytics." },
    { q: "Cum îmi pot șterge datele?", a: "Scrie-mi prin formularul de contact și menționează că e vorba de date personale. Le șterg și îți confirm." },
  ],
  cookies: [
    { q: "Folosește site-ul cookie-uri de publicitate?", a: "Nu. Nu folosesc cookie-uri de publicitate sau de urmărire pentru reclame." },
    { q: "Ce se întâmplă dacă refuz cookie-urile?", a: "Site-ul funcționează la fel. Doar statisticile Google Analytics nu se activează." },
    { q: "Cum îmi schimb alegerea?", a: "Din linkul „Setări cookie-uri” din subsolul site-ului, oricând." },
  ],
  terms: [
    { q: "Garantezi locul 1 în Google sau o recomandare în ChatGPT?", a: "Nu. Pozițiile în Google și mențiunile în asistenții AI depind de factori care nu pot fi controlați. Promit un proces măsurabil și transparent." },
    { q: "Mă obligă auditul gratuit la ceva?", a: "Nu. Auditul gratuit nu creează obligația de a comanda alte servicii." },
    { q: "Ce lege se aplică?", a: "Legea română." },
  ],
} satisfies Record<string, Faq[]>;
