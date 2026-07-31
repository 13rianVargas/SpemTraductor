# Contributing to SpemTraductor

Thanks for your interest in SpemTraductor. This document covers everything you need to make a contribution that gets merged.

---

## Who Can Contribute

**Code contributions are restricted to members of Clan SPEM, Grupo Scout 74.** This project is not open source; see [LICENSE](LICENSE) for the terms. Pull requests from outside the clan cannot be merged, because the license grants no right to create derivative works.

That restriction applies to code only. **Anyone may:**

- Open an [issue](https://github.com/13rianVargas/SpemTraductor/issues) to report a bug or ask about the implementation.
- Read the source and learn from it. That is a large part of why it is published.

If you are outside the clan and want to build something on top of this, contact the author at [linktr.ee/13rianVargas](https://linktr.ee/13rianVargas) rather than opening a pull request.

---

## Before You Start

This project has two non-negotiable constraints. Contributions that violate either will be closed:

1. **Zero dependencies.** No npm packages, no CDN scripts, no frameworks, no CSS libraries. The application ships exactly what is in the repository.
2. **Zero build step.** No bundlers, no transpilers, no preprocessors. `src/index.html` runs directly in a browser as written.

These are deliberate architectural choices, not oversights. They keep the project auditable end to end, guarantee it will still run years from now, and make the source readable to people learning front-end fundamentals.

A third constraint applies to the cipher itself: **the SpemCode substitution algorithm must not be modified.** Existing SPEM-encoded messages depend on it. Changing a single mapping silently breaks every message the community has ever encoded. If you believe a change is warranted, open an issue and make the case before writing code.

See [AGENTS.md](AGENTS.md) for the full operational context, including the rules that apply to AI coding agents working in this repository.

---

## Local Development

```bash
git clone https://github.com/13rianVargas/SpemTraductor.git
cd SpemTraductor
```

Open the application directly:

```bash
open src/index.html
```

The `file://` protocol works because the project uses no ES modules, so no CORS restrictions apply. If you prefer a local server:

```bash
python3 -m http.server 8000
```

Then visit `http://localhost:8000/src/index.html`.

---

## Making Changes

1. Fork the repository and create a branch from `main`:
   ```bash
   git checkout -b feat/your-feature
   ```
2. Make your change. Keep it focused: one concern per pull request.
3. Test manually in at least two browsers. There is no automated test suite; verification is your responsibility.
4. Confirm the round trip still behaves as documented: type `Spem` into the plaintext field and verify the ciphertext field reads `1234`.
5. Commit using Conventional Commits.
6. Push and open a pull request describing what changed and why.

---

## Commit Convention

Commits follow [Conventional Commits](https://www.conventionalcommits.org/), in English, lowercase after the type prefix.

```
feat: add copy-to-clipboard animation
fix: resolve decryption edge case with special chars
docs: document the case-collapse limitation
style: center layout components
chore: update gitignore
refactor: extract toast into its own function
```

Do not include AI attribution trailers such as `Co-Authored-By` for automated tooling.

---

## What Makes a Good Contribution

Ideas that fit the project's constraints:

- Accessibility improvements: ARIA live regions for the toast, keyboard navigation, focus management.
- Performance: reducing the weight of image assets.
- Architecture: deriving the inverse substitution map from a single source of truth instead of maintaining two hand-written dictionaries.
- Separation of concerns: isolating the pure cipher logic from DOM manipulation.
- Internationalization of the interface.
- A dark theme built on the existing CSS custom properties.

Ideas that do not fit:

- Adding a framework, bundler, or package manager.
- Adding analytics, telemetry, or any external API call.
- Altering the SpemCode mappings.

---

## Reporting Issues

Open an issue at [github.com/13rianVargas/SpemTraductor/issues](https://github.com/13rianVargas/SpemTraductor/issues). For bugs, include your browser and version, the input text, the output you got, and the output you expected.

---

## License

By contributing, you agree that your contributions are assigned to the copyright holder and distributed under the [SpemTraductor Community License](LICENSE). You also confirm that you are a member of Clan SPEM, Grupo Scout 74, and therefore authorized to modify the Software.

The Clan Assets — the SPEM emblem, the shield, and the names SPEM and Clan SPEM — belong to Clan SPEM. Do not replace, recolor, or reuse them for anything outside this project.
