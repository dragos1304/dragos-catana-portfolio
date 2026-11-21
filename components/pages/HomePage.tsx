import Link from "next/link";
import { pageMeta } from "@/lib/meta";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import { ArrowUpRight, Scale, Stethoscope, Store } from "lucide-react";
import { Accent, Button, Container, Eyebrow, FAQ, H2, Mark, Section, CtaBand } from "@/components/ui";
import { AnswerCard } from "@/components/AnswerCard";
import { Shot } from "@/components/Shot";
import type { ImageName } from "@/lib/images";
import { Journey, JourneyEnds } from "@/components/Journey";
import { brand, proof, site } from "@/lib/site-config";
import { href, services, type Lang } from "@/lib/site-map";
import { aiQuestions } from "@/lib/faqs";

/** The home page, once, in either language. Route files only pick the language. */

const linkCls = "font-semibold underline decoration-orange decoration-2 underline-offset-4 hover:decoration-ink";

type Copy = {
  title: string;
  description: string;
  label: string;
  h1: ReactNode;
  lead: (l: Lang) => ReactNode;
  heroPrimary: string;
  heroSecondary: string;
  badgeTop: string;
  badgeBottom: string;
  facts: [string, string, string][];
  momentEyebrow: string;
  momentH2: ReactNode;
  moment1: string;
  moment2: string;
  journeyEyebrow: string;
  journeyH2: ReactNode;
  journeyLead: string;
  journeyCta: string;
  servicesEyebrow: string;
  servicesH2: ReactNode;
  flagship: string;
  learnMore: string;
  workEyebrow: string;
  workH2: ReactNode;
  workLead: string;
  statPerformance: string;
  statSitemap: string;
  workCaseCta: string;
  workAllCta: string;
  shotDesktopAlt: string;
  shotPhoneAlt: string;
  workCards: { shot: ImageName; alt: string; tag: string; accent: boolean; text: string }[];
  whoEyebrow: string;
  whoH2: ReactNode;
  audiences: { icon: "clinic" | "law" | "local"; t: string; d: string; page: "clinics" | "lawFirms" | "seo" }[];
  seeHow: string;
  promisesEyebrow: string;
  promisesH2: ReactNode;
  promises: { t: string; d: string }[];
  promiseLabel: string;
  promiseItems: string[];
  noPromiseLabel: string;
  noPromise: string;
  letterEyebrow: string;
  letterH2: ReactNode;
  letter: string[];
  storyCta: string;
  faq: { q: string; a: string }[];
};

const cheesyPerf = proof.cheesy.lighthouse[0];
const pages = proof.cheesy.sitemapPages;

