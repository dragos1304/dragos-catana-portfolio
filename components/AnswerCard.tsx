import type { Lang } from "@/lib/i18n";

const text = {
  ro: { aria: "Exemplu ilustrativ de răspuns AI", caption: "Exemplu ilustrativ, nu un răspuns real", q: "Care e o clinică stomatologică bună în orașul meu, cu programări online?", a1: "Îți recomand", name: "Clinica Exemplu", a2: ": site clar, program și prețuri orientative la vedere, recenzii recente și programare online.", src: "Surse: site-ul clinicii, profilul Google, un articol de ghid local.", foot: "AI-ul recomandă ce poate înțelege și verifica. Munca mea e să te fac ușor de înțeles și de verificat." },
  en: { aria: "Illustrative example of an AI answer", caption: "Illustrative example, not a real answer", q: "What's a good dental clinic in my city with online booking?", a1: "I'd recommend", name: "Example Clinic", a2: ": a clear website, opening hours and price ranges on show, recent reviews and online booking.", src: "Sources: the clinic's website, its Google profile, a local guide article.", foot: "AI recommends what it can understand and verify. My job is to make you easy to understand and to verify." },
} as const;

export function AnswerCard({ lang = "ro" }: { lang?: Lang }) {
  const t = text[lang];
  return (
    <figure className="relative rounded-3xl border-2 border-ink bg-canvas p-5 shadow-[8px_8px_0_0_var(--color-ink)] sm:p-7" aria-label={t.aria}>
      <figcaption className="mb-5 inline-flex rounded-full bg-paper px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
        {t.caption}
      </figcaption>
      <div className="space-y-4 text-[16px] leading-relaxed">
        <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-ink px-4 py-3 text-paper">{t.q}</p>
        <div className="max-w-[92%] rounded-2xl rounded-bl-sm bg-paper px-4 py-3 text-ink">
          <p>{t.a1} <strong className="bg-orange/25 px-1">{t.name}</strong>{t.a2}</p>
          <p className="mt-2 text-sm text-muted">{t.src}</p>
        </div>
      </div>
      <p className="mt-5 text-[15px] text-muted">{t.foot}</p>
    </figure>
  );
}
