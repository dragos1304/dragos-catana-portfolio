// Markdown copy of an article for reposting, with the canonical pointing home.
// node seo/scripts/syndicate.mjs [slug]   → seo/drafts/<slug>.md (nothing is posted)
import { mkdirSync, writeFileSync } from "node:fs";
import { articles } from "../../lib/articles.ts";
const site = "https://dragoscatana.com";
const slug = process.argv[2] ?? [...articles].sort((a, b) => b.date.localeCompare(a.date))[0].slug;
const a = articles.find((x) => x.slug === slug);
if (!a) { console.error(`No article "${slug}". Available: ${articles.map((x) => x.slug).join(", ")}`); process.exit(1); }
const url = `${site}/articole/${a.slug}/`, abs = (s) => s.replace(/\]\(\//g, `](${site}/`);
const md = (b) => b.t === "h2" ? `## ${b.text}` : b.t === "h3" ? `### ${b.text}` : b.t === "p" ? b.text : b.t === "code" ? `\`\`\`\n${b.text}\n\`\`\`` : b.t === "table"
  ? [b.head, b.head.map(() => "---"), ...b.rows].map((r) => `| ${r.map((c) => c.replaceAll("|", "\\|")).join(" | ")} |`).join("\n") : b.items.map((x, i) => `${b.t === "ol" ? `${i + 1}.` : "-"} ${x}`).join("\n");
mkdirSync("seo/drafts", { recursive: true });
const out = `seo/drafts/${slug}.md`;
writeFileSync(out, `---\ntitle: ${JSON.stringify(a.title)}\npublished: false\ncanonical_url: ${url}\n---\n\n${abs(a.blocks.map(md).join("\n\n"))}\n\n---\n\nArticol publicat inițial pe [dragoscatana.com](${url}).\n`);
console.log(`${out}\ncanonical: ${url}`);
