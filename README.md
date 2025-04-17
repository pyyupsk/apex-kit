# Apex Kit ⛰️

**Reach Peak Performance and Developer Experience with this full-stack, type-safe monorepo template, powered by Turborepo.**

Apex Kit provides a meticulously configured foundation for building modern web applications. It leverages Vue 3 for the frontend, Hono on Cloudflare Workers for a lightning-fast edge backend, and tRPC for seamless, end-to-end type safety. All orchestrated within a high-performance **Turborepo** monorepo structure designed for maximum developer velocity and application speed at minimal cost.

[![Build Status](https://img.shields.io/github/actions/workflow/status/pyyupsk/apex-kit/ci.yml?branch=main)](https://github.com/pyyupsk/apex-kit/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Powered by Turborepo](https://img.shields.io/badge/powered%20by-Turborepo-blue)](https://turbo.build/)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](CONTRIBUTING.md)

---

## ✨ Core Features

- **🚀 Peak Performance:** Built on Hono for Cloudflare Workers (Edge Functions) and Vue 3 for optimized frontend rendering.
- **✨ Superior Developer Experience:**
  - **High-Performance Monorepo:** Managed by **Turborepo** for optimized task scheduling and caching.
  - **Blazing Fast Builds & Tasks:** Powered by **Turborepo's caching** - rebuilds only what's necessary.
  - Shared TypeScript configurations.
- **🔒 End-to-End Type Safety:** tRPC ensures your frontend calls and backend procedures share types automatically. Catch errors at build time, not runtime!
- **⚡️ Rapid Development:** Minimal boilerplate, focus on writing features. tRPC auto-completion speeds up frontend development significantly.
- **💸 Low Cost:** Leverages Cloudflare Workers' generous free tier and efficient architecture.
- **🛠️ Modern Tooling:** Vue 3 (Composition API), Hono, tRPC v11+, TypeScript, Vite, ESLint, Prettier, **Turborepo**.

## 🎯 Philosophy

The goal of Apex Kit is to provide a starting point that doesn't compromise. It aims for the **apex** by combining:

1.  **Performance:** Utilizing edge computing, modern frameworks, and **Turborepo's build optimization**.
2.  **Developer Experience:** Ensuring development is fast, intuitive, type-safe, and efficient via **Turborepo's caching and pipeline**.
3.  **Maintainability:** Through clear structure and robust tooling.
4.  **Cost-Effectiveness:** By choosing infrastructure with excellent scaling and pricing.

[Why I Built This Stack: A Freelancer's Journey](https://fasu.dev/blog/5bd4cab2-17dd-43aa-b8ae-166269686320)

## 🛠️ Tech Stack

- **Monorepo Tooling:** [**Turborepo**](https://turbo.build/)
- **Package Manager:** [pnpm](https://pnpm.io/) (used with Turborepo)
- **Frontend:** [Vue 3](https://vuejs.org/) with [Vite](https://vitejs.dev/)
- **Backend:** [Hono](https://hono.dev/) running on [Cloudflare Workers](https://workers.cloudflare.com/)
- **API Layer:** [tRPC](https://trpc.io/) for type-safe RPC
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Linting/Formatting:** [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/)

## 📁 Project Structure

```plaintext
apex-kit/
├── apps/
│   ├── backend/                # Cloudflare Worker + Hono
│   │   ├── src/
│   │   │   ├── routers/        # tRPC routers
│   │   │   ├── trpc/           # tRPC configuration
│   │   │   └── index.ts        # Hono entrypoint
│   └── frontend/               # Vue 3 + Vite
│       ├── public/
│       ├── src/
│       │   ├── api/
│       │   │   └── trpc.ts     # tRPC client
│       │   ├── app.vue         # Vue 3 entrypoint
│       │   ├── main.ts         # Vite entrypoint
│       │   └── vite-env.d.ts
│       └── index.html          # HTML entrypoint
├── packages/
│   ├── eslint-config/          # Shared ESLint configurations
│   └── typescript-config/      # Shared TypeScript configurations
├── package.json
├── pnpm-lock.yaml
├── pnpm-workspace.yaml        # Workspace configuration
└── turbo.json                 # Turborepo configuration
```

## 🚀 Getting Started

**Prerequisites:**

- Node.js (LTS recommended, check `.nvmrc` if present)
- [pnpm](https://pnpm.io/) (v10+ recommended)
- [Cloudflare Account](https://dash.cloudflare.com/sign-up) & [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (for deployment)

**Installation:**

1.  **Clone the repository:**

    ```bash
    git clone git@github.com:pyyupsk/apex-kit.git
    cd apex-kit
    ```

2.  **Install dependencies:**
    ```bash
    pnpm install
    ```
    _(pnpm installs dependencies for all workspaces, Turborepo will manage running tasks across them)_

**Running Development Servers:**

- **Start development servers using Turborepo:**

  ```bash
  pnpm run dev
  ```

  - This command will typically run the `dev` scripts within both `apps/backend` and `apps/frontend` concurrently, respecting dependencies defined in `turbo.json`.
  - Check the output for the URLs of the frontend (Vite) and backend (Wrangler) servers.
  - **Benefit:** Turborepo efficiently manages the parallel processes and logs.

- **Run Development for a Specific App:**

  ```bash
  # Run only the frontend dev server
  turbo run dev --filter=frontend

  # Run only the backend dev server
  turbo run dev --filter=backend
  ```

## Usage / Key Concepts

**(The core concepts of defining tRPC procedures in `apps/backend/src/trpc`, exposing them via Hono in `apps/backend`, and consuming them type-safely in the `apps/frontend` Vue app remain the same as described in the previous README template. See that section above if needed.)**

The main difference with Turborepo is _how_ you run tasks across the monorepo.

## 📜 Available Scripts (via pnpm)

Turborepo acts as the task runner for the monorepo. You'll primarily use the `pnpm` command from the root directory. Common tasks are typically defined in the root `package.json` and orchestrated by the `turbo.json` pipeline configuration.

- **`pnpm build`**: Builds all applications and packages in the monorepo, respecting dependencies and leveraging caching. Builds only what has changed since the last run.
- **`pnpm dev`**: Starts all development servers (e.g., frontend Vite server, backend Wrangler server).
- **`pnpm lint`**: Runs linters across all relevant workspaces. Benefits from Turborepo caching.
- **`pnpm lint:fix`**: Runs linting fixes across all relevant workspaces.
- **`pnpm typecheck`**: Runs TypeScript checks across the monorepo.

**Running Tasks for Specific Workspaces:**

Use the `--filter` flag to target specific apps or packages:

```bash
# Build only the web frontend
turbo build --filter=frontend

# Build only the api backend
turbo build --filter=backend
```

**✨ Turborepo Caching:** Remember that one of Turborepo's main advantages is its **cache**. Subsequent runs of tasks like `build`, `lint`, or `typecheck` will be significantly faster if the source files for that task haven't changed, as Turborepo will restore the results from the cache.

## ☁️ Deployment

The deployment targets (Cloudflare Workers for the API, Vercel/Netlify/Cloudflare Pages for the web app) remain the same, but you'll use Turborepo to build the necessary artifacts.

1.  **Configure Wrangler:** Edit `apps/backend/wrangler.jsonc` as described previously (account ID, worker name, bindings).

2.  **Login to Wrangler:**

    ```bash
    pnpm wrangler login
    ```

3.  **Build the API:**

    ```bash
    turbo build --filter=backend
    ```

    _(Ensure your `turbo.json` correctly defines the build task for `apps/backend`)_

4.  **Deploy the API:** Navigate to the API directory (or ensure your deploy script handles this) and deploy using Wrangler. A common pattern is to have a deploy script in `apps/backend/package.json` that Wrangler can run, or a root script.

    ```bash
    # Example: If you have a deploy script in apps/api/package.json:
    turbo run deploy --filter=backend

    # Or manually navigate and deploy:
    # cd apps/backend
    # pnpm wrangler deploy # or deploy script defined in apps/backend/package.json
    ```

5.  **Build the Frontend:**

    ```bash
    turbo build --filter=frontend
    ```

6.  **Configure Frontend:** Set environment variables (like `VITE_API_URL` pointing to your deployed API) in your frontend hosting provider's settings.

7.  **Deploy Frontend:** Deploy the static output of the `apps/frontend` build (usually `apps/frontend/dist`) to Vercel, Netlify, Cloudflare Pages, etc.

## 🙏 Contributing

Contributions are welcome! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) file for guidelines. Turborepo knowledge is helpful for understanding task pipelines.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
