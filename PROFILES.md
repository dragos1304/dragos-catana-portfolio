# Profiles: copy-paste kit

Everything you need to fill in Google Search Console, Bing Webmaster Tools and six directory profiles. Every fact here comes from the live site; nothing is invented.

**Rules for every profile**
- **Same everywhere:** name, photo, city and one-line description. AI assistants trust an entity more when the same facts appear on independent sites.
- **No prices:** where a form asks for an hourly rate or a minimum budget, pick "Undisclosed" or "Contact for pricing". If the field is mandatory and has no such option, tell me and we'll decide together.
- **No invented numbers:** no client counts, review scores or results you can't show.
- **Placeholders:** anything in `[brackets]` is something only you know (your start year, your email).
- **Afterwards:** send me each profile's URL. I'll add it to `social` in `lib/site-config.ts`, and it will then show on the site, in llms.txt and in the schema `sameAs`.

---

## 0. Sitemap: Google Search Console and Bing

The sitemap is live and valid. On 20 Nov 2026 it returned 200 with 37 URLs, it is listed in `robots.txt`, and Googlebot and Bingbot can reach it. It only shows up in these tools after you submit it once.

**Google Search Console**
1. Open the `dragoscatana.com` property → **Indexing → Sitemaps**.
2. Under "Add a new sitemap":
   - **URL-prefix property** (the field already shows `https://dragoscatana.com/`): type only
     ```
     sitemap.xml
     ```
   - **Domain property** (the field is empty): paste the full URL
     ```
     https://dragoscatana.com/sitemap.xml
     ```
3. Click **Submit**. The status may say "Couldn't fetch" for a few hours at first; that is normal. Check it again the next day.

**Bing Webmaster Tools**
1. Open the site → **Sitemaps** → **Submit sitemap**.
2. Paste:
   ```
   https://dragoscatana.com/sitemap.xml
   ```
3. Click **Submit**. Shortcut: if the site isn't added to Bing yet, choose **Import from Google Search Console**. It copies the site and its sitemaps in one step.

**Optional:** in Search Console, use **URL Inspection → Request indexing** for `/`, `/en/` and `/servicii/` to speed up the first crawl.

---

## 1. Shared details (used by every profile)

| Field | Value |
|---|---|
| Name (person) | Dragoș Catană |
| Name without diacritics (if the form rejects ș/ă) | Dragos Catana |
| Legal name | Dragoș-Mihai Catană |
| Business / profile name | Dragoș Catană – Web Design & SEO |
| Website | https://dragoscatana.com |
| English site | https://dragoscatana.com/en/ |
| Location | Cluj-Napoca, Cluj County, Romania |
| Service area | Romania (works online with clients across the country) |
| Phone / WhatsApp | +40 740 939 472 |
| Email | `[your contact email]` |
| Book a call | https://calendly.com/dragoscatana/consultanta-1-la-1 |
| Free audit page | https://dragoscatana.com/audit-gratuit-vizibilitate-ai/ |
| LinkedIn | https://www.linkedin.com/in/dragos-catana/ |
| Instagram | https://www.instagram.com/dragos_catana |
| GitHub | https://github.com/dragos1304 |
| Team size | 1 (freelancer / sole practitioner) |
| Founded / started | `[year you started taking web clients]` |
| Languages | Romanian, English (French and German as an add-on for client sites) |
| Pricing | Not published. Every offer is custom after a free audit and a call. |
| Services | Website redesign · New website design and build · SEO and AI visibility (ChatGPT, Gemini, Perplexity) · Website maintenance |
| Industries | Medical clinics · Law firms · Local businesses |
| Client size | Small businesses |
| Profile photo | A real portrait (still on the TODO). Use the same photo everywhere. |
| Cover / banner image | `public/lucrari/cheesy-media/site-desktop-1440.webp` (Cheesy Media redesign) |

