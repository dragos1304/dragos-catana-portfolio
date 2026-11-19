import type { Metadata } from "next";
import { Breadcrumbs, CtaBand, Eyebrow, H2, Section } from "@/components/ui";
import { JsonLd } from "@/components/JsonLd";
import { breadcrumb, personSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Despre Dragoș Cătană: economist, antreprenor, web designer",
  description:
    "Student la Economie (media 4.0) la UBB, cu schimburi la Paris și în SUA, antreprenor din adolescență. Povestea din spatele serviciilor de web design și SEO.",
  alternates: { canonical: "/despre/" },
};

const ventures = [
  ["E-commerce și retail", "Am fondat și rulat afaceri de îmbrăcăminte și vânzări directe către consumatori."],
  ["Marketing digital și agenție", "Campanii de creștere și cadre pentru atragerea clienților."],
  ["Consultanță în fezabilitate solară", "Modelare financiară și operațională, analiza costurilor unitare și a alocării capitalului pentru o instalație comercială de panouri solare."],
  ["Consultanță Web3", "Fezabilitate economică, evaluări de tokenomics și analiza utilității la nivel de protocol."],
];

export default function Despre() {
  return (
    <>
      <JsonLd data={[{ "@context": "https://schema.org", ...personSchema, "@type": "Person" },
        breadcrumb([{ name: "Acasă", path: "/" }, { name: "Despre", path: "/despre" }])]} />
      <Section id="despre-mine">
        <Breadcrumbs items={[{ name: "Acasă", href: "/" }, { name: "Despre" }]} />
        <Eyebrow>Despre mine</Eyebrow>
        <h1 className="max-w-3xl font-serif text-4xl font-semibold leading-tight sm:text-5xl">
          Sunt Dragoș, un economist care construiește site-uri și te ajută să fii găsit.
        </h1>
        <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-ink">
          Locuiesc în Cluj-Napoca. Studiez Economia la Universitatea Babeș-Bolyai (în limba engleză), cu media 4.0, și construiesc afaceri de la 16 ani. Combin rigoarea academică cu execuția de antreprenor, iar asta se vede în felul în care lucrez la un site: începem de la ce are nevoie afacerea ta, nu de la ce e la modă.
        </p>
      </Section>

      <Section id="de-ce-fac-asta" tint>
        <Eyebrow>De ce fac asta</Eyebrow>
        <H2>Fiecare afacere pe care am atins-o avea nevoie să fie găsită.</H2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-ink">
          După peste 5 ani de antreprenoriat, în două incubatoare, am văzut același lucru: un produs sau un serviciu bun nu ajunge nicăieri dacă oamenii nu îl găsesc și nu au încredere în el. De aceea mă ocup de website-uri, SEO și, acum, de felul în care asistenții AI îți recomandă afacerea.
        </p>
      </Section>

      <Section id="antreprenoriat">
        <Eyebrow>Antreprenoriat</Eyebrow>
        <H2>Peste 5 ani de execuție, începând cu 16 ani.</H2>
        <p className="mt-4 max-w-3xl text-slate-ink leading-relaxed">
          Am obținut locul 2 la competiția de startup-uri UBB i-Lab, în competiție cu echipe multidisciplinare din toată universitatea.
        </p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {ventures.map(([t, d]) => (
            <div key={t} className="rounded-md border border-line p-6"><h3 className="font-serif text-xl font-semibold">{t}</h3><p className="mt-2 leading-relaxed text-slate-ink">{d}</p></div>
          ))}
        </div>
      </Section>

      <Section id="studii" tint>
        <Eyebrow>Studii</Eyebrow>
        <H2>Rigoare academică, la nivel internațional.</H2>
        <ul className="mt-8 space-y-6">
          <li className="max-w-3xl"><h3 className="font-serif text-xl font-semibold">Universitatea Babeș-Bolyai, FSEGA, Cluj-Napoca</h3>
            <p className="mt-2 leading-relaxed text-slate-ink">Licență în Economie, în limba engleză. Medie cumulată 4.0 / 4.0. Evaluări de top la Management și Management comparat.</p></li>
          <li className="max-w-3xl"><h3 className="font-serif text-xl font-semibold">Alianța EUTOPIA / Ecotopia, Paris (anul 2)</h3>
            <p className="mt-2 leading-relaxed text-slate-ink">Un an de schimb internațional într-un consorțiu de 10 universități europene. Am promovat 84 de credite ECTS într-un singur an (norma europeană este de 60), păstrând media 4.0.</p></li>
          <li className="max-w-3xl"><h3 className="font-serif text-xl font-semibold">State University of New York at Cortland, SUA (anul 3)</h3>
            <p className="mt-2 leading-relaxed text-slate-ink">Semestru de schimb, cu accent pe economie de business, management și piețele financiare din SUA.</p></li>
        </ul>
      </Section>

      <Section id="cum-lucrez">
        <Eyebrow>Cum lucrez</Eyebrow>
        <H2>Gândesc ca un economist.</H2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-ink">
          Înțeleg costurile unitare, disciplina fluxului de numerar și riscul, și știu diferența dintre un model teoretic și realitatea pieței. Aplicat la un proiect web, asta înseamnă un scop clar, obiective măsurabile, un proces transparent și fără surprize.
        </p>
      </Section>

      <Section id="incotro-merg" dark>
        <Eyebrow dark>Încotro merg</Eyebrow>
        <H2 dark>Business și predare.</H2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80">
          Țelul meu este să intru la o școală de business de top din Europa și să construiesc o carieră care îmbină finanțele cu predarea. Sunt parte din cine sunt: organizez grupe de studiu pentru colegi înainte de examene și sunt omul la care vin ei când se blochează. Ceea ce învăț și aplic în afaceri vreau să și explic, iar asta se vede și în felul în care îți prezint SEO-ul și AI-ul: în limbaj clar, fără jargon.
        </p>
      </Section>

      <Section id="dincolo-de-munca">
        <Eyebrow>Dincolo de muncă</Eyebrow>
        <H2>Comunitate și leadership.</H2>
        <ul className="mt-6 max-w-3xl list-disc space-y-3 pl-5 text-lg leading-relaxed text-slate-ink">
          <li>Organizez grupe de studiu pentru studenții de la Economie și Management.</li>
          <li>Am organizat concertul live din cadrul Săptămânii Internaționale FSEGA.</li>
          <li>Am aplicat la First Ascent Business Edition, acceleratorul de leadership pentru fondatori și operatori.</li>
        </ul>
      </Section>

      <Section id="recomandare" tint>
        <Eyebrow>Recomandare</Eyebrow>
        <H2>Ce spune un profesor.</H2>
        <figure className="mt-8 max-w-3xl">
          <blockquote className="font-serif text-2xl leading-relaxed text-navy">
            <p>„I would place him as the top student, not only in his class, but also across the entire set of English-taught programs of our school.”</p>
            <p className="mt-4">„He was one of the few students I have worked with who managed to engage the majority of the audience… making him the person his peers would turn to when they felt stuck.”</p>
          </blockquote>
          <figcaption className="mt-5 text-slate-ink">Dan C. Lungescu, PhD, Assistant Professor, Universitatea Babeș-Bolyai <span className="text-sm">(citat original în engleză)</span></figcaption>
        </figure>
      </Section>
      <CtaBand title="Hai să vedem ce pot face pentru afacerea ta." />
    </>
  );
}
