# SpemTraductor · Agent Context

> Operational context and rules for AI agents working in this repository.
> Human contributors should read [CONTRIBUTING.md](CONTRIBUTING.md) instead — it covers the same constraints plus the pull request workflow.

---

## Project Overview

**SpemTraductor** is a static web tool that encodes and decodes text using **SpemCode**, a monoalphabetic substitution cipher created for internal communication within **Clan SPEM**, the senior youth section of **Grupo Scout 74** in Bogota, Colombia.

**Live:** https://spem-traductor.vercel.app

SpemCode is a substitution cipher, not cryptography. It provides no confidentiality guarantee. Do not describe it as encryption in user-facing copy, and do not add features that imply it secures data.

---

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — styles, custom properties, responsive layout
- **Vanilla JavaScript** — encoding/decoding logic
- **No build step.** No dependencies. No frameworks.
- **Deploy:** Vercel (static file hosting)

---

## Project Structure

```text
SpemTraductor/
├── README.md
├── CONTRIBUTING.md
├── LICENSE                     # Proprietary, Clan SPEM members only
├── AGENTS.md                   # this file
├── portfolio-cover.png         # 1200x630 social/portfolio card
└── src/
    ├── index.html              # main page (open directly or serve)
    ├── css/
    │   └── style.css
    ├── js/
    │   └── script.js           # SpemCode cipher logic
    └── assets/
        └── img/
            ├── SPEM-Emblem.png
            ├── SPEM-Shield.png
            ├── favicon.png              # 96x96, derived from SPEM-Shield.png
            └── portfolio-cover.png      # served copy, used by Open Graph tags
```

---

## Dev Commands

```bash
# No install, no build. Open directly:
open src/index.html

# Or serve locally:
python3 -m http.server 8000
# then open http://localhost:8000/src/index.html
```

`file://` works because the project uses no ES modules. Introducing `<script type="module">` would break the double-click workflow via CORS — do not do it without an explicit request and a README update.

---

## Deployment

Vercel serves this project with **Root Directory set to `src`** in the project settings. Consequences to keep in mind:

- The deployed site root maps to `src/index.html`. `https://spem-traductor.vercel.app/src/index.html` returns 404.
- Only files under `src/` are served. `portfolio-cover.png` at the repository root is **not** reachable by URL; the copy under `src/assets/img/` is the one Open Graph tags must reference.
- Root Directory is a dashboard-level setting. It cannot be expressed in `vercel.json`, because Vercel reads that file from *inside* the configured root. Do not add a `vercel.json` at the repository root expecting it to take effect.

---

## Conventions

- No external dependencies. Keep it pure HTML/CSS/JS.
- No build tooling. No `package.json` for the core app.
- Cipher logic lives entirely in `src/js/script.js`.
- Commits: Conventional Commits, English, lowercase.
  ```
  feat: add copy-to-clipboard animation
  fix: resolve decryption edge case with special chars
  ```
- Never add `Co-Authored-By` or other AI attribution trailers to commits.

---

## Licensing

This project is **not open source**. See [LICENSE](LICENSE). Use and modification are granted only to members of Clan SPEM, Grupo Scout 74.

- Do not add badges, text, or metadata describing the project as MIT, open source, or OSI-approved.
- Do not add a `SPDX-License-Identifier` header for any OSI license.
- Copyright in the code belongs to 13rian Vargas. The visual identity — emblem, shield, and the names SPEM and Clan SPEM — belongs to Clan SPEM and must not be replaced, recolored, or reused for anything else.

---

## Known Limitations

Documented deliberately, not bugs to silently "fix":

- **The cipher is not bijective for case.** `encrypt()` maps both `s` and `S` to `1`, and likewise `p`/`P` to `2`, `e`/`E` to `3`, `m`/`M` to `4`. Round-tripping loses capitalization: `Spem` encodes to `1234`, which decodes back to `spem`. Digits carry no case, so this is inherent to the mapping. Any fix changes the cipher and breaks existing encoded messages.
- **The substitution table is duplicated.** `src/js/script.js` maintains two hand-written mirror dictionaries, one per direction. This is a drift hazard. Deriving the inverse from a single source of truth is on the backlog.

---

## AI Agent Instructions

- This is a static, no-build project. Do not introduce npm packages, bundlers, or frameworks.
- The SpemCode cipher algorithm is intentional and must not be modified unless explicitly requested.
- Do not add tracking, analytics, or external API calls.
- No automatic commits. Present changes for review first.

---

## Temporary Files

- `tmp/` is gitignored. Store one-off scripts and throwaway files there.
- Delete after use. Never commit anything from `tmp/`.