### Taglines (pick one, use it everywhere)
- **EN (49 chars):** `Websites and SEO that get you found by Google and AI`
- **EN, shorter (38 chars):** `Web design & AI-ready SEO in Romania`
- **RO:** `Site-uri și SEO ca să te găsească Google și AI-ul`

### Short description, about 160 characters
**EN**
```
Freelance web designer in Cluj-Napoca. Websites, SEO and AI visibility for clinics, law firms and local businesses in Romania. Free manual audit in 24 hours.
```
**RO**
```
Web designer în Cluj-Napoca. Site-uri, SEO și vizibilitate în AI pentru clinici, cabinete de avocatură și afaceri locale din România. Audit gratuit în 24 de ore.
```

### Medium description, about 400 characters
**EN**
```
I'm Dragoș Catană, a freelance web designer and SEO specialist in Cluj-Napoca, Romania. I redesign and build websites for clinics, law firms and local businesses, and I make them easy to find on Google and in AI assistants like ChatGPT, Gemini and Perplexity. You work with me directly, from the free audit to launch and maintenance. Every offer is custom; the first audit is free and done by hand within 24 hours.
```
**RO**
```
Sunt Dragoș Catană, web designer și specialist SEO din Cluj-Napoca. Fac redesign și site-uri noi pentru clinici, cabinete de avocatură și afaceri locale, și am grijă să fie ușor de găsit în Google și în asistenții AI precum ChatGPT, Gemini și Perplexity. Lucrezi direct cu mine, de la auditul gratuit până la lansare și mentenanță. Fiecare ofertă este personalizată; primul audit este gratuit, făcut manual, în 24 de ore.
```

### Long description, about 1,200 characters (EN)
```
I'm Dragoș Catană, a freelance web designer and SEO specialist based in Cluj-Napoca, Romania. I help clinics, law firms and local businesses get found: on Google, and in the answers of AI assistants like ChatGPT, Gemini and Perplexity.

What I do:
• Website redesign: a faster, clearer site that keeps your existing Google rankings (301 redirects, clean URLs).
• New websites: designed and built from scratch, mobile-first, with structured data on every page.
• SEO and AI visibility: technical SEO, local SEO, Google Business Profile and content that AI assistants can quote.
• Maintenance: updates, small edits and a short report in plain words.

How I work: you talk to the person who does the work. It starts with a free audit, done by hand within 24 hours, then a 30-minute call. After that you get a clear, custom offer. I don't publish fixed prices, and I never promise first place on Google, because nobody can.

Recent work: the Cheesy Media redesign (photo and video agency, Cluj). Mobile Lighthouse performance went from 82 to 100, accessibility from 96 to 100, and the sitemap from 0 to 11 pages.

Background: Economics student at Babeș-Bolyai University (English-taught, 4.0/4.0 GPA), with exchanges in Paris and New York, and 5+ years of entrepreneurship since age 16.
```

### Case study (portfolio item, reused on several sites)
| Field | Value |
|---|---|
| Title | Cheesy Media – website redesign |
| Client | Cheesy Media, photo and video agency, Cluj-Napoca (permission to publish: yes) |
| Services | Redesign, web design, technical SEO, structured data |
| Case study URL | https://dragoscatana.com/lucrari/cheesy-media/ |
| Live site (after) | https://cheesy-media.netlify.app |
| Old site (before) | https://cheesymedia.netlify.app |
| Results (Lighthouse, mobile) | Performance 82 → 100 · Accessibility 96 → 100 · Best practices 100 · SEO 100 |
| Other result | Sitemap: 0 → 11 pages, its own title and description on every page |
| Images | `public/lucrari/cheesy-media/` (use the `-1440.webp` files; convert to PNG/JPG if the site rejects WebP) |

