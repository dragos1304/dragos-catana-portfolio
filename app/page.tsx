import Link from "next/link";
import type { Metadata } from "next";
import { ArrowUpRight, Scale, Stethoscope, Store } from "lucide-react";
import { Accent, Button, Container, Eyebrow, FAQ, H2, Mark, Section, CtaBand } from "@/components/ui";
import { AnswerCard } from "@/components/AnswerCard";
import { Shot } from "@/components/Shot";
import { Journey, JourneyEnds } from "@/components/Journey";
import { services, site } from "@/lib/site-config";

export const metadata: Metadata = {
  title: { absolute: "Web designer freelancer din Cluj: site-uri și SEO | Dragoș Cătană" },
  description:
    "Web designer freelancer din Cluj-Napoca: creare site și optimizare SEO pentru clinici, avocați și afaceri locale. Audit SEO gratuit în 24 de ore.",
  alternates: { canonical: "/" },
};

/** The fact strip under the hero: each fact is a real, checkable claim with an internal link. */
const facts = [
  {
    label: "Cine lucrează",
    value: "1 om",
    text: "Eu, Dragoș Cătană, web designer din Cluj-Napoca. Fac auditul, designul, codul și SEO-ul. Vorbești direct cu mine, fără intermediari.",
    links: [["Cine sunt", "/despre"]],
  },
  {
    label: "Audit gratuit",
    value: "24 h",
    text: "Verific manual site-ul, Google și ce răspund ChatGPT, Gemini și Perplexity când clienții întreabă de afacerea ta.",
    links: [["Cere auditul", "/audit-gratuit-vizibilitate-ai"]],
  },
  {
    label: "Pentru cine",
    value: "Local",
    text: "Clinici, cabinete de avocatură și afaceri locale din Cluj-Napoca și din toată România, unde încrederea decide.",
    links: [["Clinici", "/servicii/website-clinici-medicale"], ["Avocatură", "/servicii/website-cabinete-avocatura"]],
  },
  {
    label: "Rezultat măsurat",
    value: "82 → 100",
    text: "Performanța pe mobil după redesign-ul Cheesy Media, plus un site pregătit pentru Google și asistenții AI.",
    links: [["Studiul de caz", "/lucrari/cheesy-media"]],
  },
] as const;

const faq = [
  {
    q: "Ce înseamnă să fii „recomandat de AI”?",
    a: "Mulți clienți întreabă acum ChatGPT, Gemini sau Perplexity „cine e un bun avocat sau o bună clinică în orașul meu?”. Asistentul alege dintre sursele pe care le înțelege și în care are încredere. Optimizarea pentru AI (GEO) înseamnă că site-ul și prezența ta online sunt clare, consecvente și ușor de citat.",
  },
  {
    q: "Poți garanta locul 1 în Google sau în ChatGPT?",
    a: "Nu, și nimeni nu poate. Rezultatele variază, iar modelele se actualizează în ritmul lor. Promit un proces măsurabil: testez întrebările reale ale clienților tăi înainte și după, iar tu vezi exact ce s-a schimbat.",
  },
  {
    q: "Cât costă un site sau optimizarea SEO?",
    a: "Depinde de proiect, așa că nu afișez prețuri fixe. Auditul inițial e gratuit. Pentru creare site, redesign sau o colaborare lunară de SEO, îți trimit o ofertă clară după o discuție scurtă.",
  },
  {
    q: "Lucrezi doar în Cluj-Napoca?",
    a: "Locuiesc în Cluj-Napoca, dar lucrez online cu antreprenori din toată România. Serviciile pot fi oferite și în engleză, franceză sau germană, ca opțiune suplimentară.",
  },
  {
    q: "Cu cine vorbesc, de fapt?",
    a: "Cu mine, Dragoș. Nu sunt o agenție: eu fac auditul, eu construiesc site-ul și tot eu îți răspund la mesaje, în maximum 24 de ore.",
  },
];

/* Service tiles: one colour each, like project cards (direction A). */
const tileStyle = ["bg-ink text-paper", "bg-teal text-ink", "bg-orange text-ink"] as const;

const audiences = [
  { Icon: Stethoscope, t: "Clinici și cabinete medicale", d: "Pacienții compară înainte să sune. Site-ul trebuie să inspire calm, să arate echipa și să facă programarea ușoară.", href: "/servicii/website-clinici-medicale" },
  { Icon: Scale, t: "Cabinete de avocatură", d: "Clienții caută un specialist pe o problemă concretă. Pagini clare pe domenii de practică și un profil Google complet fac diferența.", href: "/servicii/website-cabinete-avocatura" },
  { Icon: Store, t: "Afaceri locale de servicii", d: "Dacă oamenii te caută „în zona mea”, SEO local și vizibilitatea în AI aduc direct clienți.", href: "/servicii/seo-vizibilitate-ai" },
];

