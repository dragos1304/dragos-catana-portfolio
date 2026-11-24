# Data sources: calls and fields

## Google SERP (DataForSEO through Firecrawl Alexandria)

```json
{"provider": "dataforseo", "capability": "serp/google-organic",
 "options": {"keyword": "web design cluj", "location_name": "Cluj-Napoca,Cluj County,Romania", "language_code": "ro"}}
```

Up to 10 calls in one `alexandria_library_read`. About 1 credit each. A 502 `provider_error` happens; retry that
one keyword once, then move on.

The response is usually too large to return inline. Two cases:
- **Saved to a tool-results file:** summarise with python or jq from Bash. Items live at
  `data.alexandria[i]...tasks[0].result[0].items`.
- **Kept in a Firecrawl workspace** (`delivery: "retained"`): run the `firecrawl / bash` capability with the given
  `workspaceId` (no extra credits). This one command summarises every keyword:

```
jq -r '.data.alexandria[] | .data.tasks[0].result[0] | ("=== " + .keyword), (.items[] |
  if .type=="organic" then "org \(.rank_group) \(.website_name // .breadcrumb) | \(.title[0:70])"
  elif .type=="local_pack" then "LP \(.rank_group) \(.title) | \(.rating.value) \(.rating.votes_count)"
  elif .type=="ai_overview" then "AIO md=\((.markdown//"")|length) hit=\((.markdown//"")|ascii_downcase|contains("<brand>"))"
  elif .type=="knowledge_graph" then "KG \(.title)" else .type end)' response.json
```

Fields: organic `rank_group` is the position among organic results; the real site is `website_name` or
`breadcrumb` (`domain` and `url` are Google redirect links). `local_pack` items are the map pack (positions 1–3).
`ai_overview.markdown` holds the overview text; `null` with `asynchronous_ai_overview: true` means it wasn't
captured.

## Google Maps (Firecrawl Maps)

```json
{"provider": "firecrawl-maps", "capability": "businesses/search",
 "options": {"query": "web design Cluj-Napoca", "country": "ro", "language": "ro"}}
```

10 credits, up to 20 results: `name`, `name_match` (exact/close/none vs the query), `rating`, `review_count`,
`categories` (first = primary), `address`, `phone`, `website`, `feature_id`, `opening_hours`.

```json
{"provider": "firecrawl-maps", "capability": "businesses/rating_trend", "options": {"feature_id": "0x…:0x…"}}
```

5 credits: owner reply rate and reviews per month. Only `feature_id`; adding `language` returns an error.

## Credits

Typical audit: 5 SERP (~5) + 2 Maps searches (20) + rating trend (5, only if there are reviews) ≈ 25–30 credits.
After the run, `firecrawl_feedback` within 20 minutes refunds 1 credit per rated call (optional).