**Case study text (EN)**
```
Cheesy Media is a photo and video agency in Cluj-Napoca. Their old site was a single page with one generic title, so Google and AI assistants had little to show for each service.

I redesigned it as a multi-page site: one page per service, its own title and description on each, structured data on every page and a clean sitemap (0 → 11 pages). The new design puts real work first and loads fast on mobile.

Measured with Lighthouse on mobile: performance 82 → 100, accessibility 96 → 100, best practices and SEO at 100.
```

---

## 2. Crunchbase

**Where:** crunchbase.com → sign up → **Add a Person** (you). You can also add an Organization, but Crunchbase often asks for an email on the company's own domain to verify it. Start with the Person profile.

| Field | Paste |
|---|---|
| Name | Dragoș Catană |
| Primary job title | Web Designer & SEO Specialist |
| Primary organization | Dragoș Catană – Web Design & SEO (or "Self-employed") |
| Location | Cluj-Napoca, Cluj, Romania |
| Short description | EN short description (§1) |
| Full description / bio | EN long description (§1) |
| Website | https://dragoscatana.com |
| LinkedIn | https://www.linkedin.com/in/dragos-catana/ |
| Education | Babeș-Bolyai University – BSc Economics (English-taught) |
| Gender | your choice / leave blank |

**If you also add the Organization:**
| Field | Paste |
|---|---|
| Organization name | Dragoș Catană – Web Design & SEO |
| Website | https://dragoscatana.com |
| Short description | `Websites, SEO and AI visibility for clinics, law firms and local businesses in Romania.` |
| Industries | Web Design · Web Development · SEO · Digital Marketing |
| Headquarters | Cluj-Napoca, Cluj, Romania |
| Founded date | `[year]` |
| Company type | For profit |
| Operating status | Active |
| Number of employees | 1–10 |
| Founder | Dragoș Catană |
| Contact phone | +40 740 939 472 |

---

## 3. Dribbble

**Where:** dribbble.com → sign up → **Edit profile**, then **Upload a shot**.

| Field | Paste |
|---|---|
| Name | Dragoș Catană |
| Location | Cluj-Napoca, Romania |
| Bio | EN medium description (§1) |
| Personal website | https://dragoscatana.com |
| Social profiles | LinkedIn, Instagram, GitHub (from §1) |
| Skills | Web Design, Landing Page, UI Design, Responsive Design, SEO, Next.js |
| Available for hire | On |

**First shot**
| Field | Paste |
|---|---|
| Title | Cheesy Media – Photo & Video Agency Website Redesign |
| Images | `site-desktop-1440.webp` first, then `after-servicii-1440.webp`, `after-portofoliu-1440.webp`, `after-proces-1440.webp`. Dribbble prefers 1600×1200 or 4:3; export them as PNG. |
| Description | Case study text (EN, §1) + `Full case study: https://dragoscatana.com/lucrari/cheesy-media/` |
| Tags | web design, redesign, agency website, photography, video production, responsive, seo, cluj |

---

## 4. Behance

**Where:** behance.net (Adobe account) → **Edit profile**, then **Create a project**.

| Field | Paste |
|---|---|
| First / last name | Dragoș / Catană |
| Occupation | Web Designer & SEO Specialist |
| Company | Freelance |
| Location | Cluj-Napoca, Romania |
| Website | https://dragoscatana.com |
| About me | EN long description (§1) |
| Social links | LinkedIn, Instagram, GitHub (from §1) |
| Available for freelance work | On |

**Project**
| Field | Paste |
|---|---|
| Title | Cheesy Media – Website Redesign |
| Cover | `site-desktop-1440.webp` (export as PNG/JPG; Behance cover is 808×632) |
| Body | Text block: case study text (EN); then the before/after screenshots; then a text block with the Lighthouse results |
| Creative fields (max 3) | Web Design · UI/UX · Interaction Design |
| Tags | web design, website redesign, seo, responsive design, photography agency, video agency, romania, cluj-napoca |
| Tools used | Figma (if you used it), Next.js, Visual Studio Code |
| Project link (credits / external) | https://dragoscatana.com/lucrari/cheesy-media/ |