const copy: Record<Lang, Copy> = {
  ro: {
    title: "Web designer freelancer din Cluj: site-uri și SEO | Dragoș Catană",
    description: `Web designer freelancer din Cluj-Napoca: creare site și optimizare SEO pentru clinici, avocați și afaceri locale. Audit SEO gratuit în ${site.reply.ro}.`,
    label: "Web designer · Cluj-Napoca",
    h1: <>Clienții te caută.<br />Fă-i să te <span className="whitespace-nowrap"><Mark draw>găsească</Mark>.</span></>,
    lead: (l) => (
      <>
        Sunt Dragoș Catană. <Link href={href("newSite", l)} className={linkCls}>Creez site-uri</Link> și fac{" "}
        <Link href={href("seo", l)} className={linkCls}>optimizare SEO</Link> pentru clinici, cabinete de avocatură și afaceri locale, ca afacerea ta să apară în Google și în răspunsurile ChatGPT.
        {" "}Mă ocup personal de fiecare proiect: înțeleg ce caută clienții tăi și am grijă de toate detaliile.
      </>
    ),
    heroPrimary: "Cere auditul gratuit",
    heroSecondary: "Vezi cum lucrez",
    badgeTop: "Răspund personal",
    badgeBottom: `în ${site.reply.ro}`,
    facts: [
      ["Pregătit pentru AI", "rapid pentru oameni, clar pentru ChatGPT, ușor de găsit în Google", "col-span-2"],
      ["Încredere", "un design care îi convinge pe pacienți și clienți înainte să te sune", ""],
      ["Clar", "vizitatorul înțelege în 5 secunde ce faci și cum te contactează", ""],
    ],
    momentEyebrow: "Momentul în care îți dai seama",
    momentH2: <>Un pacient îți spune că a întrebat ChatGPT. Și i-a recomandat <span className="whitespace-nowrap"><Mark kind="underline">pe altcineva</Mark>.</span></>,
    moment1: "Clienții tăi nu mai caută doar în Google. Întreabă un asistent AI și primesc câteva nume, direct în conversație. Asistentul alege afacerile pe care le înțelege și le poate verifica.",
    moment2: "Multe site-uri locale nu sunt încă pregătite pentru asta. Aici este avantajul tău, dacă acționezi primul.",
    journeyEyebrow: "Drumul nostru, pas cu pas",
    journeyH2: <>De la „nu mă găsește nimeni” la <Accent>„m-a recomandat ChatGPT”.</Accent></>,
    journeyLead: "Cinci pași, fără surprize și fără intermediari. La fiecare pas știi ce faci tu și ce fac eu.",
    journeyCta: "Începe cu pasul 1",
    servicesEyebrow: "Servicii",
    servicesH2: <>Patru servicii. Un singur scop: <span className="whitespace-nowrap"><Mark kind="underline">să fii ales</Mark>.</span></>,
    flagship: "Serviciul principal",
    learnMore: "Află mai multe",
    workEyebrow: "Lucrare recentă",
    workH2: <>Cheesy Media: de la o pagină lungă la un <Accent className="text-orange">site complet.</Accent></>,
    workLead: "Am refăcut site-ul unei agenții foto-video din Cluj-Napoca: design nou, o pagină pentru fiecare serviciu și o bază tehnică pregătită pentru Google și AI.",
    statPerformance: "Performanță pe mobil",
    statSitemap: "Adrese în sitemap",
    workCaseCta: "Vezi studiul de caz",
    workAllCta: "Toate lucrările",
    shotDesktopAlt: "Pagina principală a noului site Cheesy Media pe desktop",
    shotPhoneAlt: "Același site Cheesy Media pe telefon",
    workCards: [
      { shot: "before-home", alt: "Vechiul site Cheesy Media: o singură pagină violetă", tag: "Înainte", accent: false, text: "O singură pagină violetă, fără date structurate, cu limba setată greșit pe engleză." },
      { shot: "after-servicii", alt: "Pagina Servicii a noului site Cheesy Media", tag: "Design", accent: true, text: "Titluri mari, în negru, crem și galben. Mascota a rămas, iar butonul „Cere ofertă” este mereu vizibil." },
      { shot: "after-proces", alt: "Pagina Proces a noului site Cheesy Media", tag: "Google și AI", accent: true, text: "Limba română setată corect, date structurate pe fiecare pagină, întrebări frecvente, sitemap și acces pentru roboții AI." },
    ],
    whoEyebrow: "Pentru cine lucrez",
    whoH2: <>Antreprenori și cabinete locale, unde <Accent>încrederea decide.</Accent></>,
    audiences: [
      { icon: "clinic", t: "Clinici și cabinete medicale", d: "Pacienții compară înainte să sune. Site-ul trebuie să inspire calm, să arate echipa și să facă programarea ușoară.", page: "clinics" },
      { icon: "law", t: "Cabinete de avocatură", d: "Clienții caută un specialist pentru o problemă concretă. Pagini clare pe domenii de practică și un profil Google complet fac diferența.", page: "lawFirms" },
      { icon: "local", t: "Afaceri locale de servicii", d: "Dacă oamenii te caută „în zona mea”, SEO-ul local și vizibilitatea în AI îți aduc clienți direct.", page: "seo" },
    ],
    seeHow: "Vezi cum lucrez",
    promisesEyebrow: "Cum lucrez cu tine",
    promisesH2: <>Ce promit. Și ce <Accent>nu promit.</Accent></>,
    promises: [
      { t: "Aproape", d: "Vorbești mereu cu omul care face munca. Fără vânzători, fără intermediari." },
      { t: "Expert, pe limba ta", d: "Știu ce cer Google și asistenții AI și îți explic simplu, fără jargon. Tu decizi în cunoștință de cauză." },
      { t: "Sincer", d: "Îți spun ce merge, ce lipsește și ce nu se poate garanta. Fără cifre umflate și fără recenzii inventate." },
      { t: "Grijuliu", d: "Nu fac nimic ireversibil fără acordul tău. La redesign păstrez ce funcționa în Google, iar după lansare rămân alături de tine." },
    ],
    promiseLabel: "Promit",
    promiseItems: [
      `Răspund la orice mesaj în maximum ${site.reply.ro}.`,
      "Vezi fiecare etapă și nimic nu merge mai departe fără aprobarea ta.",
      "Îți arăt rezultatele „înainte și după”, pentru aceleași întrebări puse în Google și în ChatGPT.",
    ],
    noPromiseLabel: "Nu promit",
    noPromise: "Locul 1 în Google sau o recomandare garantată în ChatGPT. Nimeni nu poate garanta asta, iar cine o face nu spune adevărul. Promit un proces măsurabil și transparent.",
    letterEyebrow: "O scrisoare de la mine",
    letterH2: <>De ce <Mark kind="underline">fac asta.</Mark></>,
    letter: [
      "Am pus pe picioare primele afaceri la 16 ani: magazine online, apoi campanii de marketing pentru alții. Am învățat repede un lucru incomod: un produs bun nu ajunge nicăieri dacă oamenii nu îl găsesc și nu au încredere în el.",
      "Studiez economie la Universitatea Babeș-Bolyai din Cluj, cu schimburi la Paris și în statul New York. Mă gândesc la costuri, riscuri și rezultate, așa că judec un site după ce îi aduce afacerii tale, nu după cât de spectaculos arată.",
      "Lucrez direct cu fiecare client. Omul cu care vorbești la prima discuție este cel care îți face auditul, îți construiește site-ul și îți răspunde la mesaje, așa că nimic din ce mi-ai spus nu se pierde pe drum.",
    ],
    storyCta: "Citește povestea completă",
    faq: [
      { q: "Ce înseamnă să fii „recomandat de AI”?", a: "Mulți clienți întreabă acum ChatGPT, Gemini sau Perplexity „ce avocat bun sau ce clinică bună îmi recomanzi în orașul meu?”. Asistentul alege dintre sursele pe care le înțelege și în care are încredere. Optimizarea pentru AI (GEO) înseamnă să-ți faci site-ul și prezența online clare, consecvente și ușor de citat." },
      { q: "Poți garanta locul 1 în Google sau în ChatGPT?", a: "Nu, și nimeni nu poate. Rezultatele variază, iar modelele se actualizează în ritmul lor. Promit un proces măsurabil: testez întrebările reale ale clienților tăi înainte și după, iar tu vezi exact ce s-a schimbat." },
      { q: "Cât costă un site sau optimizarea SEO?", a: "Depinde de proiect, așa că nu afișez prețuri fixe. Auditul inițial este gratuit. Pentru un site nou, un redesign sau o colaborare lunară de SEO, îți trimit o ofertă clară după o discuție scurtă." },
      { q: "Lucrezi doar în Cluj-Napoca?", a: "Locuiesc în Cluj-Napoca, dar lucrez online cu antreprenori din toată România. Pot livra site-ul și în engleză, franceză sau germană, ca opțiune suplimentară." },
      { q: "Cu cine vorbesc, de fapt?", a: `Cu mine, Dragoș. Nu sunt o agenție: eu fac auditul, eu construiesc site-ul și tot eu îți răspund la mesaje, în maximum ${site.reply.ro}.` },
    ],
  },
  en: {
    title: "Web designer in Romania: websites & SEO | Dragoș Catană",
    description: `Web designer in Cluj-Napoca, Romania: websites, redesign and SEO for clinics, law firms and local businesses, so ChatGPT and Google can find you. Free audit in ${site.reply.hours}h.`,
    label: "Web designer · Cluj-Napoca",
    h1: <>Clients are searching.<br />Make sure they <span className="whitespace-nowrap"><Mark draw>find you</Mark>.</span></>,
    lead: (l) => (
      <>
        I&apos;m Dragoș Catană. I build <Link href={href("newSite", l)} className={linkCls}>websites</Link> and do{" "}
        <Link href={href("seo", l)} className={linkCls}>SEO</Link> for clinics, law firms and local businesses in Romania, so you show up on Google and in ChatGPT&apos;s answers.
        {" "}I look after every project personally: I learn what your clients are looking for and take care of every detail.
      </>
    ),
    heroPrimary: "Get the free audit",
    heroSecondary: "See how we work",
    badgeTop: "I reply personally",
    badgeBottom: `within ${site.reply.en}`,
    facts: [
      ["AI-ready & instant", "fast for people, clear for ChatGPT, easy to find on Google", "col-span-2"],
      ["Trust", "a design that convinces patients and clients before they call", ""],
      ["Clear", "visitors understand in 5 seconds what you do and how to reach you", ""],
    ],
    momentEyebrow: "The moment you notice",
    momentH2: <>A patient tells you they asked ChatGPT. And it recommended <span className="whitespace-nowrap"><Mark kind="underline">someone else</Mark>.</span></>,
    moment1: "Your clients don't only search on Google anymore. They ask an AI assistant and get a single name, right in the conversation. The assistant picks the businesses it can understand and verify.",
    moment2: "Most local websites aren't ready for this yet. That's your advantage, if you move first.",
    journeyEyebrow: "Our path, step by step",
    journeyH2: <>From &ldquo;nobody finds me&rdquo; to <Accent>&ldquo;ChatGPT recommended me&rdquo;.</Accent></>,
    journeyLead: "Five steps, no surprises and no middlemen. At every step you know what you do and what I do.",
    journeyCta: "Start with step 1",
    servicesEyebrow: "Services",
    servicesH2: <>Four services. One goal: <span className="whitespace-nowrap"><Mark kind="underline">being chosen</Mark>.</span></>,
    flagship: "Main service",
    learnMore: "Learn more",
    workEyebrow: "Recent work",
    workH2: <>Cheesy Media: from one long page to a <Accent className="text-orange">complete website.</Accent></>,
    workLead: "I rebuilt the website of a photo and video agency in Cluj-Napoca: a new design, a page for every service and a technical base for Google and AI.",
    statPerformance: "Mobile performance",
    statSitemap: "Pages in the sitemap",
    workCaseCta: "Read the case study",
    workAllCta: "All work",
    shotDesktopAlt: "The new Cheesy Media home page on desktop",
    shotPhoneAlt: "The same Cheesy Media site on a phone",
    workCards: [
      { shot: "before-home", alt: "The old Cheesy Media site: a single purple page", tag: "Before", accent: false, text: "One purple page, no structured data, marked as English though written in Romanian." },
      { shot: "after-servicii", alt: "The Services page of the new Cheesy Media site", tag: "Design", accent: true, text: "Big headlines in black, cream and yellow. The mascot kept, “Get a quote” always in view." },
      { shot: "after-proces", alt: "The Process page of the new Cheesy Media site", tag: "Google and AI", accent: true, text: "Correct language, structured data on every page, FAQ, sitemap and access for AI crawlers." },
    ],
    whoEyebrow: "Who I work with",
    whoH2: <>Local businesses and practices where <Accent>trust decides.</Accent></>,
    audiences: [
      { icon: "clinic", t: "Clinics and medical practices", d: "Patients compare before they call. The site has to feel calm, show the team and make booking easy.", page: "clinics" },
      { icon: "law", t: "Law firms", d: "Clients look for a specialist for one specific problem. Clear practice-area pages and a complete Google profile make the difference.", page: "lawFirms" },
      { icon: "local", t: "Local service businesses", d: "If people search for you “near me”, local SEO and AI visibility bring clients straight to you.", page: "seo" },
    ],
    seeHow: "See how I work",
    promisesEyebrow: "How I work with you",
    promisesH2: <>What I promise. And what I <Accent>don&apos;t.</Accent></>,
    promises: [
      { t: "Close", d: "You always talk to the person doing the work. No salespeople, no middlemen." },
      { t: "Expert, in plain words", d: "I know what Google and AI assistants look for, and I explain it simply. You decide knowing what you're deciding." },
      { t: "Honest", d: "I tell you what works, what's missing and what nobody can guarantee. No inflated numbers, no invented reviews." },
      { t: "Careful", d: "Nothing irreversible happens without your yes. In a redesign I keep what already works on Google, and I stay around after launch." },
    ],
    promiseLabel: "I promise",
    promiseItems: [
      `I reply to every message within ${site.reply.en}.`,
      "You see every stage, and nothing moves on without your approval.",
      "I show you the results “before and after” on the same Google and ChatGPT questions.",
    ],
    noPromiseLabel: "I don't promise",
    noPromise: "First place on Google or a guaranteed recommendation in ChatGPT. Nobody can guarantee that, and anyone who does isn't telling the truth. I promise a measurable, transparent process.",
    letterEyebrow: "A letter from me",
    letterH2: <>Why I <Mark kind="underline">do this.</Mark></>,
    letter: [
      "I started building businesses at 16: online shops, then marketing for others. I learned one uncomfortable thing early: a good product goes nowhere if people can't find it and don't trust it.",
      "I study Economics at Babeș-Bolyai University in Cluj, with exchanges in Paris and New York State. I think in costs, risk and results, so I judge a website by what it brings your business, not by how flashy it looks.",
      "I work directly with every client. The person you speak to on the first call is the one who does your audit, builds your site and answers your messages, so nothing you tell me gets lost along the way.",
    ],
    storyCta: "Read the full story",
    faq: [
      { q: "What does it mean to be “recommended by AI”?", a: "Many clients now ask ChatGPT, Gemini or Perplexity “who is a good lawyer or clinic in my city?”. The assistant picks from sources it understands and trusts. Optimising for AI (GEO) means your website and your presence online are clear, consistent and easy to quote." },
      { q: "Can you guarantee first place on Google or in ChatGPT?", a: "No, and nobody can. Results vary and the models update on their own schedule. What I promise is a measurable process: I test your clients' real questions before and after, and you see exactly what changed." },
      { q: "How much does a website or SEO cost?", a: "It depends on the project, so I don't publish fixed prices. The first audit is free. For a new website, a redesign or monthly SEO, you get a clear offer after a short call." },
      { q: "Do you work in English?", a: "Yes. I build sites in Romanian and English, and French or German as an add-on. Each language gets its own content and SEO, not just a machine translation. I work online with businesses across Romania." },
      { q: "Who will I actually talk to?", a: `Me, Dragoș. I'm not an agency: I do the audit, I build the website and I'm the one who replies to your messages, within ${site.reply.en}.` },
    ],
  },
};

