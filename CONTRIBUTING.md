# 🛠️ Contributing Guidelines

Thank you for considering contributing to this project! This document outlines the process for contributing and maintaining high-quality, consistent code.

---

## 🧱 Project Structure

```bash
.
├── src/                  # All source code
├── dist/                 # Transpiled output (ignored in Git)
├── logs/                 # Log files, separated by type
├── tests/                # Unit & integration tests
├── .eslintrc / config.js # Linting and formatting config
├── package.json
└── ...
```

---

## 🧑‍💻 How to Contribute

1. **Fork the repository** and clone your fork.
2. Create a new branch:
    ```bash
    git checkout -b feat/your-feature-name
    ```
3. Make your changes (see coding standards below).
4. Run lint and tests locally:
    ```bash
    npm run lint && npm run test
    ```
5. Commit with a clear message (see below).
6. Push and open a **pull request (PR)** to `main`.

---

## 💬 Commit Message Convention

We follow the **Conventional Commits** format:

```
<type>(scope?): description
```

### Types

- `feat`: ✨ New feature
- `fix`: 🐛 Bug fix
- `chore`: 🔧 Build/dependency changes
- `refactor`: 🔨 Code cleanup that doesn't affect behavior
- `docs`: 📝 Documentation only
- `style`: 💄 Code formatting only
- `test`: 🧪 Add/fix tests
- `ci`: ⚙️ CI/CD-related changes

**Example:**

```
feat(logger): add correlationId and daily rotated logs
```

---

## 🧹 Code Style & Linting

We use **ESLint + Prettier + TypeScript** to ensure consistent, clean code.

Run the linter:

```bash
npm run lint
```

Auto-fix formatting:

```bash
npm run format
```

Formatting is enforced via pre-commit hooks.

---

## 🧠 Naming Conventions

Naming is enforced with `@typescript-eslint/naming-convention`.

| Target                     | Format(s)                               | Notes                                    |
| -------------------------- | --------------------------------------- | ---------------------------------------- |
| Default identifiers        | `camelCase`                             | General default                          |
| `const` variables          | `camelCase`, `PascalCase`               | PascalCase allowed for class-like consts |
| `import` names             | `camelCase`, `PascalCase`               | Follows common import style              |
| Types, Interfaces, Classes | `PascalCase`                            | e.g., `UserService`, `IUser`             |
| Enum members               | `UPPER_CASE`, `snake_case`              | e.g., `STATUS_OK`, `status_ok`           |
| Private class properties   | `camelCase` + trailing underscore       | e.g., `this.repo_`                       |
| Parameter properties       | `camelCase` + trailing underscore       | e.g., `private logger_`                  |
| Object literal properties  | `camelCase`, `snake_case`, `UPPER_CASE` | Flexible for backend contract compliance |

---

## 🧪 Testing

All new features or fixes should include tests.

```bash
npm run test
```

Use `vitest` or the current project’s test runner. Place test files either next to source or inside `tests/`.

---

## 🗃️ Log Management (Logger)

We use a powerful custom `winston` logger setup with:

- **Daily rotated log files**
- **Multiple levels**: `info`, `error`, `http`, `warn`, `audit`, etc.
- **Correlation ID** on every log
- **JSON format in production**, pretty output in development

Logs go into `logs/{env}/` directory.

---

## 📦 Recommended Tools

- **VSCode** with ESLint + Prettier extensions
- **Volta** or `nvm` to pin Node versions
- Use **Node 18+** unless specified otherwise

---

## 🤝 Code Reviews

PRs will be reviewed for:

- Correctness
- Readability & naming
- Consistency with style guide
- Test coverage (when applicable)

Please respond to feedback and update your PRs as needed.

---

Thank you for contributing! 💙
