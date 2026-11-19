import { User } from "lucide-react";

/** The client journey told stage by stage, with Dragoș's part in each step (see USER_JOURNEY.md). */
export const journey = [
  {
    n: "01",
    when: "Ziua 1 · 2 minute",
    title: "Ceri auditul gratuit",
    you: "Completezi un formular scurt: site-ul, orașul și ce fel de afacere ai.",
    me: "Îți verific manual site-ul, Google și ce răspund ChatGPT, Gemini și Perplexity la întrebările clienților tăi.",
  },
  {
    n: "02",
    when: "În maximum 24 de ore",
    title: "Primești auditul, în limbaj simplu",
    you: "Citești ce merge, ce lipsește și cele trei lucruri care contează cel mai mult.",
    me: "Îl scriu eu, nu un program. Fără jargon și fără presiune să cumperi ceva.",
  },
  {
    n: "03",
    when: "O discuție de 30 de minute",
    title: "Stabilim planul împreună",
    you: "Îmi spui ce vrei: mai multe programări, mai multe cereri, un site care nu te mai jenează.",
    me: "Îți propun pașii în ordinea impactului și o ofertă clară. Vorbești cu omul care face munca.",
  },
  {
    n: "04",
    when: "Construire și optimizare",
    title: "Construiesc, iar tu vezi fiecare etapă",
    you: "Primești progresul pe etape și aprobi ce contează: texte, pagini, imagini.",
    me: "Design, cod, conținut, date structurate și profilul Google. Rapid, clar și ușor de citat de AI.",
  },
  {
    n: "05",
    when: "Măsurare",
    title: "Vedem ce s-a schimbat",
    you: "Primești un raport scurt: unde apari acum în Google și în răspunsurile AI.",
    me: "Retestez aceleași întrebări de la început, ca să vezi diferența, nu doar să o auzi de la mine.",
  },
] as const;

/** Where the client starts and where the work is heading. Labelled as a goal, never a promise. */
export function JourneyEnds() {
  return (
    <div className="mt-8 space-y-3" aria-label="De unde pornim și unde vrem să ajungem">
      <div className="rounded-2xl border-2 border-dashed border-ink/30 bg-canvas p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-muted">Punctul de plecare</p>
        <p className="mt-1 font-serif text-xl font-extrabold text-ink">Clienții întreabă. Nimeni nu te pomenește.</p>
      </div>
      <div aria-hidden className="ml-8 h-6 w-0.5 bg-ink" />
      <div className="rounded-2xl border-2 border-ink bg-orange p-5">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink">Ținta</p>
        <p className="mt-1 font-serif text-xl font-extrabold text-ink">Site clar, găsit în Google și ușor de recomandat de AI.</p>
      </div>
    </div>
  );
}

export function Journey() {
  return (
    <ol className="relative">
      {journey.map((s, i) => {
        const last = i === journey.length - 1;
        return (
          <li key={s.n} className="relative grid grid-cols-[3.25rem_1fr] gap-4 pb-10 last:pb-0 sm:grid-cols-[4rem_1fr] sm:gap-6">
            {!last && <span aria-hidden className="absolute left-[1.6rem] top-14 bottom-0 w-0.5 bg-ink/20 sm:left-8 sm:top-16" />}
            <span className={`relative z-10 flex h-13 w-13 items-center justify-center rounded-full border-2 border-ink font-serif text-xl font-extrabold sm:h-16 sm:w-16 sm:text-2xl ${last ? "bg-orange text-ink" : "bg-ink text-paper"}`}>
              {s.n}
            </span>
            <div className="pt-1">
              <p className="inline-block rounded-full bg-ink/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.1em] text-muted">{s.when}</p>
              <h3 className="mt-2 font-serif text-2xl font-extrabold leading-tight text-ink sm:text-[1.75rem]">{s.title}</h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border-2 border-ink/15 bg-canvas p-4">
                  <p className="flex items-center gap-2 text-sm font-semibold text-ink">
                    <span aria-hidden className="flex h-6 w-6 items-center justify-center rounded-full bg-paper ring-1 ring-ink/20"><User className="h-3.5 w-3.5" /></span>
                    Tu
                  </p>
                  <p className="mt-2 text-[16px] leading-relaxed text-ink">{s.you}</p>
                </div>
                <div className="rounded-2xl bg-ink p-4 text-paper">
                  <p className="flex items-center gap-2 text-sm font-semibold">
                    <span aria-hidden className="flex h-6 w-6 items-center justify-center rounded-full bg-orange text-[10px] font-extrabold text-ink">DC</span>
                    Eu, Dragoș
                  </p>
                  <p className="mt-2 text-[16px] leading-relaxed text-paper/90">{s.me}</p>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
