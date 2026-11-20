export type Block =
  | { t: "h2" | "h3" | "p"; text: string }
  | { t: "ul" | "ol"; items: string[] }
  | { t: "code"; text: string }
  | { t: "table"; head: string[]; rows: string[][] };

export type Article = {
  slug: string;
  title: string;
  /** Shorter title for the <title> tag when the headline runs past ~60 characters. */
  seoTitle?: string;
  description: string;
  category: "Căutare AI" | "Redesign" | "SEO tehnic" | "Ghid SEO" | "SEO local";
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
      { t: "p", text: "Un pacient sau un client poate întreba direct un asistent: „care este o clinică bună din orașul meu?” sau „ce avocat se ocupă de dreptul muncii?”. Răspunsul conține câteva nume, uneori cu surse. Dacă ești în acel răspuns, ești luat în calcul. Dacă nu, concurentul tău poate câștiga clientul fără ca tu să afli vreodată că a existat căutarea." },
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
        "Adaugă date structurate (schema.org) pentru organizație, serviciu, întrebări frecvente și articole.",
        "Păstrează aceleași date (nume, adresă, telefon, descriere) pe site, profilul Google al afacerii, în cataloagele online de firme și pe rețelele sociale.",
        "Adună recenzii reale și mențiuni în surse de încredere.",
        "Permite roboții AI relevanți în robots.txt și verifică să nu fie blocați de paravanul de protecție (firewall) sau de rețeaua de livrare (CDN).",
        "Testează lunar întrebările reale ale clienților și notează ce se schimbă.",
      ] },
      { t: "h2", text: "Ce nu poate promite nimeni" },
      { t: "p", text: "Răspunsurile AI variază de la o încercare la alta și de la un utilizator la altul, iar modelele se actualizează în ritmul lor. De aceea orice garanție de tip „locul 1 în ChatGPT” e un semn de alarmă. Ce se poate promite este un proces: măsurare, îmbunătățiri concrete și rapoarte clare." },
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
    seoTitle: "Cum verifici dacă ChatGPT îți menționează afacerea",
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
        "Căutare generală: „care este o clinică stomatologică bună din Cluj-Napoca?”",
        "Problemă concretă: „la cine merg pentru un litigiu de muncă în Cluj?”",
        "Comparație: „[numele tău] sau [concurent], ce să aleg?”",
        "Nume direct: „ce părere ai despre [numele afacerii tale]?”",
      ] },
      { t: "h2", text: "Pasul 2: pune-le în mai mulți asistenți" },
      { t: "p", text: "Încearcă ChatGPT, Gemini, Claude și Perplexity, plus răspunsurile AI din Google, acolo unde apar. Folosește o conversație nouă pentru fiecare întrebare, ideal fără istoric, ca răspunsul să nu fie influențat de discuții anterioare." },
      { t: "h2", text: "Pasul 3: repetă și notează" },
      { t: "p", text: "Răspunsurile se schimbă. Pune fiecare întrebare de 2–3 ori și notează într-un tabel:" },
      { t: "table", head: ["Întrebare", "Asistent", "Menționat?", "Poziție", "Descris corect?", "Concurenți apăruți"], rows: [
        ["…", "ChatGPT", "Da / Nu", "1, 2, 3…", "Da / Nu", "…"],
      ] },
      { t: "h2", text: "Pasul 4: citește răspunsul critic" },
      { t: "ul", items: [
        "Ești menționat deloc? Dacă nu, problema e de prezență.",
        "Informațiile (adresă, servicii, program) sunt corecte? Dacă nu, problema e de consecvență.",
        "Ce surse sunt citate? Dacă apar cataloage online sau articole în locul site-ului tău, acolo trebuie să fii bine prezentat.",
        "Cine apare în locul tău? Concurenții din răspuns îți arată ce surse și ce formulări funcționează.",
      ] },
      { t: "h2", text: "Cât de des să repeți" },
      { t: "p", text: "O dată pe lună e suficient pentru o afacere locală. Păstrează aceleași întrebări, ca să poți compara în timp. Primul test e punctul tău de pornire." },
      { t: "h2", text: "Limitele testului" },
      { t: "p", text: "Un test manual e un indiciu, nu o statistică. Locația, istoricul contului și momentul pot schimba răspunsul. Folosește-l ca să vezi direcția, nu ca să tragi concluzii dintr-o singură încercare." },
      { t: "p", text: "Dacă preferi să nu o faci singur, îți fac eu un audit manual, gratuit, în maximum 24 de ore." },
    ],
    faq: [
      { q: "Trebuie să plătesc ca să testez?", a: "Nu. Poți folosi versiunile gratuite ale asistenților. Unele funcții de căutare web pot avea limite în planurile gratuite." },
      { q: "De ce diferă răspunsul de la o încercare la alta?", a: "Modelele generează răspunsul de fiecare dată, iar sursele și formulările pot varia. De aceea repetăm întrebările." },
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
        "Nu e clar cum te contactează cineva. Telefonul, formularul sau programarea trebuie să se poată folosi dintr-o singură atingere.",
        "Designul pare din altă epocă: fonturi mici, culori obosite, imagini generice din bănci de imagini.",
        "Îl actualizezi greu sau depinzi de cineva ca să schimbi un text.",
        "Nu apari bine în Google sau nu ești menționat deloc în răspunsurile AI.",
        "Nu are date structurate (schema) care să spună motoarelor cine ești și ce servicii ai.",
        "Probleme de accesibilitate: contrast slab, imagini fără descriere, navigare imposibilă de la tastatură.",
        "Conținutul e vechi sau lipsesc răspunsurile la întrebările pe care le pun clienții.",
      ] },
      { t: "h2", text: "Cum verifici în 15 minute" },
      { t: "ul", items: [
        "Verifică site-ul cu Google PageSpeed Insights (gratuit) și notează scorurile pe mobil.",
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
      "Redesign sigur pentru SEO, pas cu pas: inventarul paginilor, redirecționări 301, testare înainte de lansare și monitorizare după.",
    category: "Redesign",
    date: "2026-11-18",
    readMin: 6,
    blocks: [
      { t: "p", text: "Un redesign poate scădea traficul din Google, dar nu trebuie să se întâmple. Problema apare de obicei când se schimbă adresele paginilor fără redirecționări sau când dispare conținutul care aducea vizitatori. Iată pașii prin care eviți asta." },
      { t: "h2", text: "1. Fă un inventar al paginilor actuale" },
      { t: "p", text: "Listează toate adresele site-ului, cu un program care parcurge site-ul (crawler) sau din Google Search Console. Notează care aduc trafic, care au linkuri externe și care sunt importante pentru afacere." },
      { t: "h2", text: "2. Notează punctul de pornire" },
      { t: "p", text: "Salvează pozițiile, clickurile și traficul din Search Console și Analytics, plus scorurile de viteză. Fără ele nu poți demonstra ce s-a schimbat după lansare." },
      { t: "h2", text: "3. Păstrează ce funcționează" },
      { t: "ul", items: [
        "Păstrează adresele (URL-urile) care aduc trafic, când e posibil.",
        "Păstrează titlurile, titlurile de secțiune și conținutul paginilor care se clasează bine, îmbunătățindu-le, nu ștergându-le.",
        "Păstrează legăturile interne importante.",
      ] },
      { t: "h2", text: "4. Fă o hartă a redirecționărilor 301" },
      { t: "p", text: "Dacă o adresă se schimbă, redirecționează permanent (301) pagina veche către cea mai apropiată pagină nouă, nu către prima pagină. Verifică să nu existe lanțuri de redirecționări." },
      { t: "h2", text: "5. Testează înainte de lansare" },
      { t: "ul", items: [
        "Lucrează pe o versiune de test, blocată pentru motoarele de căutare.",
        "Înainte de lansare, scoate blocajul de indexare. Uitarea unui „noindex” este o greșeală frecventă.",
        "Verifică redirecționările, titlurile, descrierile, linkurile și datele structurate.",
      ] },
      { t: "h2", text: "6. Lansează și trimite sitemapul" },
      { t: "p", text: "După lansare, trimite noul sitemap în Search Console și verifică dacă paginile importante sunt indexate." },
      { t: "h2", text: "7. Monitorizează după lansare" },
      { t: "p", text: "În primele săptămâni urmărește erorile 404, indexarea și clickurile. Mici fluctuații după un redesign sunt normale, dar o scădere persistentă trebuie investigată." },
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
      { q: "Trebuie să-mi păstrez exact aceleași adrese?", a: "Nu neapărat, dar e mai sigur. Când le schimbi, folosește redirecționări 301 către paginile corespunzătoare." },
    ],
    related: [
      { href: "/servicii/redesign-website", label: "Redesign de website" },
      { href: "/articole/10-semne-ca-site-ul-tau-este-depasit", label: "10 semne că site-ul tău e depășit" },
    ],
  },
  {
    slug: "schema-markup-pentru-clinici-si-cabinete",
    title: "Date structurate (schema markup) pentru clinici și cabinete: ghid simplu",
    seoTitle: "Schema markup pentru clinici și cabinete: ghid",
    description:
      "Ce este schema markup, ce tipuri se potrivesc unei clinici sau unui cabinet de avocatură, un exemplu JSON-LD și cum îl testezi.",
    category: "SEO tehnic",
    date: "2026-11-18",
    readMin: 6,
    blocks: [
      { t: "p", text: "Datele structurate (schema markup) sunt un strat de informații, scris într-un format pe care calculatoarele îl pot citi, care spune motoarelor de căutare și asistenților AI ce este o pagină: o clinică, un serviciu, un articol, un răspuns la o întrebare. Oamenii nu îl văd, dar roboții îl citesc." },
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
        "Păstrează datele identice cu cele din profilul Google al afacerii și din cataloagele online de firme.",
        "Folosește adrese complete (URL-uri absolute) și date în format ISO.",
        "Pentru conținut medical sau juridic, informațiile le aprobă specialistul, nu cel care face tehnica.",
      ] },
      { t: "h2", text: "Cum testezi" },
      { t: "p", text: "Folosește Rich Results Test de la Google și Schema Markup Validator de la schema.org. Verifică erorile și avertismentele, apoi retestează după fiecare modificare. Rezultatele îmbogățite pentru FAQ sunt acum afișate de Google doar în anumite situații, dar structura rămâne utilă pentru înțelegerea paginii." },
    ],
    faq: [
      { q: "Trebuie să știu să programez ca să adaug date structurate?", a: "Nu neapărat. Multe platforme au module pentru asta, dar rezultatul corect depinde de datele pe care le introduci. Eu o includ în fiecare site pe care îl livrez." },
      { q: "Datele structurate îmi garantează o poziție mai bună?", a: "Nu. Ajută motoarele să te înțeleagă corect, dar pozițiile depind de mulți alți factori." },
    ],
    related: [
      { href: "/servicii/website-clinici-medicale", label: "Site pentru clinici și cabinete medicale" },
      { href: "/servicii/seo-vizibilitate-ai", label: "SEO și vizibilitate în AI" },
      { href: "/servicii/creare-website", label: "Creare de website" },
    ],
  },
  {
    slug: "ce-este-seo",
    title: "Ce este SEO? Ghid simplu pentru afaceri locale",
    description:
      "Ce înseamnă SEO, cum funcționează Google și ce poate face concret o clinică, un cabinet sau o afacere locală ca să fie găsită. Explicat simplu, fără jargon.",
    category: "Ghid SEO",
    date: "2026-11-19",
    readMin: 8,
    blocks: [
      { t: "p", text: "SEO (Search Engine Optimization), adică optimizarea pentru motoarele de căutare, înseamnă tot ce faci ca site-ul tău să apară cât mai sus în Google atunci când oamenii caută ce oferi. Pe scurt: ce înseamnă SEO pentru o afacere locală? Înseamnă ca pacientul care scrie „stomatolog Cluj” sau clientul care caută „avocat dreptul muncii” să te găsească pe tine, nu doar pe concurent." },
      { t: "p", text: "Scriu acest ghid pentru proprietari de clinici, cabinete și afaceri locale care nu vor să devină specialiști, dar vor să înțeleagă pe ce dau bani și ce pot cere de la cine le face site-ul." },
      { t: "h2", text: "Ce este SEO, pe înțelesul tuturor" },
      { t: "p", text: "Google are un singur obiectiv: să-i arate fiecărui om cel mai util rezultat pentru întrebarea lui. Optimizarea SEO înseamnă să-l ajuți pe Google să înțeleagă trei lucruri despre tine: ce faci, pentru cine și de ce ești o alegere de încredere." },
      { t: "p", text: "Nu e un truc și nici un buton secret. E o combinație de site bine construit, conținut clar și o reputație vizibilă în afara site-ului." },
      { t: "h2", text: "Cum funcționează Google, în trei pași" },
      { t: "ol", items: [
        "Descoperire (crawling): roboții Google parcurg internetul și îți găsesc paginile, de obicei urmând linkuri și sitemapul.",
        "Indexare: Google citește fiecare pagină și o păstrează în indexul lui, ca într-o bibliotecă uriașă. O pagină neindexată nu poate apărea în rezultate.",
        "Clasare (ranking): când cineva caută, Google alege din index paginile care răspund cel mai bine și le ordonează.",
      ] },
      { t: "p", text: "Majoritatea problemelor pe care le văd la site-urile locale apar la primii doi pași: pagini pe care Google nu le poate citi bine sau care nu spun clar ce serviciu oferă și unde." },
      { t: "h2", text: "Cei patru piloni ai optimizării SEO" },
      { t: "h3", text: "1. SEO tehnic" },
      { t: "p", text: "Fundația: site-ul se încarcă repede pe telefon, poate fi citit de Google, are adrese curate, HTTPS, sitemap și nu are pagini stricate. Dacă fundația are fisuri, conținutul bun nu ajunge să conteze." },
      { t: "h3", text: "2. Conținut" },
      { t: "p", text: "Pagini care răspund exact la ce caută oamenii: câte o pagină pentru fiecare serviciu important, explicat în limbajul pacientului sau al clientului, nu în jargonul tău profesional. Titluri clare, întrebări frecvente reale, informații concrete." },
      { t: "h3", text: "3. Autoritate și încredere" },
      { t: "p", text: "Semnale din afara site-ului: alte site-uri care te menționează sau trimit un link spre tine, cataloage de profil, articole în presa locală, recenzii. Google le citește ca pe niște recomandări." },
      { t: "h3", text: "4. SEO local" },
      { t: "p", text: "Pentru o afacere cu clienți dintr-un oraș sau o zonă, SEO local e de multe ori cel mai rapid câștig: profilul Google al afacerii (Google Business Profile), recenzii, același nume, adresă și telefon peste tot și pagini care menționează clar orașul. Am scris un ghid separat despre Google Business Profile, pas cu pas." },
      { t: "h2", text: "SEO sau reclame plătite?" },
      { t: "table", head: ["", "SEO", "Reclame Google"], rows: [
        ["Cost", "Muncă și timp, fără plată per click", "Plătești fiecare click"],
        ["Viteză", "Rezultatele vin în săptămâni sau luni", "Apari din prima zi"],
        ["Durată", "Rezultatele rămân și după ce te oprești", "Vizibilitatea dispare când oprești bugetul"],
        ["Încredere", "Mulți oameni au mai multă încredere în rezultatele organice (neplătite)", "Marcate ca „Sponsorizat”"],
      ] },
      { t: "p", text: "Nu sunt în competiție. Reclamele aduc clienți repede, SEO-ul construiește un activ care lucrează pentru tine pe termen lung. Pentru o afacere locală mică, recomand de obicei să începi cu bazele SEO și cu profilul Google, apoi să adaugi reclame dacă bugetul permite." },
      { t: "h2", text: "SEO și asistenții AI" },
      { t: "p", text: "Tot mai mulți oameni întreabă ChatGPT, Gemini sau Perplexity în loc să caute în Google. Vestea bună: aceleași lucruri care te ajută în Google (site clar, informații consecvente, reputație vizibilă) te ajută și să fii recomandat de AI. Optimizarea pentru asistenții AI se numește GEO și se construiește peste un SEO sănătos." },
      { t: "h2", text: "Ce poți face chiar de mâine" },
      { t: "ul", items: [
        "Caută-ți afacerea în Google pe telefon, ca un client nou. Ce vezi primul? E corect?",
        "Revendică sau verifică profilul Google al afacerii și completează-l până la capăt.",
        "Asigură-te că fiecare serviciu important are propria pagină, cu un titlu clar care conține serviciul și orașul.",
        "Verifică dacă numele, adresa și telefonul sunt identice pe site, pe Google și în cataloagele online de firme.",
        "Testează viteza site-ului pe mobil cu PageSpeed Insights (instrument gratuit de la Google).",
        "Cere-le clienților mulțumiți o recenzie. Simplu, fără să oferi ceva în schimb.",
      ] },
      { t: "h2", text: "Greșeli frecvente pe care le văd" },
      { t: "ul", items: [
        "Un singur text lung pe prima pagină, în loc de pagini separate pe servicii.",
        "Titluri de pagină generice, precum „Acasă” sau numele firmei, fără serviciu și oraș.",
        "Site făcut frumos, dar lent pe telefon.",
        "Promisiuni de tip „locul 1 garantat”. Nimeni nu poate garanta asta.",
        "Redesign fără redirecționări de la adresele vechi, care șterge pozițiile câștigate în ani.",
      ] },
      { t: "h2", text: "Cât durează și cum măsori rezultatele" },
      { t: "p", text: "Corecturile tehnice se pot vedea în câteva săptămâni, după ce Google recitește paginile. Pozițiile pe căutări cu concurență se construiesc de obicei în câteva luni. Măsori cu Google Search Console (gratuit): pe ce căutări apari, de câte ori, câte clickuri primești și pe ce poziție medie. Pentru o afacere, cifra care contează la final e alta: câte programări sau cereri vin din căutări." },
    ],
    faq: [
      { q: "Ce înseamnă SEO, pe scurt?", a: "Optimizarea pentru motoarele de căutare: tot ce faci ca site-ul tău să fie găsit în Google când oamenii caută serviciile tale. Include partea tehnică a site-ului, conținutul, reputația și, pentru afacerile locale, profilul Google al afacerii." },
      { q: "Pot face SEO singur?", a: "Bazele, da: profilul Google, pagini clare pe servicii, recenzii. Partea tehnică (viteză, indexare, date structurate, migrări) cere de obicei pe cineva care lucrează zilnic cu ele." },
      { q: "Cât costă optimizarea SEO?", a: "Depinde de cât de mult e de reparat și de concurența din domeniul și orașul tău. Eu nu afișez prețuri fixe: încep cu un audit gratuit și trimit apoi o ofertă clară." },
      { q: "Poate cineva să-mi garanteze locul 1 în Google?", a: "Nu. Google își schimbă algoritmii și nimeni din afară nu controlează rezultatele. Un specialist serios promite un proces măsurabil, nu o poziție." },
    ],
    related: [
      { href: "/articole/google-business-profile-ghid", label: "Google Business Profile: ghid pas cu pas" },
      { href: "/articole/ce-este-geo-optimizare-pentru-motoare-ai", label: "Ce este GEO (optimizarea pentru AI)" },
      { href: "/servicii/seo-vizibilitate-ai", label: "Serviciul de optimizare SEO și vizibilitate în AI" },
      { href: "/servicii/creare-website", label: "Creare site web, cu SEO inclus" },
      { href: "/audit-gratuit-vizibilitate-ai", label: "Audit SEO gratuit în 24 de ore" },
    ],
  },
  {
    slug: "google-business-profile-ghid",
    title: "Google Business Profile: ghid pas cu pas pentru afaceri locale",
    description:
      "Cum creezi și optimizezi profilul Google al afacerii, cum obții recenzii Google corect și ce greșeli să eviți. Ghid practic pentru clinici, cabinete și firme locale.",
    category: "SEO local",
    date: "2026-11-19",
    readMin: 8,
    blocks: [
      { t: "p", text: "Când cineva caută „clinică stomatologică lângă mine” sau „avocat Cluj”, primul lucru pe care îl vede de multe ori nu e un site, ci harta cu trei afaceri și profilurile lor Google. Profilul acela vine din Google Business Profile (fostul Google My Business): un instrument gratuit de la Google. Pentru multe afaceri locale e cea mai importantă pagină pe care o au, chiar înaintea site-ului." },
      { t: "h2", text: "De ce contează profilul Google al afacerii" },
      { t: "ul", items: [
        "Apari pe Google Maps și în harta din rezultatele de căutare locală.",
        "Oamenii te pot suna, pot cere indicații sau pot intra pe site direct din profil.",
        "Recenziile Google sunt printre primele lucruri pe care le citește un client nou.",
        "Asistenții AI folosesc și ei informații publice despre afaceri, iar un profil complet și consecvent te face ușor de verificat.",
      ] },
      { t: "h2", text: "Pasul 1: creezi sau revendici profilul" },
      { t: "p", text: "Intră pe google.com/business cu un cont Google pe care îl controlezi tu (nu contul personal al unui fost angajat sau al firmei care ți-a făcut site-ul). Caută numele afacerii: dacă există deja un profil, îl revendici; dacă nu, îl creezi." },
      { t: "p", text: "Dacă lucrezi la clienți acasă sau doar online, dar ai o zonă deservită, poți ascunde adresa și seta în schimb zona de servicii." },
      { t: "h2", text: "Pasul 2: verificarea" },
      { t: "p", text: "Google trebuie să confirme că afacerea e reală și că tu o administrezi. Metoda o alege Google, în funcție de afacere: poate fi un telefon sau un SMS, un e-mail, o înregistrare video scurtă cu locația și semnele afacerii, sau, mai rar, o carte poștală cu un cod. Până la verificare, profilul nu apare complet în căutări." },
      { t: "h2", text: "Pasul 3: completezi profilul până la capăt" },
      { t: "ol", items: [
        "Numele afacerii: exact numele real, fără cuvinte-cheie adăugate („Clinica X”, nu „Clinica X stomatolog ieftin Cluj”). Adăugarea de cuvinte-cheie în nume încalcă regulile Google și poate duce la suspendarea profilului.",
        "Categoria principală: cea mai precisă posibil (de exemplu „Clinică stomatologică”, nu doar „Clinică”). Apoi categorii secundare pentru celelalte servicii reale.",
        "Adresa, telefonul și site-ul: identice cu cele de pe site și din cataloagele online, literă cu literă.",
        "Programul: inclusiv programul de sărbători, actualizat din timp.",
        "Serviciile: lista serviciilor reale, cu o descriere scurtă.",
        "Linkul de programare, dacă ai programare online.",
        "Fotografii reale: fațada (ca oamenii să te recunoască), interiorul, echipa. Fără fotografii generice din bănci de imagini.",
        "Descrierea: ce faci, pentru cine și unde, în câteva fraze clare.",
      ] },
      { t: "h2", text: "Pasul 4: recenzii Google, făcute corect" },
      { t: "p", text: "Recenziile influențează atât poziția în hartă, cât și decizia clientului. Regulile Google sunt clare, iar încălcarea lor poate duce la ștergerea recenziilor sau la restricții pe profil." },
      { t: "h3", text: "Ce ai voie" },
      { t: "ul", items: [
        "Să le ceri tuturor clienților o recenzie, de exemplu printr-un link scurt trimis după vizită.",
        "Să răspunzi la fiecare recenzie, pozitivă sau negativă, politicos și fără informații personale despre client.",
        "Să raportezi recenziile care încalcă regulile Google (spam, conținut ofensator, conflict de interese).",
      ] },
      { t: "h3", text: "Ce nu ai voie" },
      { t: "ul", items: [
        "Să oferi reduceri, cadouri sau bani în schimbul recenziilor.",
        "Să ceri recenzii doar clienților despre care știi că sunt mulțumiți (așa-numitul „review gating”).",
        "Să scrii recenzii pentru propria afacere sau să le ceri angajaților.",
        "Să cumperi recenzii. Pe lângă riscul pe profil, e și înșelător pentru clienți.",
      ] },
      { t: "p", text: "Pentru clinici și cabinete de avocatură: când răspunzi la o recenzie, nu confirma că persoana a fost pacientul sau clientul tău și nu discuta detalii despre caz. Verifică și regulile organismului tău profesional privind publicitatea." },
      { t: "h2", text: "Pasul 5: îl ții la zi" },
      { t: "ul", items: [
        "Actualizezi programul și serviciile când se schimbă.",
        "Adaugi periodic fotografii noi.",
        "Publici din când în când o actualizare (o noutate, un serviciu nou, un eveniment).",
        "Verifici lunar statisticile din profil: câte apeluri, câte cereri de indicații, câte vizite pe site.",
      ] },
      { t: "h2", text: "Greșeli frecvente" },
      { t: "ul", items: [
        "Profil creat de altcineva, pe un cont la care nu mai ai acces.",
        "Adresă sau telefon diferite față de site.",
        "Categorie principală prea generală.",
        "Recenzii negative fără răspuns.",
        "Profiluri duplicate pentru aceeași locație.",
      ] },
    ],
    faq: [
      { q: "Google Business Profile e gratuit?", a: "Da. Crearea și administrarea profilului sunt gratuite. Plătești doar dacă alegi separat reclame Google." },
      { q: "Cât durează verificarea?", a: "Depinde de metoda aleasă de Google: uneori câteva minute (telefon, e-mail, video), alteori câteva zile, dacă se trimite o carte poștală." },
      { q: "Pot șterge o recenzie negativă?", a: "Nu poți șterge singur o recenzie. Poți raporta recenziile care încalcă regulile Google. Pentru celelalte, cel mai bun lucru e un răspuns calm și profesionist, pe care îl citesc și viitorii clienți." },
      { q: "Ajută profilul Google și la ChatGPT sau Gemini?", a: "Informațiile publice, consecvente și verificabile despre afacerea ta te fac mai ușor de înțeles pentru asistenții AI. Profilul Google e una dintre cele mai importante astfel de surse, alături de site." },
    ],
    related: [
      { href: "/articole/ce-este-seo", label: "Ce este SEO? Ghid simplu" },
      { href: "/articole/cum-verifici-daca-ai-iti-mentioneaza-afacerea", label: "Cum verifici dacă AI îți menționează afacerea" },
      { href: "/servicii/seo-vizibilitate-ai", label: "SEO local și vizibilitate în AI" },
      { href: "/servicii/website-clinici-medicale", label: "Site pentru clinici și cabinete medicale" },
      { href: "/servicii/website-cabinete-avocatura", label: "Site pentru avocați" },
      { href: "/audit-gratuit-vizibilitate-ai", label: "Audit SEO gratuit" },
    ],
  },
];

export const getArticle = (slug: string) => articles.find((a) => a.slug === slug);
