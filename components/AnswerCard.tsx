export function AnswerCard() {
  return (
    <figure className="rounded-2xl border border-white/15 bg-white/5 p-5 sm:p-6" aria-label="Exemplu ilustrativ de răspuns AI">
      <figcaption className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/60">
        Exemplu ilustrativ, nu un răspuns real
      </figcaption>
      <div className="space-y-4 text-[15px] leading-relaxed">
        <p className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-white/10 px-4 py-3 text-white">
          Care e o clinică stomatologică bună în orașul meu, cu programări online?
        </p>
        <div className="max-w-[92%] rounded-2xl rounded-bl-sm bg-white px-4 py-3 text-navy">
          <p>
            Îți recomand <strong>Clinica Exemplu</strong>: site clar, program și prețuri orientative la vedere,
            recenzii recente și programare online.
          </p>
          <p className="mt-2 text-sm text-slate-ink">Surse: site-ul clinicii, profilul Google, un articol de ghid local.</p>
        </div>
      </div>
      <p className="mt-4 text-sm text-white/70">
        AI-ul recomandă ce poate înțelege și verifica. Munca mea e să te fac ușor de înțeles și de verificat.
      </p>
    </figure>
  );
}
