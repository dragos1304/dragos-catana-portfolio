# Deploying to Network Solutions + Cloudflare DNS

The site is a **static export** (`out/`): plain HTML, CSS and JS. It needs no Node server, so it runs on any Network Solutions web hosting plan. The only server-side piece is the form handler `api/contact.php` (PHP). Cloudflare provides DNS (and optionally proxy/CDN).

## 1. Build
```bash
npm ci
npm run build      # creates ./out
```
Upload the **contents** of `out/` to the hosting document root (usually `htdocs/` or `public_html/`). `out/` already contains `.htaccess` (HTTPS, www redirect, security headers, caching, 404 page) and `api/`.

## 2. Form handler (one-time, on the server)
1. In the hosting file manager, open `api/` and copy `config.example.php` to **`config.php`**.
2. Edit it: `to` (where you receive submissions), `from` (an address on `dragoscatana.com`, for example `no-reply@dragoscatana.com`), and `allowed_hosts`.
3. Create the mailbox/alias for `from` and add SPF (and DKIM if your host offers it) in Cloudflare DNS, or mail may land in spam.
4. Test both forms on the live site and check the spam folder.

`config.php` is git-ignored and excluded from automatic deploys, so it is never overwritten.

If your plan has no PHP, set `NEXT_PUBLIC_FORM_ENDPOINT` at build time to a hosted form service that returns `{"ok": true}` (or tell me and I'll adapt the form).

## 3. Cloudflare DNS
1. Add `dragoscatana.com` to Cloudflare and switch the domain's nameservers to the two Cloudflare ones (at the registrar).
2. Create the records your hosting gives you: an **A** record for `@` and a **CNAME** (or A) for `www`, both pointing to the hosting IP/hostname. Keep any MX/SPF records for email.
3. **SSL/TLS mode: Full (strict)**, with a valid certificate on the hosting. Do not use "Flexible": it causes redirect loops with the `.htaccess` HTTPS rule.
4. **AI crawlers:** keep the records **DNS-only** (grey cloud) to start. If you turn the proxy on, make sure "Block AI bots" / bot-fight rules are **off** and the managed `robots.txt` does not override ours, otherwise ChatGPT, Claude, Gemini and Perplexity could be blocked.
5. Add a Cloudflare redirect rule only if you prefer redirecting there instead of in `.htaccess`.

## 3b. Cloudflare HTML cache (since 20 Nov 2026)
- A Cache Rule **"Cache HTML pages (not /api)"** caches every page at Cloudflare's edge for **2 hours** (expression: host is dragoscatana.com and path does not contain `/api/`; Edge TTL: ignore cache-control, 2 hours; Browser TTL: respect origin). Pages now load in about 0.1–0.2 s instead of 0.3–6 s from the host.
- Browsers still revalidate pages every visit (`max-age=0`); hashed assets keep their one-year cache. `/api/` (the form) is never cached.
- **After every deploy, purge the cache:** Cloudflare → dragoscatana.com → Caching → Configuration → **Purge Everything**. Otherwise visitors can see the previous version for up to 2 hours.

## 3c. Manual deploy through the File Manager (the method used so far)
1. `npm run build`, then from `out/`: `zip -qr ../site-deploy-<date>.zip . -x "api/config.php"`.
2. Use a **new zip name every time**: the File Manager does not overwrite an existing file, so an old zip with the same name would be unpacked instead.
3. Network Solutions → hosting details → File Manager → upload to `htdocs` → open the zip → **UnZip** → delete the zip.
4. Purge the Cloudflare cache (3b), then check the site with a browser user agent.
5. The build also writes `api/form-contract.json`, which `api/contact.php` needs. Never upload `api/config.php`.

## 4. Automatic deploys (optional)
`.github/workflows/deploy.yml` builds and uploads `out/` over FTPS. Add these repository secrets in GitHub (Settings → Secrets and variables → Actions): `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`, `FTP_DIR`. It runs on pushes to `main` and manually. Not tested yet, because it needs your hosting credentials.

## 5. After going live
- Submit `https://dragoscatana.com/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- Confirm `https://dragoscatana.com/robots.txt`, `/llms.txt` and the 404 page work.
- Run PageSpeed Insights on the home page and the case study.

## Notes from the first deploy (18 Nov 2026)
- The SFTP account `claudedeploy` is rooted at `/htdocs`, which is already the web root. Mirror `out/` into `/`, not `/htdocs`, or you create `htdocs/htdocs/`:
  `lftp -u "claudedeploy,$SFTP_PW" -e "set sftp:auto-confirm yes; mirror -R --parallel=4 out /; bye" sftp://ftp-a5349bf4.registeredsite.com`
- The host answers **403 to the bare `curl` user agent**. Browsers, Googlebot, Bingbot, GPTBot, ClaudeBot and PerplexityBot get 200. When testing with curl, send a browser `-A` string.
- Reset File Permissions was run once; it was not what fixed the 403 (the user agent was).