export default function Home() {
  return (
    <>
      {/* 1. Hero: one big statement, one drawn mark, the person behind it. */}
      <section id="acasa" aria-labelledby="acasa-titlu" className="relative overflow-hidden bg-paper">
        <Container className="grid gap-12 pb-14 pt-12 sm:pb-20 sm:pt-20 lg:grid-cols-[1.7fr_1fr] lg:items-center">
          <div>
            <Eyebrow>Web designer freelancer · Cluj-Napoca</Eyebrow>
            <h1 id="acasa-titlu" className="font-serif text-[2.9rem] font-extrabold leading-[0.95] text-ink sm:text-7xl lg:text-[5rem]">
              Clienții te caută.<br />
              Fă-i să te <span className="whitespace-nowrap"><Mark draw>găsească</Mark>.</span>
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink sm:text-xl">
              Sunt Dragoș Cătană. Fac{" "}
              <Link href="/servicii/creare-website" className="font-semibold underline decoration-orange decoration-2 underline-offset-4 hover:decoration-ink">creare de site-uri</Link> și{" "}
              <Link href="/servicii/seo-vizibilitate-ai" className="font-semibold underline decoration-orange decoration-2 underline-offset-4 hover:decoration-ink">optimizare SEO</Link>{" "}
              pentru clinici, cabinete de avocatură și afaceri locale, ca să apari în Google și în răspunsurile ChatGPT.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/audit-gratuit-vizibilitate-ai" arrow>Cere auditul gratuit</Button>
              <Button href="#drumul" variant="ghost">Vezi cum lucrăm</Button>
            </div>
          </div>

          {/* Portrait slot: monogram on an orange circle until a real photo exists. */}
          <div className="relative mx-auto aspect-square w-full max-w-[420px]">
            <div aria-hidden className="absolute inset-[6%] rounded-full bg-orange" />
            <div aria-hidden className="absolute right-[2%] top-[4%] h-[24%] w-[24%] rounded-full bg-teal" />
            <div aria-hidden className="absolute inset-[16%] grid place-items-center rounded-full bg-ink">
              <span className="font-serif text-[5.5rem] font-extrabold leading-none text-paper sm:text-[7rem]">DC</span>
            </div>
            <div className="absolute bottom-[4%] left-0 rotate-[-4deg] rounded-2xl border-2 border-ink bg-canvas px-4 py-3 shadow-[5px_5px_0_0_var(--color-ink)]">
              <p className="text-sm font-semibold text-ink">Răspund personal</p>
              <p className="font-serif text-2xl font-extrabold text-ink">în {site.responseTime}</p>
            </div>
          </div>
        </Container>

        {/* Fact strip */}
        <Container>
          <section aria-label="Pe scurt despre cum lucrez" className="overflow-hidden rounded-3xl border-2 border-ink bg-ink">
            <dl className="grid gap-px md:grid-cols-2 lg:grid-cols-4">
              {facts.map((f, i) => (
                <div key={f.label} className={`flex flex-col px-6 py-6 ${i === 0 ? "bg-orange" : "bg-paper"}`}>
                  <dt className="order-2 mt-1 flex items-center gap-3 font-serif text-3xl font-extrabold leading-none text-ink sm:text-4xl">
                    {i === 0 && <span aria-hidden className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-sm font-extrabold text-orange">DC</span>}
                    {f.value}
                  </dt>
                  <dd className="order-1 text-xs font-semibold uppercase tracking-[0.12em] text-ink/70">{f.label}</dd>
                  <dd className="order-3 mt-3 text-[16px] leading-relaxed text-ink">{f.text}</dd>
                  <dd className="order-4 mt-auto flex flex-wrap gap-x-4 gap-y-1 pt-4">
                    {f.links.map(([t, href]) => (
                      <Link key={href} href={href} className="inline-flex items-center gap-1 font-semibold text-ink underline decoration-2 underline-offset-4 hover:decoration-orange-ink">
                        {t} <ArrowUpRight aria-hidden className="h-4 w-4" />
                      </Link>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
            <ul className="flex flex-wrap gap-x-8 gap-y-2 border-t-2 border-ink bg-ink px-6 py-4 text-[15px] text-paper">
              <li><span className="font-semibold">Site-uri în RO · EN · FR · DE</span><span className="text-paper/70"> (română inclusă, celelalte la cerere)</span></li>
              <li><span className="font-semibold">Răspund în maximum {site.responseTime}</span></li>
              <li><a href={site.calendly} target="_blank" rel="noopener noreferrer" className="font-semibold underline decoration-orange decoration-2 underline-offset-4">Discuție 1 la 1, online</a></li>
            </ul>
          </section>
        </Container>
        <div className="h-14 sm:h-20" />
      </section>

      {/* 2. The trigger moment */}
      <Section id="momentul" white>
        <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
          <div>
            <Eyebrow>Momentul în care îți dai seama</Eyebrow>
            <H2>Un pacient îți spune că a întrebat ChatGPT. Și i-a recomandat <span className="whitespace-nowrap"><Mark kind="underline">pe altcineva</Mark>.</span></H2>
            <p className="mt-6 text-lg leading-relaxed text-ink">
              Clienții tăi nu mai caută doar în Google. Întreabă un asistent AI și primesc un singur nume, direct în conversație.
              Asistentul alege afacerile pe care le înțelege și le poate verifica.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted">
              Majoritatea site-urilor locale nu sunt pregătite pentru asta. Acolo e avantajul tău, dacă acționezi primul.
            </p>
          </div>
          <AnswerCard />
        </div>
      </Section>

      {/* 3. The journey in five steps */}
      <Section id="drumul">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Eyebrow>Drumul nostru, pas cu pas</Eyebrow>
            <H2>De la „nu mă găsește nimeni” la <Accent>„m-a recomandat ChatGPT”.</Accent></H2>
            <p className="mt-5 text-lg leading-relaxed text-muted">Cinci pași, fără surprize și fără intermediari. La fiecare pas știi ce faci tu și ce fac eu.</p>
            <JourneyEnds />
            <div className="mt-8"><Button href="/audit-gratuit-vizibilitate-ai" arrow>Începe cu pasul 1</Button></div>
          </div>
          <Journey />
        </div>
      </Section>

      {/* 4. Services as colour tiles */}
      <Section id="servicii" white>
        <Eyebrow>Servicii</Eyebrow>
        <H2>Patru servicii. Un singur scop: <span className="whitespace-nowrap"><Mark kind="underline">să fii ales</Mark>.</span></H2>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {services.map((s, i) => (
            <Link key={s.slug} href={`/servicii/${s.slug}`}
              className={`group relative flex min-h-[340px] flex-col rounded-3xl p-7 transition-transform duration-200 hover:-translate-y-1 ${tileStyle[i % 3]}`}>
              {"flagship" in s && <span className="mb-4 w-fit rounded-full bg-ink px-3 py-1 text-xs font-semibold uppercase tracking-wider text-paper">Serviciul principal</span>}
              <h3 className="font-serif text-3xl font-extrabold leading-[1.05]">{s.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed">{s.short}</p>
              <ul className="mt-5 space-y-1.5 text-[15px] font-medium">
                {s.points.map((p) => (<li key={p}>→ {p}</li>))}
              </ul>
              <span className="mt-auto inline-flex items-center gap-1 pt-6 font-semibold">
                Află mai multe <ArrowUpRight className="h-5 w-5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* 5. Proof: real project with real screenshots, on a dark band */}
      <Section id="lucrari" dark>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:items-center">
          <div>
            <Eyebrow dark>Lucrare recentă</Eyebrow>
            <H2 dark>Cheesy Media: de la o pagină lungă la un <Accent className="text-orange">site complet.</Accent></H2>
            <p className="mt-5 text-lg leading-relaxed text-paper/85">
              Am refăcut site-ul unei agenții foto-video din Cluj-Napoca: design nou, o pagină pentru fiecare serviciu și bază tehnică pentru Google și AI.
            </p>
            <dl className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-paper/10 p-5"><dt className="text-[15px] text-paper/75">Performanță mobil</dt><dd className="font-serif text-4xl font-extrabold text-paper">82 <span className="text-orange">→ 100</span></dd></div>
              <div className="rounded-2xl bg-paper/10 p-5"><dt className="text-[15px] text-paper/75">Adrese în sitemap</dt><dd className="font-serif text-4xl font-extrabold text-paper">0 <span className="text-orange">→ 11</span></dd></div>
            </dl>
            <div className="mt-8 flex flex-wrap gap-3"><Button href="/lucrari/cheesy-media" variant="light" arrow>Vezi studiul de caz</Button><Button href="/lucrari" variant="ghost-dark">Toate lucrările</Button></div>
          </div>
          <div className="relative pb-6 pl-4 sm:pl-8">
            <Shot name="site-desktop" alt="Pagina principală a noului site Cheesy Media pe desktop" sizes="(min-width: 1024px) 620px, 92vw" />
            <Shot name="site-mobile" phone alt="Același site Cheesy Media pe telefon" sizes="170px" className="absolute bottom-0 left-0 w-[28%] max-w-[170px]" />
          </div>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          <figure className="rounded-3xl bg-paper/5 p-4">
            <Shot name="before-home" alt="Vechiul site Cheesy Media: o singură pagină violetă" sizes="(min-width: 768px) 340px, 92vw" />
            <figcaption className="mt-4 px-1"><span className="text-xs font-bold uppercase tracking-wider text-paper/60">Înainte</span><p className="mt-1 text-[16px] text-paper/85">O singură pagină violetă, fără date structurate, declarată în engleză.</p></figcaption>
          </figure>
          <figure className="rounded-3xl bg-paper/5 p-4">
            <Shot name="after-servicii" alt="Pagina Servicii a noului site Cheesy Media" sizes="(min-width: 768px) 340px, 92vw" />
            <figcaption className="mt-4 px-1"><span className="text-xs font-bold uppercase tracking-wider text-orange">Design</span><p className="mt-1 text-[16px] text-paper/85">Titluri mari, negru, crem și galben. Mascota păstrată, „Cere ofertă” mereu vizibil.</p></figcaption>
          </figure>
          <figure className="rounded-3xl bg-paper/5 p-4">
            <Shot name="after-proces" alt="Pagina Proces a noului site Cheesy Media" sizes="(min-width: 768px) 340px, 92vw" />
            <figcaption className="mt-4 px-1"><span className="text-xs font-bold uppercase tracking-wider text-orange">Google și AI</span><p className="mt-1 text-[16px] text-paper/85">Limba română, date structurate pe fiecare pagină, FAQ, sitemap și acces pentru roboții AI.</p></figcaption>
          </figure>
        </div>
      </Section>

      {/* 6. For whom */}
      <Section id="pentru-cine">
        <Eyebrow>Pentru cine lucrez</Eyebrow>
        <H2>Antreprenori și practici locale unde <Accent>încrederea decide.</Accent></H2>
        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {audiences.map(({ Icon, t, d, href }) => (
            <Link key={t} href={href} className="group rounded-3xl border-2 border-ink bg-canvas p-6 transition-shadow duration-200 hover:shadow-[6px_6px_0_0_var(--color-ink)]">
              <span className="grid h-12 w-12 place-items-center rounded-full bg-orange"><Icon aria-hidden className="h-6 w-6 text-ink" /></span>
              <h3 className="mt-5 font-serif text-2xl font-extrabold text-ink">{t}</h3>
              <p className="mt-2 text-[17px] leading-relaxed text-muted">{d}</p>
              <span className="mt-4 inline-block font-semibold text-ink underline decoration-orange decoration-2 underline-offset-4">Vezi cum lucrez</span>
            </Link>
          ))}
        </div>
      </Section>

      {/* 7. A personal letter */}
      <Section id="despre" white>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
          <div>
            <Eyebrow>O scrisoare de la mine</Eyebrow>
            <H2>De ce <Mark kind="underline">fac asta.</Mark></H2>
          </div>
          <div>
            <div className="space-y-5 text-xl leading-relaxed text-ink">
              <p>Am început să construiesc afaceri la 16 ani: magazine online, apoi marketing pentru alții. Am învățat repede un lucru incomod: un produs bun nu ajunge nicăieri dacă oamenii nu îl găsesc și nu au încredere în el.</p>
              <p>Studiez Economia la Universitatea Babeș-Bolyai din Cluj, cu schimburi la Paris și în statul New York. Gândesc în costuri, riscuri și rezultate, așa că judec un site după ce aduce afacerii tale, nu după cât de spectaculos arată.</p>
              <p>Lucrez singur, cu bună știință. Omul cu care vorbești la prima discuție este cel care îți face auditul, îți construiește site-ul și îți răspunde la mesaje.</p>
              <p className="font-accent text-3xl italic">— Dragoș</p>
            </div>
            <figure className="mt-10 rounded-3xl bg-paper p-6 sm:p-8">
              <blockquote className="font-serif text-xl font-bold leading-snug text-ink">
                „He was one of the few students I have worked with who managed to engage the majority of the audience… making him the person his peers would turn to when they felt stuck.”
              </blockquote>
              <figcaption className="mt-3 text-[15px] text-muted">Dan C. Lungescu, PhD, lector, Universitatea Babeș-Bolyai (citat original în engleză)</figcaption>
            </figure>
            <div className="mt-8"><Button href="/despre" variant="ghost">Citește povestea completă</Button></div>
          </div>
        </div>
      </Section>

      <Section id="intrebari"><FAQ items={faq} /></Section>
      <CtaBand id="contact" />
    </>
  );
}
