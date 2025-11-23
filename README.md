<div align="center">

# Next.js + WXT Turborepo Template

An opinionated high‑performance Turborepo template combining **Next.js 16**, **WXT (Browser Extension Framework)**, **shadcn/ui**, **Tailwind CSS**, and **Biome (via Ultracite)** — all powered by **Bun** workspaces & Bun's catalog. Every app and internal package can run independently or together, making this an ideal starter for full‑stack web + extension ecosystems.

</div>

## Why This Template

- **Unified stack** for Web App + Browser Extension sharing a design system
- **Ultra‑fast toolchain**: Bun (install, scripts, future runtime) + Biome (Rust) formatting/linting through Ultracite
- **Composable architecture**: Each app/package is self‑contained; develop, build, and test in isolation
- **Scalable DX**: Turborepo task orchestration, remote caching ready, path aliases, reusable configs
- **Modern UI**: shadcn/ui components wrapped in a shared `@workspace/ui` library with Tailwind
- **Strict Type Safety**: Centralized TypeScript configs & enforced lint/format standards

## Stack Overview

| Layer           | Tech                 | Purpose                                       |
| --------------- | -------------------- | --------------------------------------------- |
| Web App         | Next.js 16           | SSR/ISR, App Router, future Bun runtime       |
| Extension       | WXT + React          | Cross‑browser extension with shared UI        |
| UI Library      | shadcn/ui + Tailwind | Design system + primitives                    |
| Styling         | Tailwind CSS         | Utility‑first styling with shared config      |
| Tooling         | Turborepo            | Orchestrated builds/tasks/caching             |
| Package Manager | Bun                  | Fast installs, workspaces, catalog resolution |
| Lint/Format     | Biome via Ultracite  | Zero‑config strict code quality               |
| Git Hooks       | Lefthook             | Pre‑commit formatting & validation            |

## Repository Structure

```
apps/
	web/         # Next.js 16 application
	extension/   # WXT browser extension (React + shared UI)
packages/
	ui/             # Shared shadcn/ui component library
	tailwind-config/ # Central Tailwind preset
	typescript-config/ # Shared tsconfig bases
```

Additional meta/config files: `turbo.json`, `biome.json(c)`, `lefthook.yml`, per‑package `tsconfig` variants.

## Development

Install dependencies (Bun workspaces auto‑link packages):

```sh
bun install
```

Run all apps in parallel:

```sh
bun dev
```

Filter to a single target (e.g. web):

```sh
bun dev --filter=web
```

Build everything:

```sh
bun run build
```

Build only the extension:

```sh
bun run build --filter=extension
```

## Quality & Formatting

Format & auto‑fix with Ultracite (Biome):

```sh
bun fix
```

Check without applying fixes:

```sh
bun lint
```

Restart TypeScript language service (VS Code) if path aliases change.

## Shared UI & Styling

- shadcn/ui components live in `packages/ui/src/components`.
- Tailwind config is centralized in `packages/tailwind-config` and consumed by apps.
- Use semantic markup & accessibility defaults; follow Ultracite standards.

### Adding shadcn/ui Components

Run the shadcn CLI from within the target app directory to install components:

```sh
cd apps/web
bunx --bun shadcn@latest add button
```

or for the extension:

```sh
cd apps/extension
bunx --bun shadcn@latest add button
```

Components will be placed in the appropriate `components` directory:

- App-specific components go into `apps/{web|extension}/src/components`
- Shared components can be moved to `packages/ui/src/components` for reuse across apps

For more details on monorepo setup, see the [shadcn/ui monorepo guide](https://ui.shadcn.com/docs/monorepo).

## Browser Extension (WXT)

- Source under `apps/extension/src` (`background`, `content`, `popup`).
- Leverages shared UI so styling & components match the web app.
- Uses TypeScript strict mode and path aliases declared in extended tsconfigs.

## TypeScript Configuration

Central tsconfig bases (`packages/typescript-config`) prevent drift. App/extension override only what they must (e.g. `jsx`, path additions). Note: `compilerOptions.paths` are not deep‑merged — redefine inherited entries when adding custom aliases.

## Adding a New Package or App

1. Create folder under `packages/` or `apps/`.
2. Add minimal `package.json` with `"name"` and `"workspace"` scope.
3. Extend shared tsconfig: `"extends": "@workspace/typescript-config/base.json"` (or relevant variant).
4. Register build/dev scripts if needed.
5. Run `bun install` (Bun updates workspace graph).

## Remote Caching (Optional)

Enable Turborepo remote caching via Vercel for CI/team acceleration:

```sh
turbo login
turbo link
```

## Git Hooks

Lefthook executes formatting & potential validations on commit. Adjust in `lefthook.yml`.

## Template Usage

To start a new project from this template:

```sh
git clone https://github.com/mmikhan/next-wxt-turborepo my-app
cd my-app
rm -rf .git
git init
bun install
bun run turbo dev
```

Then update `package.json` names, repository metadata, and any branding assets.

## Roadmap / Future

- Adopt Bun runtime for Next.js custom server & extension background scripts
- Expand UI library with accessible patterns & test coverage
- Preconfigured CI (GitHub Actions) with caching & Biome checks
- Optional storybook or visual regression pipeline

## License

MIT

## References

- https://turbo.build/repo
- https://bun.sh
- https://nextjs.org
- https://wxt.dev
- https://ui.shadcn.com
- https://tailwindcss.com
- https://biomejs.dev

---

Feel free to open issues or PRs to improve the template.
