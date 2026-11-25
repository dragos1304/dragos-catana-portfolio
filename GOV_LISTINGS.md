# Government supplier listings: copy-paste kit

Checked 25 Nov 2026. Shared details come from `PROFILES.md` and `lib/site-config.ts`. `[brackets]` = only you know it.

## What applies to a business in Cluj

| Playbook step | Verdict | Why |
|---|---|---|
| 1. SAM.gov | Possible, skip for now | Free. A non-US business must get an NCAGE code first, with an identical name and address. [Checklist](https://sam.gov/sites/default/files/2024-11/entity-checklist.pdf) |
| 2. SBA small business box | **Not eligible: do not tick** | A small business must have "a place of business located in the United States" and operate mainly there or contribute significantly to its economy. [13 CFR 121.105](https://www.ecfr.gov/current/title-13/chapter-I/part-121). A false self-certification to the US government is a legal risk. |
| 3. US state portal | Skip | Meant for businesses that sell to that state. Only revisit with a real US entity. |
| 5. Romania: SEAP / SICAP | **Do this first** | National procurement portal, e-licitatie.ro |
| 5. EU: Participant Register (PIC) | Optional, second | Free; also accepts individuals |

If you set up a US company, redo steps 1-3 for that company. If you are in the US on a student visa, ask the school's international office before doing any business there.

## Before you start
- [ ] **Legal form and CUI** (PFA, II or SRL): `[CUI]`, `[ONRC number]`. The repo has neither. Without a registered business, SEAP cannot be completed, because it asks for the CUI and the ONRC certificate.
- [ ] ONRC certificate, scanned.
- [ ] Registered office exactly as at ONRC: `[address]`. If it differs from Strada Jorj Voicu 2-4, the registries must get the ONRC one; decide then whether to align the Google profile.
- [ ] Qualified electronic signature. Registration also has a manual validation route, but offers need the signature. It is paid, so decide before buying.

## Same on every form

| Field | Value |
|---|---|
| Legal name | `[exactly as on the ONRC certificate]` |
| Trade name, where there is a field | Dragoș Catană (no diacritics: Dragos Catana) |
| Address | Strada Jorj Voicu 2-4, 400482 Cluj-Napoca, Cluj, România (if it matches ONRC) |
| Phone | +40 740 939 472 |
| E-mail | me@dragoscatana.com |
| Website | https://dragoscatana.com |

## A. SEAP / SICAP (Romania)
Start: https://e-licitatie.ro/reg/account/register → Ofertant → cont nou. Official form; account registration has no fee ([guide, Nov 2026](https://licitatii.app/ghiduri/cum-te-inregistrezi-in-seap/), a private site: confirm costs in your account).

1. Accept the terms yourself, choose România, entity type, CUI.
2. Company, legal representative and user details, identical to ONRC.
3. Sign electronically or attach the ONRC certificate for manual validation.
4. Wait for approval, install the access certificate.
5. Add the catalogue item. The guide reports one free position for a year, then 10 lei + VAT per position per year; and 100 lei + VAT per extra procedure entry after one free per month.

**CPV codes**
- 72413000-8 Servicii de proiectare de site-uri WWW (main; real public purchases use it)
- 72420000-0 Servicii de dezvoltare de internet (confirm in SEAP's list)
- 79342000-3 Servicii de marketing (confirm in SEAP's list)

**Descriere firmă**
```
Creare și redesign de site-uri web, optimizare SEO, vizibilitate în asistenții AI și mentenanță web. Site-uri rapide, adaptate pentru mobil, cu date structurate și structură clară. Sediu în Cluj-Napoca; lucrez online în toată România. https://dragoscatana.com
```
**Catalog: denumire**
```
Servicii de creare și redesign site web
```
**Catalog: descriere**
```
Proiectare și realizare sau redesign de site web de prezentare: analiza site-ului existent, structură de pagini, design adaptat pentru mobil, implementare, optimizare SEO tehnică, date structurate, redirecționări pentru adresele vechi și instruire la predare. Livrabilele și termenul se stabilesc prin caietul de sarcini. Detalii: https://dragoscatana.com/servicii/
```
**Preț:** `[your real price, lei fără TVA]`. Catalogue items show a price publicly. Nothing is filled in because prices are not published on the site.

**Does it give a link?** Not confirmed. The pages I could see show direct purchases and prices; I did not find a public supplier page with a clickable website, and the portal is on e-licitatie.ro, not a .gov.ro domain. Count it as a real business listing, not as a backlink, until you see one.

## B. EU Funding & Tenders Portal
[Participant Register](https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/how-to-participate/participant-register): EU Login, search for an existing PIC, then register. The [manual](https://webgate.ec.europa.eu/funding-tenders-opportunities/spaces/OM/pages/1867804/Registration+and+validation+of+your+organisation) says individuals can use it and may enter a passport number, so you type that yourself. The PIC stays "declared" until you win something. A public page with your website is not confirmed.
**Description (EN)**
```
Web design and SEO practice in Cluj-Napoca, Romania. Website design and redesign, technical and local SEO, visibility in AI assistants, and website maintenance for clinics, law firms and local businesses. https://dragoscatana.com
```

## C. Never pay for
Registering on SAM.gov, SEAP or the EU register is free. Middlemen charge for it. The electronic signature and SEAP participation fees are separate, real costs.

## D. After each approval
- [ ] Search `"Dragos Catana"` with `site:e-licitatie.ro`, `site:europa.eu`, `site:gov.ro`; also search your CUI.
- [ ] Open the listing signed out. Does it show the website, name and address as above?
- [ ] Log it here. Only add public listings to `directories` in `lib/site-config.ts`.
- [ ] Ask ChatGPT, Gemini and Perplexity "Este Dragoș Catană din Cluj o firmă reală?" and note the sources.

| Listing | Public URL | Website shown? | Clickable? | Date |
|---|---|---|---|---|
| Baseline web search, .gov / .gov.ro / e-licitatie.ro / europa.eu | none found in one search | - | - | 2026-11-25 |
