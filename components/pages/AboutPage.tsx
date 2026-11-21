import type { Metadata } from "next";
import { pageMeta } from "@/lib/meta";
import { Breadcrumbs, CtaBand, Eyebrow, FAQ, H2, Section } from "@/components/ui";
import { faqs } from "@/lib/faqs";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, personSchema } from "@/lib/schema";
import { href, pageName, type Lang } from "@/lib/site-map";

/** The About page, once, in either language. */

type Copy = {
  title: string; description: string; eyebrow: string; h1: string; lead: string;
  whyEyebrow: string; whyH2: string; why: string;
  venturesEyebrow: string; venturesH2: string; venturesLead: string; ventures: [string, string][];
  eduEyebrow: string; eduH2: string; edu: [string, string][];
  howEyebrow: string; howH2: string; how: string;
  nextEyebrow: string; nextH2: string; next: string;
  beyondEyebrow: string; beyondH2: string; beyond: string[];
  recEyebrow: string; recH2: string; q: [string, string]; quoteBy: string; quoteNote: string; cta: string;
};

const copy: Record<Lang, Copy> = {
  ro: {
    title: "Despre mine: economist și web designer",
    description: "Student la Economie (media 4,0) la UBB, cu schimburi la Paris și în SUA, antreprenor din adolescență. Povestea din spatele serviciilor de web design și SEO.",
    eyebrow: "Despre mine",
    h1: "Sunt Dragoș, un economist care construiește site-uri și te ajută să fii găsit.",
    lead: "Locuiesc în Cluj-Napoca. Studiez Economia la Universitatea Babeș-Bolyai (în limba engleză), cu media 4,0, și construiesc afaceri de la 16 ani. Combin rigoarea academică cu spiritul practic al antreprenorului, iar asta se vede în felul în care lucrez la un site: începem de la ce are nevoie afacerea ta, nu de la ce este la modă.",
    whyEyebrow: "De ce fac asta", whyH2: "Fiecare afacere de care m-am ocupat avea nevoie să fie găsită.",
    why: "După peste 5 ani de antreprenoriat, în două incubatoare, am văzut același lucru: un produs sau un serviciu bun nu ajunge nicăieri dacă oamenii nu îl găsesc și nu au încredere în el. De aceea mă ocup de website-uri, SEO și, acum, de felul în care asistenții AI îți recomandă afacerea.",
    venturesEyebrow: "Antreprenoriat", venturesH2: "Peste 5 ani de antreprenoriat, de la 16 ani.",
    venturesLead: "Am obținut locul 2 la competiția de startupuri UBB i-Lab, în competiție cu echipe multidisciplinare din toată universitatea.",
    ventures: [
      ["Comerț online și vânzare cu amănuntul", "Am fondat și condus afaceri de îmbrăcăminte și de vânzări directe către consumatori."],
      ["Marketing digital și agenție", "Campanii de creștere și metode de atragere a clienților."],
      ["Studii de fezabilitate pentru energie solară", "Modelare financiară și operațională, analiza costurilor unitare și a alocării capitalului pentru o instalație comercială de panouri solare."],
      ["Consultanță Web3", "Fezabilitate economică, evaluări ale modelului economic al tokenurilor și analiza utilității la nivel de protocol."],
    ],
    eduEyebrow: "Studii", eduH2: "Rigoare academică, la nivel internațional.",
    edu: [
      ["Universitatea Babeș-Bolyai, FSEGA, Cluj-Napoca", "Licență în Economie, în limba engleză. Medie cumulată 4,0 / 4,0. Note maxime la Management și la Management comparat."],
      ["Alianța EUTOPIA / Ecotopia, Paris (anul 2)", "Un an de schimb internațional într-un consorțiu de 10 universități europene. Am promovat 84 de credite ECTS într-un singur an (norma europeană este de 60), păstrând media 4,0."],
      ["State University of New York at Cortland, SUA (anul 3)", "Semestru de schimb, cu accent pe economia afacerilor, management și piețele financiare din SUA."],
    ],
    howEyebrow: "Cum lucrez", howH2: "Gândesc ca un economist.",
    how: "Înțeleg costurile unitare, disciplina fluxului de numerar și riscul, și știu diferența dintre un model teoretic și realitatea pieței. Aplicat la un proiect web, asta înseamnă un scop clar, obiective măsurabile, un proces transparent și fără surprize.",
    nextEyebrow: "Încotro merg", nextH2: "Afaceri și predare.",
    next: "Țelul meu este să intru la o școală de afaceri de prim rang din Europa și să construiesc o carieră care îmbină finanțele cu predarea. Asta mă definește: organizez grupe de studiu pentru colegi înainte de examene și sunt omul la care vin ei când se blochează. Ceea ce învăț și aplic în afaceri vreau să și explic, iar asta se vede și în felul în care îți prezint SEO-ul și AI-ul: în limbaj clar, fără jargon.",
    beyondEyebrow: "Dincolo de muncă", beyondH2: "Comunitate și conducere.",
    beyond: [
      "Organizez grupe de studiu pentru studenții de la Economie și Management.",
      "Am organizat concertul din cadrul Săptămânii Internaționale FSEGA.",
      "Am aplicat la First Ascent Business Edition, programul de dezvoltare a abilităților de conducere pentru fondatori și manageri.",
    ],
    recEyebrow: "Recomandare", recH2: "Ce spune un profesor.", q: ["„", "”"],
    quoteBy: "Lect. univ. dr. Dan C. Lungescu, Universitatea Babeș-Bolyai", quoteNote: " (citat original în engleză)",
    cta: "Hai să vedem ce pot face pentru afacerea ta.",
  },
  en: {
    title: "About me: economist and web designer",
    description: "Economics student (4.0 GPA) at Babeș-Bolyai University, with exchanges in Paris and the US, building businesses since 16. The story behind my work.",
    eyebrow: "About me",
    h1: "I'm Dragoș, an economist who builds websites and helps you get found.",
    lead: "I live in Cluj-Napoca. I study Economics at Babeș-Bolyai University (taught in English), with a 4.0 GPA, and I've been building businesses since I was 16. I combine academic rigour with an entrepreneur's execution, and that shows in how I work on a website: we start from what your business needs, not from what's fashionable.",
    whyEyebrow: "Why I do this", whyH2: "Every business I've touched needed to be found.",
    why: "After more than 5 years of entrepreneurship, across two incubators, I kept seeing the same thing: a good product or service goes nowhere if people can't find it and don't trust it. That's why I work on websites, SEO and, now, on how AI assistants recommend your business.",
    venturesEyebrow: "Entrepreneurship", venturesH2: "More than 5 years of execution, starting at 16.",
    venturesLead: "I took 2nd place at the UBB i-Lab startup competition, against multidisciplinary teams from across the university.",
    ventures: [
      ["E-commerce and retail", "I founded and ran clothing and direct-to-consumer businesses."],
      ["Digital marketing and agency work", "Growth campaigns and client-acquisition frameworks."],
      ["Solar feasibility consulting", "Financial and operational modelling, unit-cost analysis and capital allocation for a commercial solar installation."],
      ["Web3 consulting", "Economic feasibility, tokenomics reviews and protocol-level utility analysis."],
    ],
    eduEyebrow: "Education", eduH2: "Academic rigour, at international level.",
    edu: [
      ["Babeș-Bolyai University, FSEGA, Cluj-Napoca", "BSc in Economics, taught in English. Cumulative GPA 4.0 / 4.0. Top marks in Management and Comparative Management."],
      ["EUTOPIA / Ecotopia alliance, Paris (year 2)", "A year of international exchange in a consortium of 10 European universities. I passed 84 ECTS credits in one year (the European norm is 60), keeping a 4.0 GPA."],
      ["State University of New York at Cortland, USA (year 3)", "An exchange semester focused on business economics, management and US financial markets."],
    ],
    howEyebrow: "How I work", howH2: "I think like an economist.",
    how: "I understand unit costs, cash-flow discipline and risk, and I know the difference between a model on paper and the reality of a market. On a web project, that means a clear scope, measurable goals, a transparent process and no surprises.",
    nextEyebrow: "Where I'm heading", nextH2: "Business and teaching.",
    next: "My goal is a top business school in Europe and a career that combines finance with teaching. It's part of who I am: I run study groups for classmates before exams, and I'm the person they come to when they're stuck. What I learn and apply in business I also want to explain, and that shows in how I talk about SEO and AI with you: in clear language, without jargon.",
    beyondEyebrow: "Beyond work", beyondH2: "Community and leadership.",
    beyond: [
      "I run study groups for Economics and Management students.",
      "I organised the live concert of FSEGA International Week.",
      "I applied to First Ascent Business Edition, the leadership accelerator for founders and operators.",
    ],
    recEyebrow: "Recommendation", recH2: "What a professor says.", q: ["“", "”"],
    quoteBy: "Dan C. Lungescu, PhD, Assistant Professor, Babeș-Bolyai University", quoteNote: "",
    cta: "Let's see what I can do for your business.",
  },
};