---

## 5. Clutch

**Where:** clutch.co → **Get listed** (free). The profile is reviewed before it goes live. Clutch ranks mostly on **verified reviews**, so ask Cheesy Media for a Clutch review right away. Clutch interviews the client by phone or with a form.

| Field | Paste |
|---|---|
| Company name | Dragoș Catană – Web Design & SEO |
| Website | https://dragoscatana.com |
| Tagline | EN tagline (§1) |
| Description | EN long description (§1) |
| Founded | `[year]` |
| Employees | 1 (or "2–9" if 1 isn't offered) |
| Headquarters | Cluj-Napoca, Romania |
| Phone | +40 740 939 472 |
| Email | `[your contact email]` |
| Min. project size | Undisclosed |
| Avg. hourly rate | Undisclosed |
| Languages | Romanian, English |

**Focus**
Clutch asks for percentages that add up to 100. The split below is a suggestion; change it to match your real work.

| Service lines | % |
|---|---|
| Web Design | 50 |
| Search Engine Optimization | 35 |
| Web Development | 15 |

| Client focus | % |
|---|---|
| Small Business (< $10M) | 100 |

| Industry focus | % |
|---|---|
| Medical / Healthcare | 35 |
| Legal | 35 |
| Other (local businesses) | 30 |

**Portfolio item:** the Cheesy Media case study (§1).

---

## 6. DesignRush

**Where:** designrush.com → **Get listed** / **Agency sign-up**. The basic listing is free; DesignRush will offer paid "featured" plans, which you don't need. Don't buy anything without deciding on it first.

| Field | Paste |
|---|---|
| Agency name | Dragoș Catană – Web Design & SEO |
| Website | https://dragoscatana.com |
| Tagline | EN tagline (§1) |
| Overview | EN long description (§1) |
| Founded | `[year]` |
| Team size | 1–10 |
| Location | Cluj-Napoca, Romania |
| Phone | +40 740 939 472 |
| Email | `[your contact email]` |
| Min. budget / hourly rate | Undisclosed / Contact for pricing |
| Services | Web Design · Website Development · SEO · Digital Marketing (AI search / GEO if listed) |
| Industries | Healthcare · Legal · Local Business / Small Business |
| Portfolio | Cheesy Media case study (§1) |
| Social | LinkedIn, Instagram (from §1) |

---

## 7. GoodFirms

**Where:** goodfirms.co → **Get listed** (free). GoodFirms also ranks mainly on reviews, so ask Cheesy Media for one here too.

| Field | Paste |
|---|---|
| Company name | Dragoș Catană – Web Design & SEO |
| Website | https://dragoscatana.com |
| Tagline | EN tagline (§1) |
| Summary | EN medium description (§1) |
| Detailed description | EN long description (§1) |
| Founded | `[year]` |
| Employees | 1–10 (or "Freelancer" if offered) |
| Location | Cluj-Napoca, Cluj, Romania |
| Phone | +40 740 939 472 |
| Email | `[your contact email]` |
| Hourly rate / min. project | Not disclosed |
| Service focus | Web Design 50% · SEO 35% · Web Development 15% (same suggestion as Clutch, adjust it) |
| Industry focus | Healthcare & Medical · Legal · Small Business |
| Portfolio | Cheesy Media case study (§1) |
| Social | LinkedIn, Instagram, GitHub (from §1) |

---

## 8. After you publish

- [ ] Send me each profile URL. I'll add it to `social` in `lib/site-config.ts` and redeploy.
- [ ] Ask Cheesy Media for one review on Clutch and one on GoodFirms, and on Google once the Business Profile is verified.
- [ ] Use the same portrait on every profile once you have it.
- [ ] Re-check in 4–6 weeks. Ask ChatGPT, Gemini and Perplexity: "Cine face site-uri pentru clinici în Cluj?" and "Who is Dragoș Catană?". Note whether the profiles are cited.