const icons = { clinic: Stethoscope, law: Scale, local: Store };
/* Service tiles: one colour each, like project cards (direction A). */
const tileStyle = ["bg-ink text-paper", "bg-teal text-ink", "bg-orange text-ink"] as const;

export function homeMetadata(lang: Lang): Metadata {
  const c = copy[lang];
  return pageMeta("home", lang, { title: { absolute: c.title }, description: c.description });
}

export function HomePage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  return (
    <>
      {/* 1. Hero: one big statement, one drawn mark, the person behind it. */}
      <section id={lang === "ro" ? "acasa" : "home"} aria-labelledby="home-title" className="relative overflow-hidden bg-paper">
        <Container className="grid gap-12 pb-14 pt-12 sm:pb-20 sm:pt-20 lg:grid-cols-[1.7fr_1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.12em] text-muted">{c.label}</p>
            <h1 id="home-title" className="font-serif text-[2.9rem] font-extrabold leading-[0.95] text-ink sm:text-7xl lg:text-[5rem]">{c.h1}</h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink sm:text-xl">{c.lead(lang)}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href={href("audit", lang)} arrow>{c.heroPrimary}</Button>
              <Button href="#drumul" variant="ghost">{c.heroSecondary}</Button>
            </div>
          </div>

          {/* Portrait slot: the logo mark (DC in the drawn ring) on ink, as on the social preview, until a real photo exists. */}
          <div className="relative mx-auto aspect-square w-full max-w-[420px]">
            <div aria-hidden className="absolute inset-[6%] grid place-items-center rounded-full bg-ink">
              {/* eslint-disable-next-line @next/next/no-img-element -- static export, SVG logo */}
              <img src={brand.markWhite} alt="" width={1024} height={1024} className="w-[80%]" />
            </div>
            <div aria-hidden className="absolute right-[2%] top-[4%] h-[20%] w-[20%] rounded-full bg-teal" />
            <div className="absolute bottom-[4%] left-0 rotate-[-4deg] rounded-2xl border-2 border-ink bg-canvas px-4 py-3 shadow-[5px_5px_0_0_var(--color-ink)]">
              <p className="text-sm font-semibold text-ink">{c.badgeTop}</p>
              <p className="font-serif text-2xl font-extrabold text-ink">{c.badgeBottom}</p>
            </div>
          </div>
        </Container>

        {/* Fact strip */}
        <Container>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border-2 border-ink bg-ink md:grid-cols-4">
            {c.facts.map(([a, b, span]) => (
              <div key={a} className={`bg-paper px-5 py-5 ${span}`}>
                <dt className="font-serif text-2xl font-extrabold text-ink sm:text-3xl">{a}</dt>
                <dd className="mt-1 text-[15px] text-muted">{b}</dd>
              </div>
            ))}
          </dl>
        </Container>
        <div className="h-14 sm:h-20" />
      </section>

      {/* 2. The trigger moment */}
      <Section id="momentul" white>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Eyebrow>{c.momentEyebrow}</Eyebrow>
            <H2>{c.momentH2}</H2>
            <p className="mt-6 text-lg leading-relaxed text-ink">{c.moment1}</p>
            <p className="mt-4 text-lg leading-relaxed text-muted">{c.moment2}</p>
          </div>
          <AnswerCard lang={lang} />
        </div>
      </Section>

      {/* 3. The journey in five steps */}
      <Section id="drumul">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Eyebrow>{c.journeyEyebrow}</Eyebrow>
            <H2>{c.journeyH2}</H2>
            <p className="mt-5 text-lg leading-relaxed text-muted">{c.journeyLead}</p>
            <JourneyEnds lang={lang} />
            <div className="mt-8"><Button href={href("audit", lang)} arrow>{c.journeyCta}</Button></div>
          </div>
          <Journey lang={lang} />
        </div>
      </Section>

      {/* 4. Services as colour tiles */}
      <Section id="servicii" white>
        <Eyebrow>{c.servicesEyebrow}</Eyebrow>
        <H2>{c.servicesH2}</H2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services(lang).map((s, i) => (
            <Link key={s.key} href={s.href}
              className={`group relative flex min-h-[340px] flex-col rounded-3xl p-7 transition-transform duration-200 hover:-translate-y-1 ${tileStyle[i % 3]}`}>
              {s.flagship && <span className="mb-4 w-fit rounded-full bg-ink px-3 py-1 text-xs font-semibold uppercase tracking-wider text-paper">{c.flagship}</span>}
              <h3 className="font-serif text-3xl font-extrabold leading-[1.05]">{s.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed">{s.short}</p>
              <ul className="mt-5 space-y-1.5 text-[15px] font-medium">
                {s.points.map((p) => (<li key={p}>→ {p}</li>))}
              </ul>
              <span className="mt-auto inline-flex items-center gap-1 pt-6 font-semibold">
                {c.learnMore} <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* 5. Proof: real project with real screenshots, on a dark band */}
      <Section id="lucrari" dark>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-center">
          <div>
            <Eyebrow dark>{c.workEyebrow}</Eyebrow>
            <H2 dark>{c.workH2}</H2>
            <p className="mt-5 text-lg leading-relaxed text-paper/85">{c.workLead}</p>
            <dl className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-paper/10 p-5"><dt className="text-[15px] text-paper/75">{c.statPerformance}</dt><dd className="font-serif text-4xl font-extrabold text-paper">{cheesyPerf.before} <span className="text-orange">→ {cheesyPerf.after}</span></dd></div>
              <div className="rounded-2xl bg-paper/10 p-5"><dt className="text-[15px] text-paper/75">{c.statSitemap}</dt><dd className="font-serif text-4xl font-extrabold text-paper">{pages.before} <span className="text-orange">→ {pages.after}</span></dd></div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3"><Button href={href("cheesy", lang)} variant="light" arrow>{c.workCaseCta}</Button><Button href={href("work", lang)} variant="ghost-dark">{c.workAllCta}</Button></div>
          </div>
          <div className="relative pb-6 pr-4 sm:pr-8">
            <Shot name="site-desktop" alt={c.shotDesktopAlt} sizes="(min-width: 1024px) 620px, 92vw" />
            <Shot name="site-mobile" phone alt={c.shotPhoneAlt} sizes="170px" className="absolute bottom-0 right-0 w-[28%] max-w-[170px]" />
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {c.workCards.map((w) => (
            <figure key={w.shot} className="rounded-3xl bg-paper/5 p-4">
              <Shot name={w.shot} alt={w.alt} sizes="(min-width: 768px) 340px, 92vw" />
              <figcaption className="mt-4 px-1"><span className={`text-xs font-bold uppercase tracking-wider ${w.accent ? "text-orange" : "text-paper/60"}`}>{w.tag}</span><p className="mt-1 text-[16px] text-paper/85">{w.text}</p></figcaption>
            </figure>
          ))}
        </div>
      </Section>

      {/* 6. For whom */}
      <Section id="pentru-cine">
        <Eyebrow>{c.whoEyebrow}</Eyebrow>
        <H2>{c.whoH2}</H2>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {c.audiences.map(({ icon, t, d, page }) => {
            const Icon = icons[icon];
            return (
              <Link key={t} href={href(page, lang)} className="group rounded-3xl border-2 border-ink bg-canvas p-6 transition-shadow duration-200 hover:shadow-[6px_6px_0_0_var(--color-ink)]">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-orange"><Icon aria-hidden className="h-6 w-6 text-ink" /></span>
                <h3 className="mt-5 font-serif text-2xl font-extrabold text-ink">{t}</h3>
                <p className="mt-2 text-[17px] leading-relaxed text-muted">{d}</p>
                <span className="mt-4 inline-block font-semibold text-ink underline decoration-orange decoration-2 underline-offset-4">{c.seeHow}</span>
              </Link>
            );
          })}
        </div>
      </Section>

      {/* 7. How I work with you: the four perceptions from BRAND.md and the promises from PROPOSAL.md */}
      <Section id="promisiuni" white>
        <Eyebrow>{c.promisesEyebrow}</Eyebrow>
        <H2>{c.promisesH2}</H2>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {c.promises.map((p) => (
            <div key={p.t} className="rounded-3xl border-2 border-ink bg-paper p-6">
              <h3 className="font-serif text-2xl font-extrabold text-ink">{p.t}</h3>
              <p className="mt-2 text-[17px] leading-relaxed text-ink">{p.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-5 grid gap-5 lg:grid-cols-2">
          <div className="rounded-3xl bg-ink p-7 text-paper">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange">{c.promiseLabel}</p>
            <ul className="mt-4 space-y-3 text-[17px] leading-relaxed">
              {c.promiseItems.map((p) => <li key={p}>→ {p}</li>)}
            </ul>
          </div>
          <div className="rounded-3xl border-2 border-ink bg-canvas p-7">
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-orange-ink">{c.noPromiseLabel}</p>
            <p className="mt-4 text-[17px] leading-relaxed text-ink">{c.noPromise}</p>
          </div>
        </div>
      </Section>

      {/* 8. A personal letter */}
      <Section id="despre" white>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <Eyebrow>{c.letterEyebrow}</Eyebrow>
            <H2>{c.letterH2}</H2>
          </div>
          <div>
            <div className="space-y-5 text-xl leading-relaxed text-ink">
              {c.letter.map((p) => <p key={p.slice(0, 24)}>{p}</p>)}
              <p className="font-accent text-3xl italic">— Dragoș</p>
            </div>
            <div className="mt-8"><Button href={href("about", lang)} variant="ghost">{c.storyCta}</Button></div>
          </div>
        </div>
      </Section>

      <Section id="intrebari"><FAQ items={[...c.faq, ...aiQuestions.home[lang]]} lang={lang} /></Section>
      <CtaBand id="contact" lang={lang} />
    </>
  );
}
