# Audit gratuit de vizibilitate: ghid pas cu pas

Cum transformi o cerere venită din formularul de pe
[/audit-gratuit-vizibilitate-ai/](https://dragoscatana.com/audit-gratuit-vizibilitate-ai/) într-un raport PDF
în brandul tău, trimis în maximum 24 de ore. Durată realistă: 60–90 de minute pe audit, din care ~15 minute
sunt scripturi care rulează singure.

**Reguli care nu se negociază**

- Nicio cifră inventată. Tot ce apare în raport vine din `data.json` (măsurat de script) sau din `findings.json`
  (copiat dintr-un rezultat de tool, cu sursa și data). Ce nu ai verificat rămâne „neverificat”, nu se ghicește.
- Fără recenzii sau testimoniale inventate, fără „garantăm locul 1”.
- Raportul pleacă la client doar după ce l-ai citit tu, cap-coadă. Trimiterea o faci tu.
- `public/api/config.php` nu se citește, nu se copiază, nu se urcă nicăieri.
- Folderul `audits/clients/` conține date de client și e în `.gitignore`. Nu îl comite.

---

## 0. Ce primești din formular

Formularul (`components/LeadForm.tsx`, contractul în `lib/lead-form.ts`) trimite un e-mail prin
`public/api/contact.php` la adresa din `config.php`, cu subiectul **„Cerere audit gratuit AI”**.
Câmpurile: `Nume`, `E-mail`, `Website`, `Tip afacere`, `Oraș`, `Concurenți` (opțional) și limba
paginii (`lang`: `ro` sau `en`). Dacă `lang` e `en` sau omul a scris în engleză, raportul se face în engleză.

## 1. Pregătire (2 minute)

```bash
cd audits
npm install          # doar prima dată
```

Alege un `slug` scurt: `numeafacere-oras` (ex. `dentocalm-cluj`). Tot ce ține de client stă în
`audits/clients/<slug>/`.

## 2. Colectarea automată (5–8 minute, rulează singură)

```bash
node scripts/collect.mjs --url https://site-client.ro --slug numeafacere-oras --lang ro
```

Ce măsoară (fără niciun cost):
- lanțul de redirecționări, http→https, www/non-www, antete de securitate, versiunea de PHP expusă;
- `robots.txt` (inclusiv dacă blochează GPTBot, ClaudeBot, PerplexityBot, Google-Extended…), `llms.txt`, sitemap;
- până la 10 pagini (prima + cele mai „scurte” din sitemap): titlu, descriere, H1-uri, imagini fără alt,
  canonical, hreflang, JSON-LD, linkuri `tel:`, întrebări frecvente, adresă, prețuri;
- linkuri interne și externe stricate (cu o reîncercare; ce nu răspunde deloc e raportat separat, nu ca „stricat”);
- capturi de ecran pe iPhone și desktop, plus verificări pe telefon (scroll lateral, mărime text, butoane mici);
- Google Lighthouse pe mobil (viteză, accesibilitate, bune practici, SEO, LCP/CLS/FCP).

Opțiuni: `--pages 15`, `--no-lighthouse`, `--psi` (date reale de la utilizatori Chrome, dacă site-ul are trafic;
cota fără cheie e mică, pune `PSI_KEY` în mediu dacă ai una).

Dacă un site e foarte lent sau limitează cererile, scriptul durează mai mult; nu-l rula de două ori în paralel.

## 3. Ce verifici „de mână” și scrii în `findings.json` (30–45 minute)

Copiază `template/findings.example.json` în `clients/<slug>/findings.json` și completează. Fiecare bloc are
`source` și `checkedAt`. Ce nu completezi nu intră în scor.

### 3a. Google: poziții și harta (Firecrawl → DataForSEO, ~1 credit pe căutare)

Alege 5 căutări pe care le face un client real: `serviciu + oraș` (2–3 servicii principale), `tip afacere + oraș`,
`urgențe/non-stop + oraș` dacă se aplică, plus **numele afacerii**. Rulează `serp/google-organic` cu
`location_name: "Cluj-Napoca,Cluj County,Romania"` (sau orașul clientului) și `language_code: "ro"`.

Atenție: câmpul `domain` din rezultatele organice vine ca `google.com` (link de redirecționare). Domeniul real
e în `breadcrumb` / `website_name`. Din fiecare rezultat notezi: poziția pe hartă (`local_pack`, 1–3 sau `null`),
poziția organică (sau `null` dacă nu e în top 10), dacă rezumatul AI (`ai_overview`) pomenește afacerea și cine
e primul pe hartă și în rezultate.

### 3b. Profilul Google (Firecrawl Maps, 10 + 5 credite)

1. `firecrawl-maps / businesses/search` cu `"<tip afacere> <oraș>"`, `country: "ro"`, `language: "ro"`:
   găsești clientul (rating, nr. recenzii, categorii, link site) **și** primele 20 de afaceri din zonă.
   Pune toate cele ~19 la `gbp.competitors` (nu alege doar pe cele mari: mediana se calculează din toate).
2. `businesses/rating_trend` cu `feature_id`-ul clientului: rata de răspuns la recenzii și ritmul pe lună.

Dacă afacerea nu are profil Google, asta devine problema nr. 1 din raport.

### 3c. AI: ce răspund asistenții (browserul din aplicație, gratuit)

Pune 3 întrebări formulate ca un client obișnuit, în limba clientului:
- „Ce [tip afacere] îmi recomanzi în [oraș]?”
- „Am nevoie de [serviciul principal] în [oraș]. Unde merg?”
- o întrebare pe un serviciu cu marjă mare sau o urgență.

A treia întrebare e despre afacere, pe nume: „Ce servicii oferă <nume>, <tip afacere> din <oraș>, și merită să
lucrez cu el?”. Nu întreba „Cine este <nume>?”: Claude tratează întrebarea ca fiind despre o persoană privată și
nu caută nimic.

Toate în browserul din aplicație (Gemini și Claude sunt deja autentificate acolo), **fiecare întrebare într-un chat
nou și privat**, ca să nu rămână în istoric și să nu fie influențată de conversațiile tale:

| Asistent | Cum | Model |
|---|---|---|
| ChatGPT | fără cont: `https://chatgpt.com/?temporary-chat=true&hints=search&q=<întrebarea, URL-encoded>` | cel implicit |
| Gemini | `gemini.google.com/app` → butonul „Turn on temporary chat” (sus, dreapta), apoi întrebarea | Hydrogen („Everyday help”), nu Neon |
| Claude | `claude.ai/new?incognito` (pictograma cu fantoma), apoi întrebarea | Sonnet, nu Opus/Fable |
| Perplexity | cere cont separat; dacă nu e autentificat, trece la `ai.notChecked` | – |

La Gemini, modul temporar se oprește la fiecare chat nou: verifică butonul „Turn off temporary chat” înainte de
fiecare întrebare. La Claude, verifică pe buton că modelul e tot Sonnet. Așteaptă 30–60 s; Gemini poate dura
peste un minut. Rezumatele AI din Google le ai deja de la pasul 3a.
Pentru fiecare răspuns notezi: apare clientul? pe ce poziție? pe cine recomandă în loc? Copiezi cel mult o
frază scurtă din răspuns la `excerpt`. Ce motor n-ai verificat trece la `ai.notChecked`. Notează în `ai.method`
modurile și modelele folosite.

### 3d. Rezumatul și cele 3 priorități

- `summary.headline`: o frază, pe limba clientului, cu ce merge și ce nu.
- `summary.intro`: 3–5 fraze, cu cifrele din raport (nicio cifră care nu apare și în secțiuni).
- `top3`: id-urile celor mai importante probleme (vezi `scripts/checks.mjs`, ex. `speed`, `localbusiness-schema`,
  `h1`, `ai-mentions`, `rankings`, `brand`) sau id-uri din `extraIssues`.
- `extraIssues`: observații pe care scriptul nu le prinde (pagini de servicii lipsă, traduceri greșite, NAP diferit
  între site și Google etc.). Fiecare: `section`, `severity` (critic/important/minor), `effort` (quick/big),
  `title`, `detail`, `fix`. **Verifică fiecare afirmație în `data.json` înainte să o scrii.**

Folosește skill-ul `romana` pentru textele în română (diacritice, fără calcuri).

## 4. Raportul (1 minut)

```bash
node scripts/render.mjs --slug numeafacere-oras
```

Rezultă `clients/<slug>/report.html` și `report.pdf` (A4, ~12–15 pagini). Scorul se calculează automat din
reguli fixe (`scripts/checks.mjs`); nu îl modifica de mână.

## 5. Verificarea finală (10 minute)

- Citește PDF-ul cap-coadă. Fiecare cifră are sursa în `data.json` sau în `findings.json`?
- Numele afacerii, orașul și site-ul sunt corecte? Diacriticele sunt corecte?
- Scoate `"dryRun": true` din `findings.json` (altfel coperta are eticheta „Test intern”).
- Nimic jignitor sau alarmist: tonul e de coleg care ajută, nu de vânzător.

## 6. Trimiterea (o faci tu)

Răspunzi la e-mailul primit din formular, cu PDF-ul atașat și 3–4 rânduri: mulțumesc, cele 3 priorități într-o
frază, linkul de programare. Fără atașamente suplimentare, fără liste de prețuri nesolicitate.

---

## De ce combinația asta de unelte

| Nevoie | Ce folosim | De ce |
|---|---|---|
| Lista de verificări SEO / tehnic / on-page / linkuri / schema | Skill-urile `searchfit-seo:*` și `marketing:seo-audit`, transformate în reguli fixe în `checks.mjs` | Skill-urile dau checklist-uri bune, dar fiecare scoate alt format și alt scor; codul aplică aceleași reguli la fiecare client. |
| Viteză, accesibilitate, mobil | Lighthouse local + Chrome headless (`design:accessibility-review` ca checklist) | Gratuit, reproductibil, fără limită de cereri. |
| Poziții în Google, rezumat AI, hartă | Firecrawl → DataForSEO SERP | ~1 credit pe căutare, locație exactă (Cluj-Napoca). Semrush nu e conectat aici. |
| Profil Google și recenzii | Firecrawl Maps | Rating, recenzii, concurenți și rata de răspuns, cu sursă și dată. |
| Răspunsuri AI | Browserul din aplicație: ChatGPT fără cont, Gemini (chat temporar) și Claude (incognito, Sonnet) cu contul tău | Nu există un API gratuit care să reproducă exact ce vede un client. |
| PDF | HTML + CSS randat cu Chrome (puppeteer) | Fonturile și culorile brandului exact ca pe site; skill-ul `pdf` (reportlab) și `docx` dau un aspect mult mai sărac. |
| Agentul `searchfit-seo:seo-auditor` și `awwwards audit_url` | Opționale, pentru o a doua opinie | Rezultate în format liber, greu de pus într-un raport repetabil. |

Cost tipic pe audit: ~20–25 credite Firecrawl (5 căutări Google + căutare pe hartă + trendul recenziilor).
Orice altceva plătit (Semrush, DataForSEO direct, Ahrefs) se cere înainte.

## Fișiere

```
audits/
  AUDIT_PLAYBOOK.md            acest ghid
  package.json                 dependențe (cheerio, puppeteer-core, lighthouse)
  scripts/collect.mjs          colectarea automată → clients/<slug>/data.json + capturi
  scripts/checks.mjs           regulile de scor (o singură sursă)
  scripts/strings.mjs          toate textele fixe, RO și EN
  scripts/render.mjs           data.json + findings.json → report.html + report.pdf
  template/report.css          designul (paper #f6f5f1, ink #131313, orange #f1501b)
  template/findings.example.json  model de completat
  clients/                     date de client, NU se comite (.gitignore)
```
