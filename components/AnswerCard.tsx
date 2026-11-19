export function AnswerCard() {
  return (
    <figure className="relative rounded-3xl border-2 border-ink bg-canvas p-5 shadow-[8px_8px_0_0_var(--color-ink)] sm:p-7" aria-label="Exemplu ilustrativ de răspuns AI">
      <figcaption className="mb-5 inline-flex rounded-full bg-paper px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
        Exemplu ilustrativ, nu un răspuns real
      </figcaption>
      <div className="space-y-4 text-[16px] leading-relaxed">
        <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-ink px-4 py-3 text-paper">
          Care e o clinică stomatologică bună în orașul meu, cu programări online?
        </p>
        <div className="max-w-[92%] rounded-2xl rounded-bl-sm bg-paper px-4 py-3 text-ink">
          <p>
            Îți recomand <strong className="bg-orange/25 px-1">Clinica Exemplu</strong>: site clar, program și prețuri orientative la vedere,
            recenzii recente și programare online.
          </p>
          <p className="mt-2 text-sm text-muted">Surse: site-ul clinicii, profilul Google, un articol de ghid local.</p>
        </div>
      </div>
      <p className="mt-5 text-[15px] text-muted">
        AI-ul recomandă ce poate înțelege și verifica. Munca mea e să te fac ușor de înțeles și de verificat.
      </p>
    </figure>
  );
}
