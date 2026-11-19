/** The client journey told stage by stage, with Dragoș's part in each step (see USER_JOURNEY.md). */
export const journey = [
  {
    n: "01",
    when: "Ziua 1",
    title: "Ceri auditul gratuit",
    you: "Completezi un formular scurt: site-ul, orașul și ce fel de afacere ai. Durează două minute.",
    me: "Îți verific manual site-ul, Google și răspunsurile ChatGPT, Gemini și Perplexity pentru întrebările pe care le pun clienții tăi.",
  },
  {
    n: "02",
    when: "În maximum 24 de ore",
    title: "Primești auditul, în limbaj simplu",
    you: "Citești ce merge, ce lipsește și cele trei lucruri care contează cel mai mult pentru afacerea ta.",
    me: "Scriu eu auditul, nu un program. Fără jargon și fără presiune să cumperi ceva.",
  },
  {
    n: "03",
    when: "O discuție de 30 de minute",
    title: "Stabilim planul împreună",
    you: "Îmi spui ce vrei să obții: mai multe programări, mai multe cereri, un site care nu te mai jenează.",
    me: "Îți propun pașii în ordinea impactului și îți trimit o ofertă clară. Vorbești cu omul care face munca.",
  },
  {
    n: "04",
    when: "Construire și optimizare",
    title: "Construiesc, iar tu vezi fiecare etapă",
    you: "Primești progresul pe etape și aprobi ce contează: textele, paginile, imaginile.",
    me: "Design, cod, conținut, date structurate și profilul Google. Site rapid, clar și ușor de citat de AI.",
  },
  {
    n: "05",
    when: "Măsurare",
    title: "Vedem ce s-a schimbat",
    you: "Primești un raport scurt: unde apari acum în Google și în răspunsurile AI.",
    me: "Retestez aceleași întrebări de la început, ca să vezi diferența, nu doar să o auzi de la mine.",
  },
] as const;

export function Journey() {
  return (
    <ol className="mt-12 border-t border-line">
      {journey.map((s) => (
        <li key={s.n} className="grid gap-4 border-b border-line py-8 md:grid-cols-[7rem_1fr_1fr_1fr] md:gap-8 md:py-10">
          <span className="font-serif text-5xl font-medium leading-none text-brass-dark">{s.n}</span>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-slate-ink">{s.when}</p>
            <h3 className="mt-2 font-serif text-3xl font-medium leading-snug text-navy">{s.title}</h3>
          </div>
          <div>
            <p className="text-sm font-semibold text-navy">Tu</p>
            <p className="mt-1 leading-relaxed text-slate-ink">{s.you}</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-navy">Eu, Dragoș</p>
            <p className="mt-1 leading-relaxed text-slate-ink">{s.me}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
