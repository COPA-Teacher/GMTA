# 🧱 Node.js Base Template

A modern, production-ready Node.js (TypeScript) base project template, designed for building scalable and maintainable applications with:

- 🌱 Environment-aware configuration
- 🪵 Centralized structured logging
- 📜 Daily rotated log files
- 🧪 Test-ready setup with `.env.test`
- 🔍 Pre-commit hooks with linting & testing
- 📦 TypeScript, ES Modules, and modern tooling

---

## 🚀 Features

### ✅ Logging (Winston + Morgan)

- Centralized `logger` using `winston`
- Supports **daily rotating logs** for:
    - `error`
    - `http`
    - `combined`
    - `vuln`
    - `audit`
- Includes `correlationId` per log for tracing
- Pretty console logs in development
- JSON logs in production
- `morgan` stream integration for HTTP logs

### 🧪 Testing Environment

- Automatically forces `.env.test` in test mode
- `test` folder included
- Log redirection handled for test environments

### 🛠️ CI + Pre-commit

- `lint-staged` and `husky` configured
- Pre-commit hook runs:
    - Code linter (`eslint`)
    - Unit tests (`npm test`)
- Ensures code quality before every commit

### 🌍 Environments

- `.env` (default)
- `.env.development`, `.env.production`, `.env.test`
- `NODE_ENV` driven logging, configs, etc.

---

## 📁 Folder Structure
```
├── src/
│ ├── configs/
│ │ └── appConfig.ts
│ ├── utils/
│ │ └── logger.ts <-- Winston logger setup
│ ├── middlewares/
│ ├── routes/
│ ├── server.ts <-- App entrypoint
│
├── logs/ <-- Daily log files (by env)
├── tests/ <-- Your test suite
├── .env
├── .env.test
├── .eslintrc
├── tsconfig.json
└── package.json
```
---

## 🧰 Scripts

```bash
# Build TypeScript
npm run build

# Start app
npm start

# Run tests
npm test

# Pre-commit checks (auto-run by Husky)
npm run lint-staged
```
```
├── src/
│ ├── configs/
│ │ └── appConfig.ts
│ ├── utils/
│ │ └── logger.ts <-- Winston logger setup
│ ├── middlewares/
│ ├── routes/
│ ├── server.ts <-- App entrypoint
│
├── logs/ <-- Daily log files (by env)
├── tests/ <-- Your test suite
├── .env
├── .env.test
├── .eslintrc
├── tsconfig.json
└── package.json
```
🏁 Getting Started

# Install dependencies

npm install

# Create your environment files

cp .env.example .env
cp .env.example .env.test

# Run the app

npm run build && npm start

📤 Create a New Project from This Template
To build a new product using this base:
git clone <this-repo> my-new-service
cd my-new-service
git remote remove origin
git init
git add .
git commit -m "feat: initial setup from base template"
Happy building 🚀
