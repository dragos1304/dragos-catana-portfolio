# AI checks: exact steps

All three assistants run in the **in-app browser** (`mcp__Claude_Browser__*`), where Dragoș is already signed in to
Gemini and Claude. ChatGPT is used signed out. One question per fresh private chat: the answers must not land in
his history, and his own history must not shape them. For an audit of his own site that matters a lot, because
signed in as him the assistants already know who he is.

Use mid-tier models, not flagships (his request, to keep usage low).

## ChatGPT (signed out)

```
navigate → https://chatgpt.com/?temporary-chat=true&hints=search&q=<question, URL-encoded>
wait ~20 s (two 10 s waits), then get_page_text
```

`hints=search` forces web search. If the page shows "Log in / Sign up", it is signed out: good. Each URL is a new
chat. A sponsored "Ad" block at the bottom is not part of the answer.

## Gemini (temporary chat, Hydrogen)

1. `navigate → https://gemini.google.com/app`, wait 3 s.
2. `find "temporary chat"` → click **Turn on temporary chat**. Confirm with `find "Turn off temporary"`: it must
   now say *Turn off*. The mode resets with every new chat, so repeat this for every question.
3. The model button should read **Hydrogen** ("Everyday help"). Don't pick Neon ("Deeper analysis").
4. Click the input (~centre of the composer), type the question, press Return.
5. Gemini is slow: wait 30–90 s. Read the answer with
   `javascript_tool: document.querySelector('main').innerText.split('Conversation with Gemini')[1]`
   (get_page_text also returns the whole sidebar). If the answer is still empty, wait and read again. A spinner in
   the screenshot means it's still thinking.

## Claude (incognito, Sonnet)

1. `navigate → https://claude.ai/new?incognito` (the ghost icon, top right). The page says "You're incognito".
2. `find "Model:"` → it must say **Sonnet**. If it says Haiku or anything else, click the model button and pick
   Sonnet (not Opus, not Fable).
3. Click the input, type, Return. Wait ~30 s, then get_page_text. A finished answer ends with "Claude finished the
   response".
4. For the next question, navigate to `/new?incognito` again and re-check the model.

## Perplexity

Needs its own sign-in. If it isn't signed in, don't sign in for him: list it in `ai.notChecked` with the reason.

## What to write down

Per answer: `engine`, `prompt` (exactly as asked), `mentioned`, `position` (1-based order in the answer's list of
recommendations, or 1 when the whole answer is about the business), `recommended` (up to 4 names, never the client),
optional `excerpt` (one per report, under 15 words, the client's language as answered).

`ai.method` names the modes and models, e.g. "ChatGPT signed out; Gemini temporary chat on Hydrogen; Claude
incognito chat on Sonnet 5.5, with web search on."

If an engine refuses or answers about someone else with the same name, that's the finding: record it as
not mentioned and explain it in an `extraIssues` item (e.g. name collision, missing independent sources).