export function aboutMetadata(lang: Lang): Metadata {
  return pageMeta("about", lang, copy[lang]);
}

export function AboutPage({ lang }: { lang: Lang }) {
  const c = copy[lang];
  const home = { name: pageName("home", lang), path: href("home", lang) };
  return (
    <>
      <JsonLd data={[{ "@context": "https://schema.org", ...personSchema, "@type": "Person" },
        breadcrumb([home, { name: pageName("about", lang), path: href("about", lang) }])]} />
      <Section id="despre-mine">
        <Breadcrumbs lang={lang} items={[{ name: home.name, href: home.path }, { name: pageName("about", lang) }]} />
        <Eyebrow>{c.eyebrow}</Eyebrow>
        <h1 className="max-w-3xl font-serif text-[2.5rem] font-extrabold leading-[1] sm:text-6xl">{c.h1}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted">{c.lead}</p>
      </Section>

      <Section id="de-ce-fac-asta" tint>
        <Eyebrow>{c.whyEyebrow}</Eyebrow>
        <H2>{c.whyH2}</H2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{c.why}</p>
      </Section>

      <Section id="antreprenoriat">
        <Eyebrow>{c.venturesEyebrow}</Eyebrow>
        <H2>{c.venturesH2}</H2>
        <p className="mt-4 max-w-3xl text-muted leading-relaxed">{c.venturesLead}</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {c.ventures.map(([t, d]) => (
            <div key={t} className="rounded-md border border-line p-6"><h3 className="font-serif text-xl font-bold">{t}</h3><p className="mt-2 leading-relaxed text-muted">{d}</p></div>
          ))}
        </div>
      </Section>

      <Section id="studii" tint>
        <Eyebrow>{c.eduEyebrow}</Eyebrow>
        <H2>{c.eduH2}</H2>
        <ul className="mt-8 space-y-6">
          {c.edu.map(([t, d]) => (
            <li key={t} className="max-w-3xl"><h3 className="font-serif text-xl font-bold">{t}</h3><p className="mt-2 leading-relaxed text-muted">{d}</p></li>
          ))}
        </ul>
      </Section>

      <Section id="cum-lucrez">
        <Eyebrow>{c.howEyebrow}</Eyebrow>
        <H2>{c.howH2}</H2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-muted">{c.how}</p>
      </Section>

      <Section id="incotro-merg" dark>
        <Eyebrow dark>{c.nextEyebrow}</Eyebrow>
        <H2 dark>{c.nextH2}</H2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80">{c.next}</p>
      </Section>

      <Section id="dincolo-de-munca">
        <Eyebrow>{c.beyondEyebrow}</Eyebrow>
        <H2>{c.beyondH2}</H2>
        <ul className="mt-6 max-w-3xl list-disc space-y-3 pl-5 text-lg leading-relaxed text-muted">
          {c.beyond.map((b) => <li key={b}>{b}</li>)}
        </ul>
      </Section>

      <Section id="recomandare" tint>
        <Eyebrow>{c.recEyebrow}</Eyebrow>
        <H2>{c.recH2}</H2>
        <figure className="mt-8 max-w-3xl">
          <blockquote lang="en" className="font-serif text-2xl leading-relaxed text-ink">
            <p>{c.q[0]}I would place him as the top student, not only in his class, but also across the entire set of English-taught programs of our school.{c.q[1]}</p>
            <p className="mt-4">{c.q[0]}He was one of the few students I have worked with who managed to engage the majority of the audience… making him the person his peers would turn to when they felt stuck.{c.q[1]}</p>
          </blockquote>
          <figcaption className="mt-5 text-muted">{c.quoteBy}<span className="text-sm">{c.quoteNote}</span></figcaption>
        </figure>
      </Section>
      <Section id="intrebari"><FAQ items={faqs.about[lang]} lang={lang} /></Section>
      <CtaBand lang={lang} title={c.cta} />
    </>
  );
}
