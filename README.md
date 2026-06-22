# m7mdelyoussef.github.io

Personal portfolio site for **Mohamad Elyoussef** (cybersecurity student, Ajman University), built as a pnpm/TypeScript monorepo and deployed to GitHub Pages.

## Live site

Deployed automatically from `main` via GitHub Actions → GitHub Pages.

## Stack

- **Monorepo**: pnpm workspaces, Node.js 24
- **Language**: TypeScript 5.9
- **Frontend**: React + Vite
- **API**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (generates client hooks + Zod schemas from an OpenAPI spec)
- **Build**: esbuild (CJS bundle) for the API server, Vite for frontends

## Structure

```
artifacts/
  portfolio/        React + Vite portfolio site (the deployed GitHub Pages app)
  api-server/       Express API backend
  mockup-sandbox/   Vite sandbox for UI mockups/prototyping
lib/
  db/               Drizzle ORM schema + DB access
  api-spec/         OpenAPI spec + Orval codegen config
  api-zod/          Generated Zod schemas
  api-client-react/ Generated React Query hooks for the API
scripts/            Workspace tooling (e.g. post-merge hook)
```

### Portfolio (`artifacts/portfolio`)

The main site. Features:

- Galaxy particle canvas background with cursor-repel physics
- Cursor glow effect
- Typewriter hero text cycling through roles
- Skills grid with hover/click tooltips
- Project cards with scan-line animation
- Certifications carousel
- Scroll-reveal animations
- Contact form with success animation
- Fully responsive, with mobile menu

**Skills shown:** Python, JavaScript, Kotlin, Java, C#, HTML5, CSS3, SQL, Nmap, Metasploit, Burp Suite, Wireshark, Linux, AWS, Android, Unity, Cisco, Packet Tracer

**Projects shown:** Car Maintenance App (Kotlin), Cybersecurity Labs, Gaming Website, TechNova Network Design, Network Simulation, Unity Game, Web Dev Projects

## Getting started

```bash
pnpm install
```

> This repo requires **pnpm** — npm/yarn installs are blocked by a preinstall check.

### Common commands

| Command | Description |
|---|---|
| `pnpm run typecheck` | Typecheck all packages |
| `pnpm run build` | Typecheck + build all packages |
| `pnpm --filter @workspace/portfolio run dev` | Run the portfolio site locally |
| `pnpm --filter @workspace/api-server run dev` | Run the API server locally |
| `pnpm --filter @workspace/api-spec run codegen` | Regenerate API hooks/Zod schemas from the OpenAPI spec |
| `pnpm --filter @workspace/db run push` | Push DB schema changes (dev only) |

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds `@workspace/portfolio` and deploys `artifacts/portfolio/dist/public` to GitHub Pages. Requires the following repo secrets for the contact form (EmailJS):

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

## Security notes

`pnpm-workspace.yaml` enforces a 1-day minimum release age on new npm package versions as a supply-chain attack defense. Don't disable this; use `minimumReleaseAgeExclude` only for trusted scopes (e.g. `@replit/*`) when an urgent fix is needed.

## License

MIT

