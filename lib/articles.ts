export type Block =
  | { t: "h2" | "h3" | "p"; text: string }
  | { t: "ul" | "ol"; items: string[] }
  | { t: "code"; text: string }
  | { t: "table"; head: string[]; rows: string[][] };

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: "Căutare AI" | "Redesign" | "SEO tehnic";
  date: string; // ISO
  readMin: number;
  blocks: Block[];
  faq: { q: string; a: string }[];
  related: { href: string; label: string }[];
};

export const articles: Article[] = [
  {
    slug: "ce-este-geo-optimizare-pentru-motoare-ai",
    title: "Ce este GEO (optimizarea pentru motoare AI) și cum diferă de SEO",
    description:
      "GEO sau AEO înseamnă să fii înțeles și citat de ChatGPT, Gemini, Claude și Perplexity. Ce este, cum diferă de SEO și ce poți face concret.",
    category: "Căutare AI",
    date: "2026-11-18",
    readMin: 6,
    blocks: [
      { t: "p", text: "GEO (Generative Engine Optimization) sau AEO (Answer Engine Optimization) înseamnă să-ți faci afacerea ușor de înțeles și de citat pentru asistenții AI, precum ChatGPT, Gemini, Claude sau Perplexity. Scopul nu mai e doar un loc în lista de rezultate, ci să fii menționat, corect, în răspunsul pe care îl primește omul." },
      { t: "h2", text: "De ce contează pentru o afacere locală" },
      { t: "p", text: "Un pacient sau un client poate întreba direct un asistent: „care e o clinică bună în orașul meu?” sau „ce avocat se ocupă de dreptul muncii?”. Răspunsul conține câteva nume, uneori cu surse. Dacă ești în acel răspuns, ești luat în calcul. Dacă nu, concurentul tău poate câștiga clientul fără ca tu să afli vreodată că a existat căutarea." },
      { t: "h2", text: "Cum ajung asistenții AI să recomande o afacere" },
      { t: "p", text: "Nu există o formulă publică și fixă. Totuși, în practică, asistenții se bazează pe două lucruri: ce au învățat în timpul antrenării și, la mulți dintre ei, pe căutări web în timp real, din care citează surse. De aceea contează să fii clar, consecvent și ușor de verificat în mai multe locuri, nu doar pe site." },
      { t: "h2", text: "SEO clasic și GEO: ce se schimbă" },
      { t: "table", head: ["", "SEO clasic", "GEO"], rows: [
        ["Obiectiv", "Poziție în lista de rezultate", "Menționare corectă în răspunsul AI"],
        ["Ce contează", "Cuvinte-cheie, linkuri, viteză, experiența paginii", "Răspunsuri clare, date structurate, informații consecvente, recenzii, mențiuni externe"],
        ["Măsurare", "Poziții, clickuri, trafic", "Test periodic al întrebărilor reale"],
      ] },
      { t: "p", text: "GEO nu înlocuiește SEO. Un site lent, greu de parcurs sau ascuns pentru motoare nu va fi folosit nici de AI. Practic, GEO se construiește peste o bază SEO sănătoasă." },
      { t: "h2", text: "Ce poți face concret" },
      { t: "ol", items: [
        "Spune clar cine ești, ce faci, pentru cine și unde, în primele propoziții ale paginilor importante.",
        "Răspunde direct la întrebările clienților, cu titluri sub formă de întrebare și răspuns scurt, apoi detalii.",
        "Adaugă date structurate (schema.org) pentru organizație, serviciu, FAQ și articole.",
        "Păstrează aceleași date (nume, adresă, telefon, descriere) pe site, profilul Google al afacerii, directoare și rețele.",
        "Adună recenzii reale și mențiuni în surse de încredere.",
        "Permite crawlerele AI relevante în robots.txt și verifică să nu fie blocate de firewall sau CDN.",
        "Testează lunar întrebările reale ale clienților și notează ce se schimbă.",
      ] },
      { t: "h2", text: "Ce nu poate promite nimeni" },
      { t: "p", text: "Răspunsurile AI variază de la o rulare la alta și de la un utilizator la altul, iar modelele se actualizează în ritmul lor. De aceea orice garanție de tip „locul 1 în ChatGPT” e un semn de alarmă. Ce se poate promite este un proces: măsurare, îmbunătățiri concrete și rapoarte clare." },
    ],
    faq: [
      { q: "GEO și AEO sunt același lucru?", a: "În practică, da. Ambele descriu optimizarea pentru răspunsurile generate de AI. Termenii nu sunt standardizați și se folosesc des interschimbabil." },
      { q: "Trebuie să renunț la SEO clasic?", a: "Nu. GEO se sprijină pe SEO. Un site bine construit, rapid și clar ajută și în Google, și în răspunsurile AI." },
      { q: "Cât durează până se văd rezultate?", a: "De obicei săptămâni sau luni. Corecturile tehnice se văd mai repede, iar autoritatea se construiește în timp." },
    ],
    related: [
      { href: "/servicii/seo-vizibilitate-ai", label: "SEO și vizibilitate în AI" },
      { href: "/audit-gratuit-vizibilitate-ai", label: "Audit gratuit AI" },
      { href: "/articole/cum-verifici-daca-ai-iti-mentioneaza-afacerea", label: "Cum verifici dacă AI-ul îți menționează afacerea" },
    ],
  },
  {
    slug: "cum-verifici-daca-ai-iti-mentioneaza-afacerea",
    title: "Cum verifici dacă ChatGPT, Gemini sau Perplexity îți menționează afacerea",
    description:
      "Un test simplu, în 30 de minute, ca să afli dacă asistenții AI îți recomandă afacerea. Ce întrebări să pui, cum notezi rezultatele și cum interpretezi răspunsurile.",
    category: "Căutare AI",
    date: "2026-11-18",
    readMin: 5,
    blocks: [
      { t: "p", text: "Poți afla în jumătate de oră dacă asistenții AI îți menționează afacerea. Nu ai nevoie de unelte plătite, doar de câteva întrebări bine alese și de un tabel în care notezi ce vezi." },
      { t: "h2", text: "Pasul 1: alege 6–10 întrebări reale" },
      { t: "p", text: "Gândește-te cum ar întreba un client care nu te cunoaște. Amestecă tipurile de întrebări:" },
      { t: "ul", items: [
        "Căutare generală: „care e o clinică stomatologică bună în Cluj-Napoca?”",
        "Problemă concretă: „la cine merg pentru un litigiu de muncă în Cluj?”",
        "Comparație: „[numele tău] sau [concurent], ce să aleg?”",
        "Nume direct: „ce părere ai despre [numele afacerii tale]?”",
      ] },
      { t: "h2", text: "Pasul 2: pune-le în mai multe asistente" },
      { t: "p", text: "Încearcă ChatGPT, Gemini, Claude și Perplexity, plus răspunsurile AI din Google, acolo unde apar. Folosește o conversație nouă pentru fiecare întrebare, ideal fără istoric, ca răspunsul să nu fie influențat de discuții anterioare." },
      { t: "h2", text: "Pasul 3: repetă și notează" },
      { t: "p", text: "Răspunsurile se schimbă. Rulează fiecare întrebare de 2–3 ori și notează într-un tabel:" },
      { t: "table", head: ["Întrebare", "Asistent", "Menționat?", "Poziție", "Descris corect?", "Concurenți apăruți"], rows: [
        ["…", "ChatGPT", "Da / Nu", "1, 2, 3…", "Da / Nu", "…"],
      ] },
      { t: "h2", text: "Pasul 4: citește răspunsul critic" },
      { t: "ul", items: [
        "Ești menționat deloc? Dacă nu, problema e de prezență.",
        "Informațiile (adresă, servicii, program) sunt corecte? Dacă nu, problema e de consecvență.",
        "Ce surse sunt citate? Dacă apar directoare sau articole în locul site-ului tău, acolo trebuie să fii bine prezentat.",
        "Cine apare în locul tău? Concurenții din răspuns îți arată ce surse și ce formulări funcționează.",
      ] },
      { t: "h2", text: "Cât de des să repeți" },
      { t: "p", text: "O dată pe lună e suficient pentru o afacere locală. Păstrează aceleași întrebări, ca să poți compara în timp. Primul test e punctul tău de pornire." },
      { t: "h2", text: "Limitele testului" },
      { t: "p", text: "Un test manual e un indiciu, nu o statistică. Locația, istoricul contului și momentul pot schimba răspunsul. Folosește-l ca să vezi direcția, nu ca să tragi concluzii dintr-o singură rulare." },
      { t: "p", text: "Dacă preferi să nu o faci singur, îți fac eu un audit manual, gratuit, în maximum 24 de ore." },
    ],
    faq: [
      { q: "Trebuie să plătesc ca să testez?", a: "Nu. Poți folosi versiunile gratuite ale asistentelor. Unele funcții de căutare web pot avea limite în planurile gratuite." },
      { q: "De ce răspunsul diferă de la o rulare la alta?", a: "Modelele generează răspunsul de fiecare dată, iar sursele și formulările pot varia. De aceea repetăm întrebările." },
    ],
    related: [
      { href: "/audit-gratuit-vizibilitate-ai", label: "Cere auditul gratuit" },
      { href: "/articole/ce-este-geo-optimizare-pentru-motoare-ai", label: "Ce este GEO" },
    ],
  },
  {
    slug: "10-semne-ca-site-ul-tau-este-depasit",
    title: "10 semne că site-ul tău e depășit (și ce să faci)",
    description:
      "Un site vechi costă încredere și clienți. Iată 10 semne clare că e timpul pentru un redesign și ce poți verifica singur, în 15 minute.",
    category: "Redesign",
    date: "2026-11-18",
    readMin: 5,
    blocks: [
      { t: "p", text: "Un site nu „expiră” într-o zi, dar se învechește treptat: designul, viteza, conținutul și felul în care e citit de Google și de AI. Iată zece semne că e momentul să-l refaci." },
      { t: "ol", items: [
        "Nu arată bine pe telefon. Dacă trebuie să mărești textul sau să derulezi lateral, pierzi vizitatori.",
        "Se încarcă greu. Testează-l pe telefon, cu date mobile, nu doar pe Wi-Fi.",
        "Nu e clar ce oferi în primele secunde. Un vizitator trebuie să înțeleagă rapid cine ești, ce faci și ce să facă mai departe.",
        "Nu e clar cum te contactează cineva. Telefonul, formularul sau programarea trebuie să fie la un click distanță.",
        "Designul pare din altă epocă: fonturi mici, culori obosite, imagini de stoc generice.",
        "Îl actualizezi greu sau depinzi de cineva ca să schimbi un text.",
        "Nu apari bine în Google sau nu ești menționat deloc în răspunsurile AI.",
        "Nu are date structurate (schema) care să spună motoarelor cine ești și ce servicii ai.",
        "Probleme de accesibilitate: contrast slab, imagini fără descriere, navigare imposibilă de la tastatură.",
        "Conținutul e vechi sau lipsesc răspunsurile la întrebările pe care le pun clienții.",
      ] },
      { t: "h2", text: "Cum verifici în 15 minute" },
      { t: "ul", items: [
        "Rulează site-ul prin Google PageSpeed Insights (gratuit) și notează scorurile pe mobil.",
        "Deschide-l pe telefon și încearcă să faci o programare sau să suni, ca un client nou.",
        "Caută-ți afacerea în Google și într-un asistent AI și vezi ce apare.",
      ] },
      { t: "h2", text: "Redesign sau doar actualizare?" },
      { t: "p", text: "Dacă ai 1–2 probleme punctuale, de obicei ajung corecturi. Dacă ai mai multe dintre cele de mai sus, un redesign complet iese de regulă mai eficient. Important e să-l faci fără să pierzi pozițiile câștigate în Google. Vezi ghidul despre cum faci asta." },
    ],
    faq: [
      { q: "Cât de des ar trebui refăcut un site?", a: "Nu există o regulă fixă. Mai important e să verifici periodic viteza, claritatea ofertei, accesibilitatea și cum apari în Google și în AI. Când problemele se adună, e timpul pentru redesign." },
      { q: "Pot face un redesign fără să-mi pierd clienții actuali?", a: "Da. Cu o migrare atentă, adresele importante se păstrează sau se redirecționează, iar clienții găsesc aceleași informații, mai clar prezentate." },
    ],
    related: [
      { href: "/servicii/redesign-website", label: "Redesign de website" },
      { href: "/articole/redesign-site-fara-sa-pierzi-pozitiile-din-google", label: "Redesign fără să pierzi pozițiile din Google" },
    ],
  },
  {
    slug: "redesign-site-fara-sa-pierzi-pozitiile-din-google",
    title: "Cum faci redesign la site fără să pierzi pozițiile din Google",
    description:
      "Redesign sigur pentru SEO, pas cu pas: inventarul paginilor, redirecturi 301, testare înainte de lansare și monitorizare după.",
    category: "Redesign",
    date: "2026-11-18",
    readMin: 6,
    blocks: [
      { t: "p", text: "Un redesign poate scădea traficul din Google, dar nu trebuie să se întâmple. Problema apare de obicei când se schimbă adresele paginilor fără redirecturi sau când dispare conținutul care aducea vizitatori. Iată pașii prin care eviți asta." },
      { t: "h2", text: "1. Fă un inventar al paginilor actuale" },
      { t: "p", text: "Listează toate adresele site-ului, cu un crawler sau din Google Search Console. Notează care aduc trafic, care au linkuri externe și care sunt importante pentru afacere." },
      { t: "h2", text: "2. Notează punctul de pornire" },
      { t: "p", text: "Salvează pozițiile, clickurile și traficul din Search Console și Analytics, plus scorurile de viteză. Fără ele nu poți demonstra ce s-a schimbat după lansare." },
      { t: "h2", text: "3. Păstrează ce funcționează" },
      { t: "ul", items: [
        "Păstrează adresele (URL-urile) care aduc trafic, când e posibil.",
        "Păstrează titlurile, titlurile de secțiune și conținutul paginilor care se clasează bine, îmbunătățindu-le, nu ștergându-le.",
        "Păstrează legăturile interne importante.",
      ] },
      { t: "h2", text: "4. Fă o hartă de redirecturi 301" },
      { t: "p", text: "Dacă o adresă se schimbă, redirecționează permanent (301) pagina veche către cea mai apropiată pagină nouă, nu către prima pagină. Verifică să nu existe lanțuri de redirecturi." },
      { t: "h2", text: "5. Testează înainte de lansare" },
      { t: "ul", items: [
        "Lucrează pe o versiune de test, blocată pentru motoarele de căutare.",
        "Înainte de lansare, scoate blocajul de indexare. Uitarea unui „noindex” e o greșeală frecventă.",
        "Verifică redirecturile, titlurile, descrierile, linkurile și datele structurate.",
      ] },
      { t: "h2", text: "6. Lansează și trimite sitemap-ul" },
      { t: "p", text: "După lansare, trimite noul sitemap în Search Console și verifică dacă paginile importante sunt indexate." },
      { t: "h2", text: "7. Monitorizează după lansare" },
      { t: "p", text: "În primele săptămâni urmărește erorile 404, indexarea și clickurile. Mici fluctuații după un redesign sunt normale, dar o scădere persistentă cere investigație." },
      { t: "h2", text: "Greșeli frecvente" },
      { t: "ul", items: [
        "Redirecționarea tuturor paginilor vechi către pagina principală.",
        "Ștergerea paginilor care aduceau trafic.",
        "Lăsarea blocajului de indexare activ după lansare.",
        "Schimbarea simultană a prea multor lucruri, fără a nota punctul de pornire.",
      ] },
    ],
    faq: [
      { q: "Pot pierde poziții chiar dacă fac totul corect?", a: "Mici fluctuații pot apărea, pentru că Google reprocesează site-ul. Cu o migrare atentă, de obicei se stabilizează. Dacă scăderea persistă, se investighează cauza." },
      { q: "Trebuie să-mi păstrez exact aceleași adrese?", a: "Nu neapărat, dar e mai sigur. Când le schimbi, folosește redirecturi 301 către paginile corespunzătoare." },
    ],
    related: [
      { href: "/servicii/redesign-website", label: "Redesign de website" },
      { href: "/articole/10-semne-ca-site-ul-tau-este-depasit", label: "10 semne că site-ul tău e depășit" },
    ],
  },
  {
    slug: "schema-markup-pentru-clinici-si-cabinete",
    title: "Date structurate (schema markup) pentru clinici și cabinete: ghid simplu",
    description:
      "Ce este schema markup, ce tipuri se potrivesc unei clinici sau unui cabinet de avocatură, un exemplu JSON-LD și cum îl testezi.",
    category: "SEO tehnic",
    date: "2026-11-18",
    readMin: 6,
    blocks: [
      { t: "p", text: "Datele structurate (schema markup) sunt un strat de informații, scris într-un format pe care mașinile îl înțeleg, care spune motoarelor de căutare și asistenților AI ce este o pagină: o clinică, un serviciu, un articol, un răspuns la o întrebare. Oamenii nu îl văd, dar roboții îl citesc." },
      { t: "h2", text: "De ce ajută" },
      { t: "p", text: "Un text poate fi interpretat greșit. Datele structurate spun explicit: aceasta este o clinică, în acest oraș, cu aceste servicii. Asta reduce ambiguitatea și ajută la afișarea corectă în căutări și în răspunsuri. Nu garantează poziții sau recomandări, dar îți dă o bază curată." },
      { t: "h2", text: "Ce tipuri se potrivesc" },
      { t: "ul", items: [
        "Clinici și cabinete medicale: MedicalClinic, Physician, Dentist (după caz).",
        "Cabinete de avocatură: LegalService sau Attorney.",
        "Orice afacere locală: LocalBusiness sau ProfessionalService.",
        "Pagini de servicii: Service.",
        "Pagini cu întrebări și răspunsuri: FAQPage.",
        "Articole: Article.",
        "Navigare: BreadcrumbList.",
      ] },
      { t: "h2", text: "Exemplu (JSON-LD)" },
      { t: "p", text: "Exemplul de mai jos este ilustrativ: valorile sunt fictive și trebuie înlocuite cu datele reale ale afacerii tale." },
      { t: "code", text: `<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "MedicalClinic",
  "name": "Clinica Exemplu",
  "url": "https://www.exemplu.ro",
  "telephone": "+40 000 000 000",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Strada Exemplu 1",
    "addressLocality": "Cluj-Napoca",
    "addressCountry": "RO"
  },
  "openingHours": "Mo-Fr 09:00-18:00"
}
</script>` },
      { t: "h2", text: "Reguli de bază" },
      { t: "ul", items: [
        "Marchează doar ce se vede efectiv pe pagină. Nu adăuga informații care nu există în conținut.",
        "Nu inventa recenzii sau evaluări.",
        "Păstrează datele identice cu cele din profilul Google al afacerii și din directoare.",
        "Folosește adrese complete (URL-uri absolute) și date în format ISO.",
        "Pentru conținut medical sau juridic, informațiile le aprobă specialistul, nu cel care face tehnica.",
      ] },
      { t: "h2", text: "Cum testezi" },
      { t: "p", text: "Folosește Rich Results Test de la Google și Schema Markup Validator de la schema.org. Verifică erorile și avertismentele, apoi retestează după fiecare modificare. Rezultatele îmbogățite pentru FAQ sunt acum afișate de Google doar în anumite situații, dar structura rămâne utilă pentru înțelegerea paginii." },
    ],
    faq: [
      { q: "Trebuie să știu să programez ca să adaug schema?", a: "Nu neapărat. Multe platforme au module pentru asta, dar rezultatul corect depinde de datele pe care le introduci. Eu o includ în fiecare site pe care îl livrez." },
      { q: "Schema îmi garantează o poziție mai bună?", a: "Nu. Ajută motoarele să te înțeleagă corect, dar pozițiile depind de mulți alți factori." },
    ],
    related: [
      { href: "/servicii/seo-vizibilitate-ai", label: "SEO și vizibilitate în AI" },
      { href: "/servicii/creare-website", label: "Creare de website" },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
